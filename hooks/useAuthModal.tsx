import { create } from "zustand";

export type ModalType = "login" | "register" | "logout" | "confirmCancel";

type AuthModalStore = {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
};

const useAuthModal = create<AuthModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
}));

export default useAuthModal;
