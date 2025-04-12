// components/atoms/ui/ConfirmDialog.tsx
"use client";

import { useConfirmStore } from "@/store/confirmStore";

export default function ConfirmDialog() {
  const { show, message, onConfirm, onCancel, close } = useConfirmStore();

  if (!show) return null;

  const handleConfirm = () => {
    onConfirm();
    close();
  };

  const handleCancel = () => {
    onCancel();
    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full text-center">
        <p className="text-lg font-medium mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
