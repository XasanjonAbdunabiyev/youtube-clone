import { Layout } from "@/layouts/Layout";

import { useModal } from "@/hooks/useModal";
import {
    FormControl,
    FormLabel,
    Textarea,
} from '@chakra-ui/react'

import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type Inputs = {
    title: string
    description: string
}

export default function Dashboard() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const { isOpen, onClose, onOpen } = useModal();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <Layout showCategries={false}>
            <Button variant="dark" onClick={onOpen}>Create vidoe Information</Button>
            <Modal isOpen={isOpen} modalTitle="Video Content" onClose={onClose}>
                <FormControl onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel fontWeight="bold">Title</FormLabel>
                    <Textarea maxLength={100} {...register("title")} resize="none" my={3} placeholder="Title is (required)"></Textarea>
                    <FormLabel>Description</FormLabel>
                    <Textarea maxLength={100} {...register("description")} resize="none" placeholder="Tell viewords about your video type (@ to mention channel)"></Textarea>
                    <Button className="bg-blue-400 text-white" type="submit">Submit</Button>
                </FormControl>
            </Modal>
        </Layout>
    )
}