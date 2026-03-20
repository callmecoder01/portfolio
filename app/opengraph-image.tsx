import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Saroj Kumar Sah - Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orb */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)',
          }}
        />

        {/* Comment line */}
        <div
          style={{
            fontSize: 20,
            color: '#6b7280',
            fontFamily: 'monospace',
            marginBottom: 16,
          }}
        >
          {'// hello world'}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 8,
            display: 'flex',
          }}
        >
          Saroj Kumar
          <span style={{ color: '#06B6D4', marginLeft: 16 }}>Sah</span>
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            color: '#06B6D4',
            fontFamily: 'monospace',
            marginBottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {'>'} Full Stack Developer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 20,
            color: '#9ca3af',
            maxWidth: 700,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          3+ years building scalable backends, AI pipelines, and production apps across e-commerce, SaaS, and EdTech.
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Node.js', 'NestJS', 'React', 'PostgreSQL', 'AWS', 'Docker'].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: 8,
                  color: '#06B6D4',
                  fontSize: 16,
                  fontFamily: 'monospace',
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 80,
            fontSize: 18,
            color: '#4b5563',
            fontFamily: 'monospace',
          }}
        >
          sarojsah.info.np
        </div>
      </div>
    ),
    { ...size }
  );
}
