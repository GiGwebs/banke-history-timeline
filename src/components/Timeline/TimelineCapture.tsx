import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { Timeline } from './Timeline';
import { SVG } from '@svgdotjs/svg.js';
import { timelineData } from './TimelineData';
import * as Icons from 'lucide-react';

export const TimelineCapture: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const captureTimeline = async () => {
    if (timelineRef.current) {
      const canvas = await html2canvas(timelineRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
      });
      
      const link = document.createElement('a');
      link.download = 'banke-timeline.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const captureTimelineSVG = () => {
    try {
      // Create SVG document
      const width = 1200;
      const height = timelineData.length * 150;
      const draw = SVG().size(width, height);
      
      // Add white background
      draw.rect(width, height).fill('#ffffff');
      
      // Draw vertical timeline line
      const centerX = width / 2;
      draw.line(centerX, 50, centerX, height - 50)
          .stroke({ color: '#0047AB', width: 2, opacity: 0.8 });

      // Add title
      const title = draw.text('Our Journey')
        .font({
          family: 'Arial',
          size: 32,
          anchor: 'middle',
          weight: 'bold'
        })
        .fill('#0047AB')
        .move(centerX, 20);

      // Add subtitle
      draw.text('Key milestones that shaped Banke ApS')
        .font({
          family: 'Arial',
          size: 16,
          anchor: 'middle'
        })
        .fill('#666666')
        .move(centerX, 60);

      // Draw milestones
      timelineData.forEach((milestone, index) => {
        const y = 150 + (index * 150);
        const isLeft = index % 2 === 0;
        
        // Draw connector dot
        const dot = draw.circle(20)
          .fill('#ffffff')
          .stroke({ color: '#0047AB', width: 3 })
          .move(centerX - 10, y - 10);

        // Draw milestone box
        const boxWidth = 300;
        const boxX = isLeft ? centerX - boxWidth - 50 : centerX + 50;
        const box = draw.group();
        
        // Box background
        box.rect(boxWidth, 100)
           .radius(10)
           .fill('#ffffff')
           .stroke({ color: '#e5e7eb', width: 1 })
           .move(boxX, y - 30);

        // Year text
        box.text(String(milestone.year))
           .font({
             family: 'Arial',
             size: 20,
             weight: 'bold'
           })
           .fill('#0047AB')
           .move(boxX + 20, y - 20);

        // Title text
        box.text(milestone.title)
           .font({
             family: 'Arial',
             size: 16,
             weight: 'bold'
           })
           .fill('#1f2937')
           .move(boxX + 20, y + 5);

        // Description text
        box.text(milestone.description)
           .font({
             family: 'Arial',
             size: 14
           })
           .fill('#4b5563')
           .move(boxX + 20, y + 30);

        // Draw connector line
        const lineStartX = isLeft ? boxX + boxWidth : boxX;
        const lineEndX = isLeft ? centerX - 15 : centerX + 15;
        draw.line(lineStartX, y, lineEndX, y)
            .stroke({ color: '#0047AB', width: 1, dasharray: '4,4' });
      });

      // Download SVG
      const svgData = draw.svg();
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.download = 'banke-timeline-editable.svg';
      link.href = url;
      link.click();
      
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating SVG:', error);
      alert('There was an error generating the SVG. Please try again.');
    }
  };

  return (
    <div>
      <div ref={timelineRef}>
        <Timeline />
      </div>
      <div className="text-center mt-8 space-x-4">
        <button
          onClick={captureTimeline}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Download as PNG
        </button>
        <button
          onClick={captureTimelineSVG}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Download Editable SVG
        </button>
      </div>
    </div>
  );
};