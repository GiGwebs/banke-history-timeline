import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

export const TimelineControls: React.FC<TimelineControlsProps> = ({
  onPrevious,
  onNext,
  canGoBack,
  canGoForward,
}) => {
  return (
    <div className="flex justify-center gap-6 mt-12">
      <button
        onClick={onPrevious}
        disabled={!canGoBack}
        className={`p-4 rounded-2xl transition-all duration-300 transform
                   ${canGoBack
                     ? 'bg-white text-primary shadow-lg hover:scale-105 hover:shadow-xl active:scale-95'
                     : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                   }`}
        aria-label="Previous milestone"
      >
        <ChevronLeft size={28} strokeWidth={2.5} />
      </button>
      <button
        onClick={onNext}
        disabled={!canGoForward}
        className={`p-4 rounded-2xl transition-all duration-300 transform
                   ${canGoForward
                     ? 'bg-white text-primary shadow-lg hover:scale-105 hover:shadow-xl active:scale-95'
                     : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                   }`}
        aria-label="Next milestone"
      >
        <ChevronRight size={28} strokeWidth={2.5} />
      </button>
    </div>
  );
};