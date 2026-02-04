import { useState, useEffect, ReactNode } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import factoryBg from '../assets/factory-industrial-scene.png';
import norscopeLogo from '../assets/Norscope Logo.svg';

interface PasswordProtectionProps {
    children: ReactNode;
}

export function PasswordProtection({ children }: PasswordProtectionProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check session storage on mount
        const auth = sessionStorage.getItem('norscope_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Strict password check as requested
        if (password === 'NorscopeTeamSS2025') {
            sessionStorage.setItem('norscope_auth', 'true');
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    if (loading) {
        return null;
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{
                    backgroundImage: `url(${factoryBg})`,
                    filter: 'blur(8px)'
                }}
            />
            <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm" />

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-500">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">

                    {/* Logo Area */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 mb-6 shadow-glow">
                            <Lock className="w-5 h-5 text-[var(--industrial-blue)]" />
                        </div>

                        <img
                            src={norscopeLogo}
                            alt="Norscope"
                            className="h-8 mb-2 opacity-90 invert"
                        />
                        <p className="text-sm text-neutral-400 font-medium tracking-wide">
                            CONFIDENTIAL PREVIEW
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-neutral-300 ml-1 uppercase tracking-wider">
                                Access Key
                            </label>
                            <div className="relative group">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full bg-black/50 border ${error ? 'border-red-500/50 text-red-100' : 'border-white/10 text-white focus:border-[var(--industrial-blue)]/50 focus:bg-black/70'} rounded-lg px-4 py-3.5 outline-none transition-all duration-300 placeholder-neutral-600`}
                                    placeholder="••••••••••••••"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[var(--industrial-blue)] hover:bg-blue-600 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20"
                        >
                            <span>Authenticate</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    {/* Feedback Message */}
                    <div className="min-h-[24px] mt-4 text-center">
                        {error ? (
                            <p className="text-red-400 text-xs animate-in slide-in-from-top-1 font-medium">
                                Access denied. Invalid credentials.
                            </p>
                        ) : (
                            <p className="text-neutral-500 text-xs text-center leading-relaxed">
                                Authorized personnel only.<br />
                                Norscope Industrial Services &copy; 2025
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
