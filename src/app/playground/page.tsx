"use client";
import { URLInput } from "@/components/UrlInputs";
import { useState } from "react";

export default function Playground() {
    const [url, setUrl] = useState('');
    const handleGetCode = () => {
        console.log('Getting code for:', url);
      };
    
      const handleRun = () => {
        console.log('Running crawler for:', url);
      };
    return (
     
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Playground</h1>
            <p className="text-gray-500 mb-6">API, Docs and Playground - all in one place</p>
            
          
            
            <div className="mt-6">
              <URLInput
                url={url}
                onUrlChange={setUrl}
                onGetCode={handleGetCode}
                onRun={handleRun}
              />
              
          
              
            </div>
          </div>
        </div>
      </main>
    )
 
}
