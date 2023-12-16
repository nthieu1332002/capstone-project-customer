import { create } from "zustand";

type EditModalStore = {
  code?: string;
  isOpen: boolean;
  onOpen: (code: string) => void;
  onClose: () => void;
};

const useEditModal = create<EditModalStore>((set) => ({
  code: undefined,
  isOpen: false,
  onOpen: (code: string) => set({ isOpen: true, code }),
  onClose: () => set({ isOpen: false, code: undefined }),
}));

export default useEditModal;
