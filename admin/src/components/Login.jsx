import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
      if(response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login. Please try again.');
    }
  };

  const fillDemoCredentials = () => {
    setEmail(import.meta.env.VITE_ADMIN_EMAIL);
    setPassword(import.meta.env.VITE_ADMIN_PASSWORD);
    toast.success("Demo credentials filled!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <div className="mb-5 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="font-semibold text-gray-800">Demo Account</p>
          <p className="text-sm text-gray-600 mt-1">
            Want to explore the admin dashboard?
          </p>
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="mt-3 w-full py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition">
            Use Demo Credentials
          </button>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input onChange={(e) => setEmail(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" 
              placeholder="your@email.com" 
              required 
              type="email" 
              value={email} 
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input onChange={(e) => setPassword(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" 
              placeholder="Enter your password" 
              required 
              type="password" 
              value={password} 
            />
          </div>
          <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;