'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios from 'axios';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const { name, email, password, confirmPassword } = formData;

      if (!name || !email || !password || !confirmPassword) {
        toast.error('Please fill in all fields');
        return;
      }

      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (password.length < 10) {
      toast.error('Password must be at least 10 characters');
      return;
    }
      // Registration logic here
      try {
        const {name, email, password} = formData;
        await axios.post('http://localhost:8080/api/auth/register', {name, email, password});
        toast.success('Registerd Successful!');
        router.push('/pages/dashboard/');
      } catch (error) {
        console.log(error);
        toast.error('Signup failed');
      }
    },
    [formData, router]
  );

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg'>
        <div className='text-center text-lg'>
          <h1>Register to continue</h1>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          <button
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Register
          </button>
          <div>
            <div>
              <h1>Already have an account</h1>
            </div>
            <div>
              <button>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}