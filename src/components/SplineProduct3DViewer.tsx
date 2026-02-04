import Spline from '@splinetool/react-spline';

interface SplineProduct3DViewerProps {
    sceneUrl?: string;
    title?: string;
    subtitle?: string;
}

export function SplineProduct3DViewer({
    sceneUrl = "",
    title = "Norscope AR Glasses",
    subtitle = "Interactive 3D Model - Drag to rotate"
}: SplineProduct3DViewerProps) {
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
                    {sceneUrl ? (
                        <Spline scene={sceneUrl} />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center px-6">
                                <div
                                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: 'var(--industrial-blue-light)' }}
                                >
                                    <svg
                                        className="w-10 h-10"
                                        fill="none"
                                        stroke="var(--industrial-blue)"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-[20px] mb-3"
                                    style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                                >
                                    Add Your Spline Scene
                                </h3>
                                <p className="text-[14px] text-[#6B6B6B] mb-4 max-w-md mx-auto">
                                    Replace the placeholder by adding your Spline scene URL
                                </p>
                                <div className="bg-gray-100 rounded-lg p-4 text-left max-w-lg mx-auto">
                                    <p className="text-[13px] text-[#4A4A4A] mb-2 font-semibold">How to get your Spline URL:</p>
                                    <ol className="text-[12px] text-[#6B6B6B] space-y-1 ml-4 list-decimal">
                                        <li>Open your project in Spline</li>
                                        <li>Click "Export" → "Code Export"</li>
                                        <li>Select "React" or copy the scene URL</li>
                                        <li>Use the URL in the component prop</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {sceneUrl && (
                    <p className="text-center text-[13px] text-[#6B6B6B] mt-4 md:mt-6">
                        Powered by Spline • Drag to rotate, scroll to zoom
                    </p>
                )}
            </div>
        </section>
    );
}
