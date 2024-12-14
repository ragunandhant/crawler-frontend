import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Web Content into
            <span className="text-indigo-600"> Structured Knowledge</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Crawl, analyze, and extract meaningful insights from any webpage. Convert unstructured web content into structured data and perform advanced RAG operations.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/playground"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Playground
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}