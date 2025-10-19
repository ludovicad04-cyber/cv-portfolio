import { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Change this to your desired password
  const CORRECT_PASSWORD = 'portfolio123';
  const EXPIRATION_MINUTES = 30;

  useEffect(() => {
    // Check if user is already authenticated and if the session hasn't expired
    const storedAuth = sessionStorage.getItem('portfolio_authenticated');
    const storedTimestamp = sessionStorage.getItem('portfolio_auth_timestamp');
    
    if (storedAuth === 'true' && storedTimestamp) {
      const loginTime = parseInt(storedTimestamp);
      const currentTime = Date.now();
      const timeElapsed = (currentTime - loginTime) / (1000 * 60); // Convert to minutes
      
      if (timeElapsed < EXPIRATION_MINUTES) {
        setIsAuthenticated(true);
      } else {
        // Session expired, clear storage
        sessionStorage.removeItem('portfolio_authenticated');
        sessionStorage.removeItem('portfolio_auth_timestamp');
      }
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('portfolio_authenticated', 'true');
      sessionStorage.setItem('portfolio_auth_timestamp', Date.now().toString());
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-emerald-500/20 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-50%,rgba(34,197,94,0.15),rgba(10,10,11,0))]" />
          <div className="absolute right-[-10%] top-[20%] h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
        </div>
        
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-8 backdrop-blur">
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20">
                  <Lock className="h-6 w-6 text-emerald-400" />
                </div>
                <h1 className="text-2xl font-semibold text-white/90 mb-2">
                  Protected Portfolio
                </h1>
                <p className="text-sm text-white/60">
                  This portfolio is password-protected. Please enter the password to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white placeholder:text-white/40 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-400 px-4 py-3 font-medium text-black transition hover:bg-emerald-300 hover:translate-y-[-1px]"
                >
                  Access Portfolio
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-white/50">
                  Contact <a href="mailto:ludovicadonatelli@outlook.it" className="text-emerald-400 hover:text-emerald-300">ludovicadonatelli@outlook.it</a> for access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}