import { Layout } from "@/layouts/Layout";

import { subscriptions } from "@/data/sidebar";

import { Card, CardHeader, Img, Heading } from "@chakra-ui/react"

export default function Subscriptions() {
    return (
        <section className="subscriptions">
            <Layout showCategries={false}>
                <h1 className="font-extrabold text-2xl">Подписки</h1>
                {subscriptions?.map((subs) => {
                    return (
                        <Card key={subs.id} my={2}>
                            <CardHeader className="flex items-center gap-3">
                                <Img borderRadius={"100%"} width={10} height={10}  src={subs.imgUrl}/>
                                <Heading fontSize={16}>{subs.channelName}</Heading>
                            </CardHeader>
                        </Card>
                    )
                })}
            </Layout>
        </section>
    )
}