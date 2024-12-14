"use client";
import React from 'react'
import { useUrlStore } from '@/store/urlstore'
import { LoadingState } from './LoadingState'
export default function Result() {

    const { isProcessing } = useUrlStore()
    if(isProcessing){
        return <LoadingState/>
    }
  return (

    <div>Result</div>
  )
}
