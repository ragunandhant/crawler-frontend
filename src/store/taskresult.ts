import { TaskStatus } from '@/type';
import {create} from'zustand'

interface Metadata{
  images: string[];
  navigation: string[];
  title: string;
  social_media :{
    facebook: string[];
    twitter: string[];
    instagram: string[];
    linkedin: string[];
    youtube: string[];
  }

}
export interface ScarperResult {
    markdown: string;
    metadata: Metadata;
    status :TaskStatus;
}
interface TaskResultState {
  id: number | null;
  task_id: string;
  url: string;
  status: TaskStatus;
  user: number | null;
  taskType: string;
  created_at: string;
  updated_at: string;
  isLoading: boolean;
  error: string | null;
  result: ScarperResult[];
}

interface TaskResultActions {
  setTaskResult: (result: Partial<TaskResultState>) => void;
  setStatus: (status: TaskStatus) => void;
  setIsLoading: (isLoading: boolean) => void;
  setTaskId: (task_id: string) => void;
  setError: (error: string | null) => void;
  reset: () => void;
  startTask: (task_id: string, url: string, user: number, taskType: string) => void;
  completeTask: (result: TaskResultState) => void;
  addResult: (result: ScarperResult) => void;
}

export const useTaskResultStore = create<TaskResultState & TaskResultActions>((set) => ({
  id: null,
  task_id: '',
  url: '',
  status: 'UNINITIALIZED', // Initial status
  user: null,
  taskType: '',
  created_at: '',
  updated_at: '',
  isLoading: false,
  error: null,
  result: [],

  setTaskResult: (result) => set((state) => ({ ...state, ...result })),
  setStatus: (status) => set({ status }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setTaskId: (task_id) => set({ task_id }),
  setError: (error) => set({ error, status: 'FAILED' }), // Optional: set status to 'FAILED' when error occurs
  addResult: (result) => set((state) => ({
    ...state,
    result: [...state.result, result],
  })),
  reset: () => set((state) => ({
  
    ...state,
    id: null,
    task_id: '',
    url: '',
    status: 'PENDING',
    user: null,
    taskType: '',
    created_at: '',
    updated_at: '',
    isLoading: false,
    error: null,
  })),
  startTask: (task_id, url, user, taskType) => set((state) => ({
    ...state,
    task_id,
    url,
    user,
    taskType,
    status: 'STARTED',
    isLoading: true,
    error: null,
  })),
  completeTask: (result) => set((state) => ({
    ...state,
    ...result,
    isLoading: false,
  })),
}));