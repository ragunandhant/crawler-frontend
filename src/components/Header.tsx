"use client";
import React from 'react';
import { Bug } from 'lucide-react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

export function Header() {
  const {isSignedIn,isLoaded  } =  useUser()
  while (!isLoaded) {
    return <div>Loading...</div>;
  }
  // console.log(user)

  return (

    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
            <Bug className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Project Crawler</span>
            </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How it Works</a>
            <a href="/playground" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Try Playground
            </a>
            <div>
            {
              isSignedIn ? <UserButton/> : <span className="bg-indigo-500 px-2 py-2 font-semibold text-white rounded-lg"><SignInButton/></span>
            }
           </div>
          </div>
        </div>
      </nav>
    </header>
  );
}