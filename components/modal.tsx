// Modal.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <motion.div
        className="relative bg-blue-900 p-4 rounded-full w-[500px] h-[500px] overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <button
          className="absolute top- right- text-4xl text-black font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt="Modal"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Modal;
