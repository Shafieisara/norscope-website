import React, { useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { createXRStore, XR } from '@react-three/xr';
import { Text, RoundedBox } from '@react-three/drei';

export function TrueArOverlayPage() {
  // Initialize the XR store to manage the AR session state and entries
  const store = useMemo(() => createXRStore(), []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col relative overflow-hidden">
      
      {/* 2D HTML Interface for standard browsing and entering AR */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
        
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--industrial-blue)] mb-6 drop-shadow-md">
          Norscope True AR
        </h1>
        <p className="text-gray-300 max-w-xl mb-10 leading-relaxed text-lg bg-black/40 p-4 rounded-xl backdrop-blur-sm">
          This entire page is a transparent WebGL canvas waiting to connect to your headset's physical cameras. Put on your WebXR-compatible device (Meta Quest, Magic Leap) and click below to enter passthrough mode.
        </p>

        {/* The critical button to trigger WebXR session (must be pointer-events-auto) */}
        <button 
          onClick={() => store.enterAR()} 
          className="pointer-events-auto px-10 py-5 bg-[var(--industrial-blue)] hover:bg-blue-600 rounded-xl font-bold text-xl shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all hover:scale-105 active:scale-95 text-white"
        >
          Enter Real AR
        </button>

        <a href="#/" className="pointer-events-auto mt-12 text-sm text-gray-500 hover:text-white transition-colors">
          Return to Standard Website
        </a>

      </div>

      {/* The 3D Canvas rendering BEHIND everything. 
          When store.enterAR() is called, this Canvas takes over the headset 
          vision and the HTML <div>s above disappear naturally. */}
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ alpha: true }} style={{ background: 'transparent' }}>
          <XR store={store}>
            <ambientLight intensity={1} />
            
            {/* The AR Holograms extracted into a component for state management */}
            <ArHolograms />

          </XR>
        </Canvas>
      </div>
    </div>
  );
}

// Subcomponent allows us to use React State (useState) inside the WebGL Canvas for interactions!
function ArHolograms() {
  const [acknowledged, setAcknowledged] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Background floating glass panel for System Status */}
      {/* Lifted to Y = 1.5 (average eye level from the floor origin in WebXR) */}
      <group position={[0, 1.5, -1.5]}>
        <RoundedBox args={[0.8, 0.5, 0.02]} radius={0.02} smoothness={4}>
          <meshStandardMaterial color="#001122" transparent opacity={0.8} />
        </RoundedBox>

        {/* Header */}
        <Text position={[-0.35, 0.18, 0.02]} fontSize={0.05} color="#3B82F6" anchorX="left" anchorY="top">
          System Status
        </Text>

        {/* Status Line 1 */}
        <Text position={[-0.35, 0.05, 0.02]} fontSize={0.035} color="#aaaaaa" anchorX="left" anchorY="top">
          1. Initialize primary logic boards
        </Text>

        {/* Status Line 2 */}
        <Text position={[-0.35, -0.05, 0.02]} fontSize={0.035} color="#ffffff" anchorX="left" anchorY="top">
          2. Awaiting visual confirmation of node beta-7
        </Text>
      </group>

      {/* Interactive Warning Panel */}
      <group 
        position={[0.7, 1.45, -1.1]} 
        rotation={[0, -0.35, 0]}
        onClick={() => setAcknowledged(true)}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <RoundedBox args={[0.5, 0.3, 0.02]} radius={0.02} smoothness={4}>
          {/* Dynamic material: Red usually, bright red on hover, green when clicked! */}
          <meshStandardMaterial 
            color={acknowledged ? "#006600" : (hovered ? "#ff0000" : "#990000")} 
            transparent opacity={0.9} 
          />
        </RoundedBox>

        <Text position={[-0.2, 0.08, 0.02]} fontSize={0.05} color="#ffffff" anchorX="left" anchorY="top" fontWeight="bold">
          {acknowledged ? "Safety Confirmed" : "Live Electrical"}
        </Text>
        
        <Text position={[-0.2, 0.0, 0.02]} fontSize={0.03} color={acknowledged ? "#ccffcc" : "#ffcccc"} anchorX="left" anchorY="top" maxWidth={0.4}>
          {acknowledged ? "You may proceed with node beta-7." : "Keep hands clear. Pinch to acknowledge."}
        </Text>
      </group>
    </>
  );
}
