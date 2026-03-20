'use client';

import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface SwipeContainerProps {
  children: ReactNode[];
}

const sectionLabels = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function SwipeContainer({ children }: SwipeContainerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSections = children.length;

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
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
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
            x: { type: 'spring', stiffness: 180, damping: 28, mass: 0.8 },
            opacity: { duration: 0.4, ease: 'easeInOut' },
            scale: { duration: 0.4, ease: 'easeInOut' },
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

      {/* Desktop: Text labels on right */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 text-sm font-medium">
        {sectionLabels.map((label, index) => (
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

      {/* Mobile: Dots at bottom */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg">
        {sectionLabels.map((label, index) => (
          <button
            key={label}
            onClick={() => {
              setDirection(index > currentSection ? 1 : -1);
              setCurrentSection(index);
            }}
            className={`rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'w-6 h-2 bg-primary-500'
                : 'w-2 h-2 bg-gray-300 active:bg-primary-400'
            }`}
            aria-label={label}
          />
        ))}
      </div>
    </div>
  );
}
