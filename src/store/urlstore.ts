import {create} from'zustand'
export type url ={
    status : "Uninitialized"|"Invalid"|"Valid"
    url:string

}

interface UrlState {
    status: "Uninitialized" | "Invalid" | "Valid";
    url: string;
    isProcessing: boolean;

}

interface UrlActions {
    setUrl: (url: string) => void;
    setStatus: (status: "Uninitialized" | "Invalid" | "Valid") => void;
    setIsProcessing: (isProcessing: boolean) => void;
}

export const useUrlStore = create<UrlState & UrlActions>((set) => ({
    status: "Uninitialized",
    url: "",
    isProcessing: false,
    setUrl: (url) => set({ url }),
    setStatus: (status) => set({ status }),
    setIsProcessing: (isProcessing) => set({ isProcessing }),
}));