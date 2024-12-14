
"use client";
import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
        <p className="text-gray-600">Processing URL...</p>
      </div>
    </div>
  );
}