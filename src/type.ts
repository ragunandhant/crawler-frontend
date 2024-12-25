import { AxiosError } from "axios";

export enum TaskType {
    SCARPER = "SCARPER",
    CRAWLER = "CRAWLER",
    MAP="MAP"
}
export type TaskStatus =
| "NO UPDATE"
| "UNINITIALIZED"
| "PENDING"
| "SUCCESS"
| "FAILED"
| "ONPROGRESS"
| "CANCELLED"
| "STARTED"
| "SOURCE_CODE_EXTRACTING"
| "PARSING";

export type ScraperTask = {
    id: number;
    task_id: string;
    url: string;
    status: "STARTED" | "COMPLETED" | "FAILED"; // You can add more statuses if applicable
    user: number;
    taskType: "SCRAPER"; // Assuming this is a fixed value, else make it a union type
    created_at: string; // ISO 8601 format timestamp
    updated_at: string; // ISO 8601 format timestamp
  };
  
export type TaskResponse = {
    task_id: string;
    url: string;
    status: string;
    // other properties as per the API response
};

// Define the success result interface
export interface CreateTaskSuccessResult<T> {
    api_status: "success";
    data: T;
}

// Define the failure result interface
export interface CreateTaskFailedResult {
    api_status: "failed";
    error: AxiosError;
}

// Define the union type for the CreateTask result
export type CreateTaskResult<T> = CreateTaskSuccessResult<T> | CreateTaskFailedResult;
