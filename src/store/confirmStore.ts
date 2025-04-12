import { create } from "zustand";

interface ConfirmState {
  show: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  open: (message: string, onConfirm: () => void, onCancel?: () => void) => void;
  close: () => void;
}

export const useConfirmStore = create<ConfirmState>((set) => ({
  show: false,
  message: "",
  onConfirm: () => {},
  onCancel: () => {},
  open: (message, onConfirm, onCancel = () => {}) =>
    set({ show: true, message, onConfirm, onCancel }),
  close: () =>
    set({ show: false, message: "", onConfirm: () => {}, onCancel: () => {} }),
}));