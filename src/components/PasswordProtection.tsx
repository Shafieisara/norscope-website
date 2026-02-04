import { useState, useEffect, ReactNode } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
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
        <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden font-sans bg-[#050505]">
            {/* Subtle Radial Gradient for depth, but SOLID dark background otherwise */}
            <div className="absolute inset-0 z-0 bg-radial-gradient from-zinc-900/20 to-transparent opacity-50 pointer-events-none" />

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-500">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-12 shadow-2xl ring-1 ring-white/5">

                    {/* Logo Area */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 mb-8 shadow-inner">
                            <Lock className="w-6 h-6 text-[var(--industrial-blue)]" />
                        </div>

                        <img
                            src={norscopeLogo}
                            alt="Norscope"
                            className="h-9 mb-3 opacity-90 invert"
                        />
                        <p className="text-xs text-neutral-500 font-medium tracking-[0.2em] uppercase">
                            Confidential Preview
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-neutral-400 ml-1 uppercase tracking-widest">
                                Access Key
                            </label>
                            <div className="relative group">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full bg-[#111] border ${error ? 'border-red-900/50 text-red-100' : 'border-[#222] text-white focus:border-[var(--industrial-blue)]/50 focus:bg-[#161616]'} rounded-xl px-5 py-4 outline-none transition-all duration-300 text-lg tracking-widest`}
                                    placeholder=""
                                    autoFocus
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[var(--industrial-blue)] hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20"
                        >
                            <span className="tracking-wide">Authenticate</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    {/* Error Message Only (Footer Removed) */}
                    <div className="min-h-[24px] mt-6 text-center">
                        {error && (
                            <p className="text-red-400 text-xs animate-in slide-in-from-top-1 font-medium tracking-wide">
                                Access denied. Invalid credentials.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
