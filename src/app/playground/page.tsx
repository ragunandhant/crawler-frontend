"use client";
import Result from '@/components/result/Result';
import { URLInput } from '@/components/UrlInput';
import React from 'react';
import { useTaskResultStore } from '@/store/taskresult';
export default function Playground() {
  
    const status = useTaskResultStore((state) => state.status);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
            </h1>
            <URLInput/>
            {status !== "UNINITIALIZED" && <Result/>}
          </div>
        </div>
      </main>
    </div>
  );
}