import { useState, useEffect, ReactNode } from 'react';
import { ArrowRight, Lock, Hexagon } from 'lucide-react';
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
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#030303] font-sans overflow-hidden">

            {/* LEFT SIDE: Novel Visuals */}
            <div className="hidden lg:flex lg:w-[50%] relative overflow-hidden bg-[#050505] items-center justify-center">

                {/* Abstract Gradient Mesh Background */}
                <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,_rgba(0,102,204,0.15),_transparent_60%)] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_rgba(0,102,204,0.1),_transparent_60%)]" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 z-10 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <div className="relative z-20 p-16 flex flex-col h-full justify-between w-full max-w-2xl">
                    {/* Top Mark */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                        <Hexagon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                    </div>

                    {/* Central Typography */}
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold tracking-tight text-white leading-[1.1]">
                            Architecting the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Future of Industry.
                            </span>
                        </h2>
                        <p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed">
                            Experience the convergence of physical operations and digital intelligence.
                        </p>
                    </div>

                    {/* Bottom Meta */}
                    <div className="flex gap-4 text-xs font-mono text-neutral-600 uppercase tracking-widest">
                        <span>System: Online</span>
                        <span>•</span>
                        <span>Ver: 2.5.0</span>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Authentication */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-24 relative bg-[#030303]">
                {/* Subtle Glow behind form */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="w-full max-w-[380px] space-y-12 relative z-10">

                    {/* Header */}
                    <div className="text-center space-y-2">
                        <div className="flex justify-center mb-8">
                            <img
                                src={norscopeLogo}
                                alt="Norscope"
                                className="h-8 opacity-90 invert"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest ml-1">
                                Enter Credentials
                            </label>

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className={`w-4 h-4 ${error ? 'text-red-400' : 'text-neutral-500 group-focus-within:text-blue-400'} transition-colors duration-300`} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full bg-white/5 border ${error ? 'border-red-500/30' : 'border-white/10 group-hover:border-white/20 focus:border-blue-500/50'} rounded-xl pl-11 pr-4 py-4 text-white placeholder-neutral-700 outline-none transition-all duration-300 backdrop-blur-sm focus:bg-white/[0.07]`}
                                    placeholder="Password"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transform hover:-translate-y-[1px]"
                        >
                            <span>Access Platform</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    {/* Error Message */}
                    <div className="h-[20px] flex justify-center">
                        {error && (
                            <p className="flex items-center gap-2 text-red-400 text-xs animate-in fade-in slide-in-from-bottom-1 font-medium bg-red-500/10 px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                Incorrect password
                            </p>
                        )}
                        {!error && (
                            <p className="text-neutral-600 text-xs text-center animate-in fade-in delay-500">
                                Protected Environment
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
