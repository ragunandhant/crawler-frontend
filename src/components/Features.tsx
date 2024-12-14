"use client";
import React from 'react';
import { Globe, Database, Brain, Zap, Search, Lock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Web Crawling',
    description: 'Efficiently crawl and extract content from any webpage while respecting robots.txt and rate limits.'
  },
  {
    icon: Database,
    title: 'Structured Data',
    description: 'Convert unstructured web content into clean, organized, and queryable data formats.'
  },
  {
    icon: Brain,
    title: 'RAG Operations',
    description: 'Perform advanced Retrieval Augmented Generation for enhanced content understanding.'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Process and analyze web content in real-time with high performance.'
  },
  {
    icon: Search,
    title: 'Smart Extraction',
    description: 'Intelligently extract specific information based on your custom criteria.'
  },
  {
    icon: Lock,
    title: 'Secure & Compliant',
    description: 'Built with security in mind, ensuring safe and compliant web crawling.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powerful Features for Web Content Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all"
            >
              <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}