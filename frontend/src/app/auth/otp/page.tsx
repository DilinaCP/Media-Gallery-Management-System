'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'sonner';

export default function otpPage(){
    const router = useRouter();
    const [otp , setOtp] = useState('');

    const handleOtp = async (e: React.FormEvent) => { 
        e.preventDefault();
        router.push('/pages/dashboard')
    }

    return(
        <form>
            <div className='flex items-center justify-center min-h-screen'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg'>
                <div className='text-center text-lg'>
                    <h1>OTP Verification</h1>
                 </div>

                 <input
                   className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 border-2"
                        type="OTP"
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                        placeholder="Enter Verification Code"
                />

                <button
                    onClick={handleOtp}
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit">Submit
                </button>

            </div>
        </div>
        </form>
    );
};


            
                
              