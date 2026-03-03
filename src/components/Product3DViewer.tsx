import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

interface ModelProps {
    modelPath?: string;
}

// Placeholder 3D object (futuristic glasses shape)
function PlaceholderGlasses() {
    const groupRef = useRef<THREE.Group>(null);

    return (
        <group ref={groupRef} scale={1.5}>
            {/* Main frame - left side */}
            <mesh position={[-0.6, 0, 0]} rotation={[0, 0, 0.1]}>
                <boxGeometry args={[0.4, 0.3, 0.1]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Main frame - right side */}
            <mesh position={[0.6, 0, 0]} rotation={[0, 0, -0.1]}>
                <boxGeometry args={[0.4, 0.3, 0.1]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Bridge */}
            <mesh position={[0, 0.05, 0]}>
                <boxGeometry args={[0.3, 0.05, 0.05]} />
                <meshStandardMaterial
                    color="#0066CC"
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#0066CC"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Left temple */}
            <mesh position={[-0.8, 0, -0.4]} rotation={[0, -0.3, 0]}>
                <boxGeometry args={[0.05, 0.05, 0.8]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.6}
                    roughness={0.3}
                />
            </mesh>

            {/* Right temple */}
            <mesh position={[0.8, 0, -0.4]} rotation={[0, 0.3, 0]}>
                <boxGeometry args={[0.05, 0.05, 0.8]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.6}
                    roughness={0.3}
                />
            </mesh>

            {/* Tech details - left lens accent */}
            <mesh position={[-0.6, 0, 0.06]}>
                <cylinderGeometry args={[0.05, 0.05, 0.02, 32]} />
                <meshStandardMaterial
                    color="#00AAFF"
                    emissive="#00AAFF"
                    emissiveIntensity={0.5}
                    metalness={1}
                    roughness={0}
                />
            </mesh>

            {/* Tech details - right lens accent */}
            <mesh position={[0.6, 0, 0.06]}>
                <cylinderGeometry args={[0.05, 0.05, 0.02, 32]} />
                <meshStandardMaterial
                    color="#00AAFF"
                    emissive="#00AAFF"
                    emissiveIntensity={0.5}
                    metalness={1}
                    roughness={0}
                />
            </mesh>
        </group>
    );
}

// Actual model loader (for when GLB file is provided)
function ARGlassesModel({ modelPath }: ModelProps) {
    if (!modelPath) {
        return <PlaceholderGlasses />;
    }

    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={1.5} />;
}

// Loading fallback
function Loader() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0066CC" wireframe />
        </mesh>
    );
}

interface Product3DViewerProps {
    modelPath?: string;
    title?: string;
    subtitle?: string;
}

export function Product3DViewer({
    modelPath,
    title = "Norscope AR Glasses",
    subtitle = "Interactive 3D Model - Drag to rotate"
}: Product3DViewerProps) {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4"
                        style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                    >
                        {title}
                    </h2>
                    <p className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                        {subtitle}
                    </p>
                </div>

                <div
                    className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-[var(--border-light)] bg-gradient-to-br from-gray-50 to-white"
                    style={{
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                >
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />

                        {/* Lighting */}
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                        <pointLight position={[0, 5, 0]} intensity={0.5} color="#00AAFF" />

                        {/* Environment for reflections */}
                        <Environment preset="studio" />

                        {/* 3D Model */}
                        <Suspense fallback={<Loader />}>
                            {modelPath ? (
                                <ARGlassesModel modelPath={modelPath} />
                            ) : (
                                <PlaceholderGlasses />
                            )}
                        </Suspense>

                        {/* Controls - auto-rotate + drag */}
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate
                            autoRotateSpeed={2}
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI / 1.5}
                        />
                    </Canvas>
                </div>

                <p className="text-center text-[13px] text-[#6B6B6B] mt-4 md:mt-6">
                    * This is a placeholder 3D model. Replace with your actual AR glasses GLB file at{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-[12px]">
                        src/assets/models/ar-glasses.glb
                    </code>
                </p>
            </div>
        </section>
    );
}
