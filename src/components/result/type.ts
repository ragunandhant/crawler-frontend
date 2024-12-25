import { ScarperResult } from "@/store/taskresult"
import { CreateTaskSuccessResult,CreateTaskFailedResult, TaskStatus } from "@/type"
interface ScrapeResponse {
   markdown : string 
   metadata : {
         title : string
         text : string
         images : string[]
         navigation:string[]
         links : string[]
         social_media :{
             youtube:[]
             twitter:[]
             instagram:[]
             facebook:[]
         }
   }  
}
export interface TaskResponse {
    status : TaskStatus;
    data : ScarperResult;
}


export type TaskResult = CreateTaskSuccessResult<TaskResponse> | CreateTaskFailedResult;