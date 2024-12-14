"use client";
import {Features} from "@/components/Features";
import { Hero } from "@/components/Hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    
    <main>
      <Hero />
      <Features />
    </main>
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Project Crawler. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}
