import { videos } from "../data/homepage-vidoes/vidoes"
import { VideoGridItem } from "./VideoGridItem"

interface VidoeListProps {
    videos: typeof videos
}

export function VidoeList({ videos }: VidoeListProps) {
    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(40%,1fr))] max-[750px]:grid-cols-[repeat(auto-fill,minmax(95%,1fr))]">
            {videos?.map((video) => {
                return <VideoGridItem key={video.id} {...video} />
            })}
        </div>
    )
}