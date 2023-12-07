import { create } from "zustand";

type CancelModalStore = {
  code?: string;
  identifier?: string;
  isOpen: boolean;
  onOpen: (code?: string, identifier?: string) => void;
  onClose: () => void;
};

const useCancelModal = create<CancelModalStore>((set) => ({
  code: undefined,
  identifier: undefined,
  isOpen: false,
  onOpen: (code?: string, identifier?: string) =>
    set({ isOpen: true, code, identifier }),
  onClose: () => set({ isOpen: false, code: undefined, identifier: undefined }),
}));

export default useCancelModal;
