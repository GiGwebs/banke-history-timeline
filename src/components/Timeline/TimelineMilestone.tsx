import React from 'react';
import * as Icons from 'lucide-react';
import { Milestone } from './TimelineData';

interface TimelineMilestoneProps {
  milestone: Milestone;
  isLeft: boolean;
  isLast: boolean;
}

export const TimelineMilestone: React.FC<TimelineMilestoneProps> = ({
  milestone,
  isLeft,
  isLast
}) => {
  const IconComponent = (Icons as any)[milestone.icon.charAt(0).toUpperCase() + milestone.icon.slice(1)];

  return (
    <div className={`flex items-center ${!isLast ? 'mb-12' : ''}`}>
      {/* Left side content */}
      {isLeft ? (
        <div className="w-5/12 pr-16 relative opacity-0 animate-slideLeft">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="text-xl font-bold text-primary mb-2 block">
              {milestone.year}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {milestone.title}
            </h3>
            <p className="text-gray-600">
              {milestone.description}
            </p>
          </div>
          {/* Dotted line connector */}
          <div className="absolute right-8 top-1/2 w-8 h-[2px] bg-dotted-line" />
        </div>
      ) : (
        <div className="w-5/12" />
      )}

      {/* Center Icon */}
      <div className="w-2/12 flex justify-center">
        <div className="w-10 h-10 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10 transform transition-transform duration-300 hover:scale-110">
          <IconComponent size={18} className="text-primary" />
        </div>
      </div>

      {/* Right side content */}
      {!isLeft ? (
        <div className="w-5/12 pl-16 relative opacity-0 animate-slideRight">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="text-xl font-bold text-primary mb-2 block">
              {milestone.year}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {milestone.title}
            </h3>
            <p className="text-gray-600">
              {milestone.description}
            </p>
          </div>
          {/* Dotted line connector */}
          <div className="absolute left-8 top-1/2 w-8 h-[2px] bg-dotted-line" />
        </div>
      ) : (
        <div className="w-5/12" />
      )}
    </div>
  );
};