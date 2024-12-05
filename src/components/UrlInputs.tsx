import React from 'react';

interface URLInputProps {
  url: string;
  onUrlChange: (url: string) => void;
  onGetCode: () => void;
  onRun: () => void;
}

export function URLInput({ url, onUrlChange, onGetCode, onRun }: URLInputProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
          URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <div className="flex space-x-3 pt-6">
        <button
          onClick={onGetCode}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 flex items-center"
        >
          <code className="mr-2">{`</>`}</code>
          Get Code
        </button>
        <button
          onClick={onRun}
          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Run
        </button>
      </div>
    </div>
  );
}