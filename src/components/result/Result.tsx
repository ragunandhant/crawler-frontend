"use client";
import React, { useEffect } from 'react';
import { useUrlStore } from '@/store/urlstore';
import { LoadingState } from './LoadingState';
import { pollTaskUntilCondition } from './api';
import { ScarperResult, useTaskResultStore } from '@/store/taskresult';
import { useAuth } from '@clerk/nextjs';
import { toast } from '@/hooks/use-toast';
import { TaskResult } from './type';
import { useShallow } from 'zustand/shallow';
import ResultDisplay from './ResultDisplay';
import { TaskResponse } from '@/type';

export default function Result() {
  const { isProcessing, setIsProcessing } = useUrlStore(); 
  const { task_id,setStatus,addResult } = useTaskResultStore(useShallow((state) => ({ task_id: state.task_id,setStatus:state.setStatus,addResult:state.addResult })));
  const status = useTaskResultStore(useShallow((state) => state.status));
  const { getToken } = useAuth();
  console.log(task_id)
  useEffect(() => {
    // Define an async function within the useEffect scope
    const pollTask = async () => {
      if (isProcessing) {
        const token = await getToken();
        if(!token) {
          toast({
            title: 'Error',
            description: 'User not authenticated',
          })
          return 
        }
        const interval = 10000; // Poll every 5 seconds

        // Define the condition to stop polling
        const condition = (data: TaskResult) => {
          
          
          if(data.api_status === "failed"){
            toast({
              variant: "destructive",
              title: 'Error',
              description: data.error.message,
            })
            setStatus("UNINITIALIZED")
            
          }
          
          
          
          return data.api_status === "failed" || (data.api_status === "success" && (data.data.status === "SUCCESS" || data.data.status === "FAILED")); }

        // Define the callback for each poll
        const onPoll = (data: TaskResult) => {
          console.log('Polling result:', data);
          if(data.api_status == "failed"){
            toast({
              variant: "destructive",
              title: 'Error',
              description: "Failed to get task status",
            })
            setIsProcessing(false);
            return 
          }
          if(data.data.status === "NO UPDATE"){
            return 
          }
          if(data.data.status === "SUCCESS" ){

            addResult(data.data.data);
            console.log(data)
            setIsProcessing(false);
          }
          
          setStatus(data.data.status);
         
        };

        await pollTaskUntilCondition(task_id, token, interval, condition, onPoll);
      }
    };

    // Call the async function
    pollTask();
  }, [isProcessing, setIsProcessing, task_id, getToken]);

  if (status !=="SUCCESS" && status !=="FAILED") {
    return <LoadingState />;
  }
  const sampleData = {
    totalPages: 1,
    url: 'https://en.wikipedia.org/wiki/Example',
    title: 'Example - Wikipedia...',
    content: {
      markdown: 'Wikipedia today, you\'re choosing a free and fair internet: a space\nwhere you can find facts you need without being distracted by ads or\nthe agendas of wealthy owners.\n\nMost readers don\'t donate, so your gift matters loresupum Wikipedia today, you\'re choosing a free and fair internet: a space\nwhere you can find facts you need without being distracted by ads or\nthe agendas of wealthy owners.\n\nMost readers don\'t donate, so your gift matters loresupum Wikipedia today, you\'re choosing a free and fair internet: a space\nwhere you can find facts you need without being distracted by ads or\nthe agendas of wealthy owners.\n\nMost readers don\'t donate, so your gift matters loresupum Wikipedia today, you\'re choosing a free and fair internet: a space\nwhere you can find facts you need without being distracted by ads or\nthe agendas of wealthy owners.\n\nMost readers don\'t donate, so your gift matters loresupum Wikipedia today, you\'re choosing a free and fair internet: a space\nwhere you can find facts you need without being distracted by ads or\nthe agendas of wealthy owners.\n\nMost readers don\'t donate, so your gift matters loresupum Wikipedia today, you\'re choosing a free and fair internet: a space\nwhere you can find facts you need without being distracted by ads or\nthe agendas of wealthy owners.\n\nMost readers don\'t donate, so your gift matters loresupum Wikipedia today, you\'re choosing a free and fair internet: a space\nwhere you can find facts you need without being distracted by ads or\nthe agendas of wealthy owners.\n\nMost readers don\'t donate, so your gift matters loresupum',
      html: '<p>Wikipedia today, you\'re choosing a free and fair internet: a space where you can find facts you need without being distracted by ads or the agendas of wealthy owners.</p>',
      json: '{\n  "title": "Example - Wikipedia",\n  "content": "Wikipedia today..."\n}'
    }
  }
  


  return <ResultDisplay />
}
