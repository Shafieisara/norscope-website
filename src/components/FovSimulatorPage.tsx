import React, { useState } from 'react';
import { Check, AlertTriangle, Crosshair } from 'lucide-react';
import factoryBg from '../assets/solution-factory-reality.webp';

export function FovSimulatorPage() {
  const [fovLevel, setFovLevel] = useState(50);

  // Field of View parameters (simulated)
  const minFovWidth = 400; // E.g., 20-30 degree FOV (Hololens 1 type)
  const maxFovWidth = 1400; // E.g., 70+ degree FOV (Magic Leap 2 type)
  const currentWidth = minFovWidth + (maxFovWidth - minFovWidth) * (fovLevel / 100);
  const currentHeight = currentWidth * 0.6; // 16:9ish aspect ratio

  const degrees = Math.round(25 + (45 * (fovLevel / 100)));

  return (
    <div className="min-h-screen bg-white text-[var(--dark-text)] font-sans overflow-hidden flex flex-col">
      {/* Header */}
      <header className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center z-20 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-4">
          <h1 className="text-[18px] md:text-xl font-semibold text-[var(--industrial-blue)]">
            Norscope Optical Field of View (FOV) Simulator
          </h1>
        </div>
        <a href="#/" className="text-sm font-medium text-gray-500 hover:text-[var(--industrial-blue)] transition-colors">
          Return to Website
        </a>
      </header>

      {/* Main Simulator Area */}
      <main className="flex-grow relative flex items-center justify-center bg-gray-100">
        
        {/* Background "Real World" Environment */}
        <div className="absolute inset-0 z-0">
          <img 
            src={factoryBg} 
            alt="Factory Environment" 
            className="w-full h-full object-cover grayscale opacity-90 contrast-75 brightness-110"
          />
        </div>

        {/* The Smart Glasses Lens Frame (The FOV clipping mask) */}
        {/* Transparent background, just a sharp, clean optical border */}
        <div 
          className="relative z-10 overflow-hidden rounded-md border-[3px] border-[var(--industrial-blue)] shadow-[0_0_0_100vw_rgba(0,0,0,0.25)] transition-all duration-75 ease-out pointer-events-none"
          style={{ width: `${currentWidth}px`, height: `${currentHeight}px` }}
        >
          {/* 
            AR UI OVERLAY CONTENT
            We use a full-screen div absolutely centered to ensure holograms stay locked 
            to the background image environment, regardless of the mask size simulating optical clipping.
          */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh]">
            
            {/* --- AUTHENTIC NORSCOPE UI ELEMENTS --- */}

            {/* Task Checklist Panel (Anchored to the left of the focal point) */}
            <div className="absolute top-[38%] right-[52%] bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl w-80 border border-gray-200">
               <h3 className="text-[17px] font-bold mb-4 border-b border-gray-200 pb-3 flex items-center gap-3">
                 <span className="w-3 h-3 bg-[var(--industrial-blue)] rounded-sm"></span> Sequence 43A
               </h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-4 opacity-40">
                   <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0"/> 
                   <span className="text-[15px]">1. Isolate main power supply</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-5 h-5 border-[2.5px] border-[var(--industrial-blue)] rounded-full flex-shrink-0 mt-0.5 animate-pulse bg-blue-50"></div> 
                   <span className="text-[15px] font-semibold">2. Uncouple high-pressure hydraulic fluid line B</span>
                 </li>
                 <li className="flex items-start gap-4 text-gray-400">
                   <div className="w-5 h-5 border-[2.5px] border-gray-300 rounded-full flex-shrink-0 mt-0.5"></div> 
                   <span className="text-[15px]">3. Remove worn casing</span>
                 </li>
               </ul>
            </div>

            {/* Warning / Context Panel (Anchored to the right of the focal point) */}
            <div className="absolute top-[42%] left-[53%] bg-[#DC2626]/95 backdrop-blur-md rounded-xl p-5 shadow-2xl w-72 text-white border border-red-500">
               <h3 className="font-bold text-[16px] mb-2 flex items-center gap-2">
                 <AlertTriangle size={20} /> Danger: High Pressure
               </h3>
               <p className="text-[14px] opacity-90 leading-relaxed">
                 You must ensure manifold valve A-4 is fully closed before uncoupling line B to prevent fluid blowout.
               </p>
            </div>
            
            {/* Target Reticle (Anchored directly over the focal point) */}
            <div className="absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                    <Crosshair size={48} className="text-[var(--industrial-blue)] drop-shadow-md" />
                    {/* Guiding Line Left to checklist */}
                    <div className="absolute top-1/2 right-[120%] w-32 h-[2px] bg-[var(--industrial-blue)]/50"></div>
                </div>
            </div>

          </div>
        </div>

      </main>

      {/* Control Panel (Bottom) */}
      <footer className="h-32 bg-white border-t border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <label htmlFor="fov-slider" className="text-[13px] text-gray-500 mb-4 font-semibold tracking-widest uppercase">
          Simulated Optical Field of View: <span className="text-[var(--industrial-blue)] font-bold ml-2 text-[15px]">{degrees}°</span>
        </label>
        
        <input 
          id="fov-slider"
          type="range" 
          min="0" 
          max="100" 
          value={fovLevel} 
          onChange={(e) => setFovLevel(Number(e.target.value))}
          className="w-full max-w-2xl h-2.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[var(--industrial-blue)] hover:accent-blue-700 transition-colors"
        />
        
        <div className="w-full max-w-2xl flex justify-between mt-3 text-[13px] text-[#6B6B6B] font-medium">
          <span>Narrow FOV Limitation</span>
          <span>Immersive Wide FOV</span>
        </div>
      </footer>
    </div>
  );
}
