import React, { useState } from 'react'
import { AlertTriangle, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScarperResult, useTaskResultStore } from '@/store/taskresult'
import { useShallow } from 'zustand/shallow'


function ResultCard(result:ScarperResult) {
    const [activeTab, setActiveTab] = useState('markdown')
  return (
    <Card className="mt-6 h-[635px] w-[555px] text-lg ">
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">{result.metadata.title}</h2>
          <p className="text-sm text-muted-foreground">{"sample.com"}</p>
        </div>
        <Button variant="outline" size="sm">
          <AlertTriangle className="mr-2 h-4 w-4" />
          Report Issue
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4 text-lg">
          <TabsTrigger value="markdown">Markdown</TabsTrigger>
          <TabsTrigger value="json">JSON response</TabsTrigger>
        </TabsList>
        <TabsContent value="markdown">
          <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-[500px] text-sm overflow-y-scroll">
            {result.markdown}
          </pre>
        </TabsContent>
        <TabsContent value="json">
          <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-[500px] text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  </Card>
  )
}

export default ResultCard