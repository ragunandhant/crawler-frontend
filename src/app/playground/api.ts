import axios from 'axios';
import { CreateTaskSuccessResult, TaskType,TaskResponse, CreateTaskFailedResult } from '@/type';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;


export const CreateTask = async(url:string,tasktype:TaskType,token:string) => {
    try {
    
        const response = await axios.post('/api/scrapetask/', {
            "url": url,
        }, {
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
        });
        const data  = response.data;
        
        console.log(data);
        return {data,api_status:"success"} as CreateTaskSuccessResult<TaskResponse>;
    } catch (error) {
        console.log(error);
        return {
            "api_status":"failed",
            error
        } as CreateTaskFailedResult
    }
}