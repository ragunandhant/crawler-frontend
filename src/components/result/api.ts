import axios, { AxiosError } from 'axios';
import { TaskResult } from './type';
export const pollTaskUntilCondition = async (
  task_id: string,
  token: string,
  interval: number, // Interval in milliseconds
  condition: (data: TaskResult) => boolean, // A function to evaluate the stopping condition
  onPoll: (data: TaskResult) => void // A callback to execute after each poll
) => {
  return new Promise<void>((resolve, _) => {
    let stopPolling = false;

    const pollingInterval = setInterval(async () => {
      if (stopPolling) return;

      try {
        const response = await axios.get(`/result/${task_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data ,"response")

        if(response.data === undefined){
          return
        }

        const data = {
          data : response.data[response.data.length - 1],
          api_status : "success" }

        // Pass the data to the callback
        onPoll(data as TaskResult);

        // Check the stopping condition
        if (condition(data as TaskResult)) {
          stopPolling = true;
          clearInterval(pollingInterval);
          resolve();
        }
      } catch (error) {
        console.log('Error during polling:', error);

        const errorData: TaskResult = {
          api_status: "failed" as const,
          error : error as AxiosError,
        };

        // Pass the error to the callback
        onPoll(errorData);

        // Optionally stop polling on error based on condition
        if (condition(errorData)) {
          stopPolling = true;
          clearInterval(pollingInterval);
          resolve();
        }
      }
    }, interval);
  });
};
