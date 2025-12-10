'use client';

import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface SwipeContainerProps {
  children: ReactNode[];
}

export default function SwipeContainer({ children }: SwipeContainerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSections = children.length;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
        setDirection(1);
        setCurrentSection((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        setDirection(-1);
        setCurrentSection((prev) => prev - 1);
      }
    };

    // Handle custom navigation events
    const handleNavigate = ((e: CustomEvent) => {
      const targetSection = e.detail.section;
      if (targetSection >= 0 && targetSection < totalSections) {
        setDirection(targetSection > currentSection ? 1 : -1);
        setCurrentSection(targetSection);
      }
    }) as EventListener;

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('navigateToSection', handleNavigate);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('navigateToSection', handleNavigate);
    };
  }, [currentSection, totalSections]);

  // Handle wheel scroll
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (e.deltaY > 0 && currentSection < totalSections - 1) {
          setDirection(1);
          setCurrentSection((prev) => prev + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
          setDirection(-1);
          setCurrentSection((prev) => prev - 1);
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, [currentSection, totalSections]);

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;

    if (info.offset.x < -swipeThreshold && currentSection < totalSections - 1) {
      setDirection(1);
      setCurrentSection((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && currentSection > 0) {
      setDirection(-1);
      setCurrentSection((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSection}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0"
        >
          {children[currentSection]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSection ? 1 : -1);
              setCurrentSection(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'w-8 bg-primary-500 shadow-glow'
                : 'w-2 bg-gray-400 hover:bg-primary-400'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 text-sm font-medium">
        {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((label, index) => (
          <button
            key={label}
            onClick={() => {
              setDirection(index > currentSection ? 1 : -1);
              setCurrentSection(index);
            }}
            className={`text-right transition-all duration-300 ${
              index === currentSection
                ? 'text-primary-600 scale-110 font-semibold'
                : 'text-gray-400 hover:text-primary-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
