import { UploadImage } from "@/components/Form/UploadImage";
import { Layout } from "@/layouts/Layout";
import { Heading } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <Layout showCategries={false}>
            <Heading as="h3" size="30px">Контент канала</Heading>
            <UploadImage />
        </Layout>
    )
}