import { create } from "zustand";

type AlertType = "success" | "error" | null;

interface AlertState {
  message: string;
  type: AlertType;
  show: boolean;
  successMessage: (msg: string) => void;
  errorMessage: (msg: string) => void;
  clear: () => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  message: "",
  type: null,
  show: false,

  successMessage: (msg: string) =>
    set({ message: msg, type: "success", show: true }),
  errorMessage: (msg: string) =>
    set({ message: msg, type: "error", show: true }),
  clear: () => set({ message: "", type: null, show: false }),
}));
