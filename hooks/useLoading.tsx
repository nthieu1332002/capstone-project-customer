import { create } from "zustand";

type LoadingStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useLoading = create<LoadingStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoading;
