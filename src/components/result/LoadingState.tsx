"use client";
import React from "react";
import {
  Loader2,
  CheckCircle2,
  XCircle,
  Clock,
  PauseCircle,
  PlayCircle,
  FileDown,
  FileSearch,
} from "lucide-react";
import { useTaskResultStore } from "@/store/taskresult";
import { useShallow } from "zustand/shallow";

export function LoadingState() {
  const { status } = useTaskResultStore(useShallow((state) => state));

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "NO UPDATE":
        return <Clock className="w-12 h-12 text-gray-400" />;
      case "UNINITIALIZED":
        return <Clock className="w-12 h-12 text-gray-400" />;
      case "PENDING":
        return <Clock className="w-12 h-12 text-yellow-500" />;
      case "SUCCESS":
        return <CheckCircle2 className="w-12 h-12 text-green-500" />;
      case "FAILED":
        return <XCircle className="w-12 h-12 text-red-500" />;
      case "ONPROGRESS":
        return <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />;
      case "CANCELLED":
        return <PauseCircle className="w-12 h-12 text-gray-500" />;
      case "STARTED":
        return <PlayCircle className="w-12 h-12 text-blue-500" />;
      case "SOURCE_CODE_EXTRACTING":
        return <FileDown className="w-12 h-12 text-purple-500" />;
      case "PARSING":
        return <FileSearch className="w-12 h-12 text-indigo-500" />;
      default:
        return <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />;
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "NO UPDATE":
        return "No updates available.";
      case "UNINITIALIZED":
        return "Task is uninitialized.";
      case "PENDING":
        return "Task is pending.";
      case "SUCCESS":
        return "Task completed successfully.";
      case "FAILED":
        return "Task failed.";
      case "ONPROGRESS":
        return "Task is in progress.";
      case "CANCELLED":
        return "Task has been cancelled.";
      case "STARTED":
        return "Task has started.";
      case "SOURCE_CODE_EXTRACTING":
        return "Extracting source code...";
      case "PARSING":
        return "Parsing data...";
      default:
        return "Loading...";
    }
  };
 
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-100 to-gray-200 shadow-md rounded-lg">
      <div className="transition-transform hover:scale-105">{getStatusIcon(status)}</div>
      <p className="mt-4 text-lg font-semibold text-gray-800 transition-colors hover:text-gray-600">
        {getStatusMessage(status)}
      </p>
    </div>
  );
}


