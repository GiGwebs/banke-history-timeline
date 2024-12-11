import React from 'react';
import { timelineData } from './TimelineData';
import { TimelineMilestone } from './TimelineMilestone';

export const Timeline: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600">
            Key milestones that shaped Banke ApS
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-[2px] top-0 h-full w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30" />
          
          {/* Timeline content */}
          <div className="relative">
            {timelineData.map((milestone, index) => (
              <TimelineMilestone
                key={milestone.id}
                milestone={milestone}
                isLeft={index % 2 === 0}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};