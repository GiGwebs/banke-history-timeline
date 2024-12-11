import React from 'react';

interface TimelineProgressProps {
  total: number;
  current: number;
}

export const TimelineProgress: React.FC<TimelineProgressProps> = ({ total, current }) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`transition-all duration-500 rounded-full
                     ${index === current 
                       ? 'w-8 h-3 bg-primary shadow-lg' 
                       : 'w-3 h-3 bg-gray-200 hover:bg-gray-300'}`}
        />
      ))}
    </div>
  );
};