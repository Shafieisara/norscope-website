import { useState, useEffect, ReactNode } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

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
        // Hardcoded password - simple client-side protection
        if (password.toLowerCase() === 'norscope' || password === 'start') {
            sessionStorage.setItem('norscope_auth', 'true');
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            // Shake animation or visual feedback could be added here
            setTimeout(() => setError(false), 2000);
        }
    };

    if (loading) {
        return null; // Or a simple spinner
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center px-4 font-sans text-white">
            <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-500">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--industrial-blue)]/10 text-[var(--industrial-blue)] mb-4 ring-1 ring-[var(--industrial-blue)]/30">
                        <Lock className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Access Restricted
                    </h1>
                    <p className="text-neutral-400">
                        This site is currently in private preview. <br />
                        Please enter the access code to continue.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div className="relative group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full bg-[#1A1A1A] border ${error ? 'border-red-500 ring-1 ring-red-500' : 'border-[#333] focus:border-[var(--industrial-blue)] focus:ring-1 focus:ring-[var(--industrial-blue)]'} rounded-lg px-4 py-3.5 text-white placeholder-neutral-500 outline-none transition-all duration-200`}
                            placeholder="Enter access code..."
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[var(--industrial-blue)] hover:opacity-90 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                        style={{ backgroundColor: '#0066CC' }}
                    >
                        <span>Enter Site</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {error && (
                        <p className="text-red-500 text-sm text-center animate-in slide-in-from-top-1">
                            Incorrect access code. Please try again.
                        </p>
                    )}
                </form>

                <div className="text-center pt-8">
                    <p className="text-xs text-neutral-600 uppercase tracking-widest font-medium">
                        Norscope Industrial Services
                    </p>
                </div>
            </div>
        </div>
    );
}
