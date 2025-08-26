'use client';

import { useState , useCallback } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';


export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
      email:'',
      password:''
    });
    
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault();
        const { email, password } = formData;
        
        // Basic validation
        if (!formData.email || !formData.password) {
            toast.error('Please fill in all fields');
          return;
        }

      try {
        const res = await axios.post('http://localhost:8080/api/auth/login', {email, password});
        const data = res.data as { token: string; user: { email: string; name: string } };
        toast.success('Login successful!');
        router.push('/pages/dashboard');
      } catch (error) {
        console.error(error)
        toast.error("Invalid email or password");
      }

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
                        onChange={handleChange}
                        placeholder="Email"
                        />

                        <input
                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                        />
                        
                        <button 
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit">Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
