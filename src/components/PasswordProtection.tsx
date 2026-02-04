import { useState, useEffect, ReactNode } from 'react';
import { ArrowRight, Lock, ShieldCheck } from 'lucide-react';
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

        // Strict password check
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
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#050505] font-sans">

            {/* LEFT SIDE: Visual & Branding */}
            <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-black">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"
                    style={{ backgroundImage: `url(${factoryBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

                <div className="relative z-10 w-full h-full flex flex-col justify-between p-12">
                    {/* Top Logo Mark */}
                    <div>
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
                            Industrial Intelligence <br />
                            <span className="text-[var(--industrial-blue)]">Secured.</span>
                        </h2>
                        <p className="text-neutral-400 max-w-sm leading-relaxed">
                            Advanced AR solutions for the modern workforce.
                            Authorized access only.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Authentication Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-24 relative">
                <div className="w-full max-w-sm space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">

                    {/* Header */}
                    <div className="text-center lg:text-left space-y-3">
                        <img
                            src={norscopeLogo}
                            alt="Norscope"
                            className="h-10 mb-6 opacity-100 invert mx-auto lg:mx-0"
                        />
                        <h1 className="text-2xl font-semibold text-white tracking-tight">
                            Welcome back
                        </h1>
                        <p className="text-neutral-500 text-sm">
                            Please enter your credentials to access the platform.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className={`w-5 h-5 ${error ? 'text-red-400' : 'text-neutral-500 group-focus-within:text-[var(--industrial-blue)]'} transition-colors duration-300`} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full bg-[#0A0A0A] border ${error ? 'border-red-900/50 text-red-100 placeholder-red-900/50' : 'border-neutral-800 hover:border-neutral-700 focus:border-[var(--industrial-blue)] text-white'} rounded-xl pl-12 pr-4 py-4 outline-none transition-all duration-300 text-lg`}
                                    placeholder="Access Key"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[var(--industrial-blue)] hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5"
                        >
                            <span>Enter Portal</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    {/* Error / Status */}
                    <div className="min-h-[24px]">
                        {error && (
                            <p className="flex items-center justify-center lg:justify-start gap-2 text-red-400 text-sm animate-in slide-in-from-left-1 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                Invalid access credentials
                            </p>
                        )}
                    </div>

                </div>

                {/* Mobile-only background hint */}
                <div className="lg:hidden absolute inset-0 -z-10 bg-radial-gradient from-zinc-900/20 to-transparent pointer-events-none" />
            </div>
        </div>
    );
}
