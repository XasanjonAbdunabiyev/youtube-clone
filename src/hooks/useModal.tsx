import { create } from "zustand";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export const useModal = create<ModalProps>(((set) => ({
    isOpen: false,
    onClose: () => set(() => ({ isOpen: false })),
    onOpen: () => set(() => ({ isOpen: true }))
})))