"use client";
import React, { useState } from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { useUrlStore } from '@/store/urlstore';
import { isBlockedURL, isValidURL } from '@/utils';
import { toast } from '@/hooks/use-toast';
import { CreateTask } from '@/app/playground/api';
import { TaskType ,CreateTaskResult,TaskResponse} from '@/type';
import { useAuth } from '@clerk/nextjs';
import { useTaskResultStore } from '@/store/taskresult';

export function URLInput() {
  const [url, setUrl] = useState('');
  const {getToken} = useAuth();
  const { setUrl: setStoreUrl ,setStatus,isProcessing,setIsProcessing} = useUrlStore((state) => state);
  const {setStatus : setTaskStatus,setTaskId,reset} = useTaskResultStore((state) => state);
  const handleSubmit = async (e: React.FormEvent) => {
    reset()
    e.preventDefault();
    if(isValidURL(url) || isBlockedURL(url)){
      setStatus('Invalid');
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter a valid URL. Currently, we does not support social media URLs.",
        
      })
      return
    }
    setStoreUrl(url);
    setStatus('Valid');
    setIsProcessing(true);
    const token = await getToken({template:"new"});
    if (!token) {
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "Failed to get authentication token.  please sign in again.",
      });
      setIsProcessing(false);
      return;

    }
    const result:CreateTaskResult<TaskResponse>= await CreateTask(url,TaskType.SCARPER,token);
    if(result.api_status === "failed"){
      toast({
        variant: "destructive",
        title: "Failed to create task",
        description: `${result.error.message},`,
      });
      setIsProcessing(false);
      return;
    }
    else {
      toast({
        title: "Task created successfully",
        description: "Task created successfully.",
      });
      setTaskStatus("PENDING")
      console.log(result.data)
      setTaskId(result.data.task_id);
      
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2 mb-2">
          <Globe className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Enter URL to Process</h2>
        </div>
        <div className="flex gap-3">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <button
            type="submit"
            disabled={isProcessing}
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <span className="flex items-center">
                Processing...
                <div className="ml-2 w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
              </span>
            ) : (
              <span className="flex items-center">
                Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}