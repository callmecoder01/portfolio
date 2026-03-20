'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 2.5;
const MOUSE_INFLUENCE = 3;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const mouse3D = useRef(new THREE.Vector3(0, 0, 0));
  const { viewport, camera } = useThree();

  // Generate random particle positions
  const particles = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        )
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.004
        )
      );
    }
    return { positions, velocities };
  }, []);

  // Dummy for instanced mesh
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Line geometry for connections
  const lineGeometry = useMemo(() => {
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(maxLines * 6);
    const colors = new Float32Array(maxLines * 6);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setDrawRange(0, 0);
    return geometry;
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !linesRef.current) return;

    // Convert mouse to 3D
    mouse3D.current.set(
      mouseRef.current.x * viewport.width * 0.5,
      mouseRef.current.y * viewport.height * 0.5,
      0
    );

    const positions = particles.positions;
    const velocities = particles.velocities;
    const time = state.clock.elapsedTime;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const pos = positions[i];
      const vel = velocities[i];

      // Add slight drift
      pos.x += vel.x + Math.sin(time * 0.3 + i) * 0.001;
      pos.y += vel.y + Math.cos(time * 0.2 + i * 0.5) * 0.001;
      pos.z += vel.z;

      // Mouse repulsion (gentle push)
      const dx = pos.x - mouse3D.current.x;
      const dy = pos.y - mouse3D.current.y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);
      if (distToMouse < MOUSE_INFLUENCE) {
        const force = (MOUSE_INFLUENCE - distToMouse) * 0.003;
        pos.x += dx * force;
        pos.y += dy * force;
      }

      // Bounce at boundaries
      if (Math.abs(pos.x) > 7) vel.x *= -1;
      if (Math.abs(pos.y) > 5) vel.y *= -1;
      if (Math.abs(pos.z) > 4) vel.z *= -1;

      // Scale based on z depth
      const scale = 0.03 + (pos.z + 4) * 0.008;
      dummy.position.copy(pos);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update connections
    const linePositions = lineGeometry.attributes.position.array as Float32Array;
    const lineColors = lineGeometry.attributes.color.array as Float32Array;
    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const idx = lineIndex * 6;

          linePositions[idx] = positions[i].x;
          linePositions[idx + 1] = positions[i].y;
          linePositions[idx + 2] = positions[i].z;
          linePositions[idx + 3] = positions[j].x;
          linePositions[idx + 4] = positions[j].y;
          linePositions[idx + 5] = positions[j].z;

          // Cyan color with distance-based alpha
          const r = 0.024 * alpha;
          const g = 0.714 * alpha;
          const b = 0.831 * alpha;
          lineColors[idx] = r;
          lineColors[idx + 1] = g;
          lineColors[idx + 2] = b;
          lineColors[idx + 3] = r;
          lineColors[idx + 4] = g;
          lineColors[idx + 5] = b;

          lineIndex++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.4} />
      </lineSegments>
    </>
  );
}

function FloatingShapes() {
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.position.y = Math.sin(t * 0.4) * 0.5 + 2;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.2;
      octaRef.current.rotation.z = t * 0.15;
      octaRef.current.position.y = Math.cos(t * 0.3) * 0.4 - 1.5;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.18;
      icoRef.current.rotation.z = t * 0.1;
      icoRef.current.position.x = Math.sin(t * 0.25) * 0.3 + 4;
    }
  });

  return (
    <>
      {/* Wireframe torus */}
      <mesh ref={torusRef} position={[-4, 2, -2]}>
        <torusGeometry args={[0.6, 0.2, 12, 24]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Wireframe octahedron */}
      <mesh ref={octaRef} position={[3.5, -1.5, -1]}>
        <octahedronGeometry args={[0.5]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.12} />
      </mesh>

      {/* Wireframe icosahedron */}
      <mesh ref={icoRef} position={[4, 1, -3]}>
        <icosahedronGeometry args={[0.4]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.1} />
      </mesh>
    </>
  );
}

export default function ParticleNetwork() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-5">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
