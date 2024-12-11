import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Milestone } from './TimelineData';

interface TimelineModalProps {
  milestone: Milestone | null;
  onClose: () => void;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ milestone, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!milestone) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="mb-6">
          <span className="text-primary font-bold text-lg">{milestone.year}</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {milestone.title}
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg">
          {milestone.longDescription}
        </p>
      </div>
    </div>
  );
};