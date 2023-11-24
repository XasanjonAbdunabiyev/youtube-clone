import { VideoGridItem } from "../../components/VideoGridItem"
import { videos } from "../../data/homepage-vidoes/vidoes"
import { Layout } from "../../layouts/Layout"

export function Home() {
    return (
        <section className="home">
            <Layout>
                <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(40%,1fr))] max-[750px]:grid-cols-[repeat(auto-fill,minmax(95%,1fr))]">
                    {videos?.map((video) => {
                        return <VideoGridItem key={video.id} {...video} />
                    })}
                </div>
            </Layout>
        </section>
    )
}

