import React from 'react';
import { TimelineCapture } from './components/Timeline/TimelineCapture';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#0047AB] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Banke ApS</h1>
        </div>
      </header>
      
      <main>
        <TimelineCapture />
      </main>
    </div>
  );
}

export default App;