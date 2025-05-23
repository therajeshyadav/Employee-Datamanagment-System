import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up - Email:", email);
    navigate('/'); // Redirect to login after sign-up
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
      <div className="border-2 rounded-xl border-emerald-600 p-10 w-96">
        <h2 className="text-2xl text-center mb-4">Sign Up</h2>
        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-lg outline-none bg-transparent placeholder-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-3 border-2 border-emerald-600 rounded-full py-3 px-5 text-lg outline-none bg-transparent placeholder-gray-400"
            type="password"
            placeholder="Enter Your Password"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-3 border-2 border-emerald-600 rounded-full py-3 px-5 text-lg outline-none bg-transparent placeholder-gray-400"
            type="password"
            placeholder="Confirm Your Password"
          />
          <button
            type="submit"
            className="mt-5 bg-emerald-600 rounded-full py-3 px-5 text-lg text-white"
          >
            Sign Up
          </button>
          <p className="mt-3 text-gray-300 text-center">Already have an account?</p>
          <button
            onClick={() => navigate('/')}
            className="mt-2 bg-transparent border-2 border-emerald-600 text-emerald-600 rounded-full py-3 px-5 text-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
