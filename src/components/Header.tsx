import React from 'react';
import { Flame } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-semibold">WebCrawler</span>
          </div>
          <nav className="flex space-x-8">
            <a href="/playground" className="text-gray-700 hover:text-gray-900">Playground</a>
            <a href="/docs" className="text-gray-700 hover:text-gray-900">Docs</a>
            <a href="/features" className="text-gray-700 hover:text-gray-900">Features</a>
          </nav>
        </div>
      </div>
    </header>
  );
}