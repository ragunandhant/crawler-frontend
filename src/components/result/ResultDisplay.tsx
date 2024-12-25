'use client'

import { useState } from 'react'
import { AlertTriangle, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTaskResultStore } from '@/store/taskresult'
import { useShallow } from 'zustand/shallow'
import ResultCard from './ResultCard'


export default function ResultDisplay() {
  
  const results = useTaskResultStore(useShallow((state) => state.result))
  const handleDownload = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(results, null, 2)
    )}`
    const link = document.createElement('a')
    link.href = jsonString
    link.download = 'results.json'
    link.click()
  }

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex items-center justify-between mb-2">
        <div className="space-y-1">
          <h1 className="text-lg font-medium">Total pages scraped: {results.length}</h1>
          <p className="text-sm text-muted-foreground">
            If you wish to crawl this site, please use the crawl option.
          </p>
        </div>
        <Button variant="outline" onClick={handleDownload} className='text-gray-400 hover:text-gray-900'>
          <Download className="mr-2 h-4 w-4" />
          Download Results JSON
        </Button>
      </div>
      {
        results.map((result, index) => <ResultCard key={index} {...result} />)
      }
     
    </div>
  )
}
