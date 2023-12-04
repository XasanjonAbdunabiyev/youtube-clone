import {
    Modal as ChakraUiModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Button } from "../Button";


interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
    modalTitle: string;
}

export function Modal({
    children,
    isOpen,
    onClose,
    modalTitle
}: ModalProps) {
    console.log(isOpen);
    return (
        <ChakraUiModal
            motionPreset="slideInRight"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>close</Button>
                </ModalFooter>
            </ModalContent>
        </ChakraUiModal>
    )
}