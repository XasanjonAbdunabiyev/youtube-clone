import { Layout } from "@/layouts/Layout";
import { videos } from "@/data/homepage-vidoes/vidoes"
import { Card, CardHeader, Img, Heading } from "@chakra-ui/react"


export default function Subscriptions() {
    const haveSubs = videos.map((subs) => subs.channel)
    return (
        <section className="subscriptions">
            <Layout showCategries={false}>
                <Heading size="30px" my={3}>Подписки</Heading>
                {haveSubs?.map((subs) => {
                    return (
                        <Card key={subs.id} my={2}>
                            <CardHeader className="flex items-center gap-3">
                                <Img borderRadius={"100%"} width={10} height={10} src={subs.profileUrl} />
                                <Heading fontSize={16}>{subs.name}</Heading>
                            </CardHeader>
                        </Card>
                    )
                })}
            </Layout>
        </section>
    )
}