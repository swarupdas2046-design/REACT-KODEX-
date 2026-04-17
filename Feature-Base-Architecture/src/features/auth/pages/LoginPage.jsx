import React, { useState } from 'react';
import { Compass, Mail, Lock, Eye, EyeOff, LogIn, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router';
import InputField from '../../../shared/components/InputField';
import Button from '../../../shared/components/Button';
import { UseAuthContext } from '../../../shared/hooks/UseAuthContext';
import UseAuth from '../hook/UseAuth';
const LoginPage = () => {
  let {navigate,HandleLoginFormSubmit,HandleRegisterFormSubmit,register,handleSubmit,errors,registerAdmins, setRegisterAdmins,setLoggedAdmins} = UseAuth()

  return (
    // Main wrapper with subtle radial gradient and dotted background pattern
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 font-sans text-slate-800 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-white">
      {/* Background pattern simulation */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      ></div>

      {/* Header Section */}
      <div className="z-10 flex flex-col items-center mb-8">
        <div className="bg-[#0f4ed0] p-3 rounded-xl shadow-md mb-4 flex items-center justify-center">
          <Compass className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="text-[28px] font-bold text-[#0f4ed0] tracking-tight">Architect ERP</h1>
        <p className="text-[11px] font-bold tracking-[0.2em] text-slate-500 mt-1">ADMIN CONSOLE</p>
      </div>

      {/* Main Login Card */}
      <div className="z-10 w-full max-w-100 bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8">
        <h2 className="text-xl font-bold text-slate-900">Secure Sign In</h2>
        <p className="text-sm text-slate-500 mt-2 mb-8 leading-relaxed">
          Enter your credentials to access the administrative workstation.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(HandleLoginFormSubmit)}>

          {/* Email Input */}
            <InputField register={register} rules={{required:'Email is required'}} error={errors.email} Name='email'  type="email" placeholder="admin@architect.com" label="Email Address"/>

          {/* Password Input */}
        {/* <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Password</label>
              <a href="#" className="text-xs font-semibold text-[#0f4ed0] hover:text-blue-800 transition-colors">Forgot Password?</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full pl-10 pr-10 py-3 bg-slate-50/50 border border-transparent rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#0f4ed0] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 outline-none tracking-widest"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
        </div> */}
        <InputField register={register} rules={{required:'Password must required',
        minLength:{
            value:6,
            message:'Password must be at least 6 characters long'
        }
        }} error={errors.password}  Name='password'  type="password" placeholder="...." label="Password"/>

          {/* Submit Button */}
          <Button text="Sign In" />
        </form>

        <p className="text-center mt-4">Don&apos;t have an account? <span onClick={() => navigate('/register')} className="text-[#0f4ed0] hover:text-blue-800 transition-colors cursor-pointer">Sign Up</span></p>

        {/* Security Footer */}
        <div className="mt-8 pt-6 border-t border-slate-100/80 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8b2c2c]"></div>
            <span className="text-xs text-slate-600">Protected by AES-256 Encryption</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed max-w-70">
            Access restricted to authorized personnel only. All activities are monitored and logged within the secure environment.
          </p>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="z-10 flex gap-6 mt-10 text-xs font-medium text-slate-500">
        <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-800 transition-colors">Security Standards</a>
        <a href="#" className="hover:text-slate-800 transition-colors">Help Center</a>
      </div>

      {/* Bottom Left System Status Overlay (Hidden on very small screens) */}
      <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 bg-[#f8fafc]/80 backdrop-blur-md rounded-xl p-3 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
        <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-[#0f4ed0]" />
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase">System Status</span>
          <span className="text-xs font-semibold text-[#0f4ed0]">Global Nodes Operational</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;