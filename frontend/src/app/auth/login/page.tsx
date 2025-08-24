'use client';

import { useState , useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault();
        setError(''); 
        
        // Basic validation
        if (!email || !password) {
          setError('Please enter both username and password.');
          return;
        }
        // Simulate successful login
        if (email === 'user@gmail.com' && password === '1234') {
          router.push('/pages/dashboard');
        } else {
          setError('Invalid username or password.');
        }
      };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg'>
                <div className='text-center text-lg'>
                    <h1>Login to continue</h1>
                </div>
                     <form onSubmit={handleSubmit} className='space-y-4'>
                        <input
                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        />

                        <input
                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        />

                        
                        <button 
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit">Login
                        </button>

                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </form>
                </div>
            </div>
        );
    }