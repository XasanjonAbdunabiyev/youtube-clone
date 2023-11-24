import { useState } from "react"
import { formatDuration } from "../utils/formatDuration"
import { formatTimeAgo } from "../utils/formatTimeAgo"

export type VideoGridItemProps = {
    id: string
    title: string
    channel: {
        id: string
        name: string
        profileUrl: string
    }
    category: string;
    views: number
    postedAt: Date
    duration: number
    thumbnailUrl: string
    iframeUrl: string
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })

export function VideoGridItem({
    id,
    title,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
}: VideoGridItemProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    return (
        <div
            className="flex flex-col gap-2"
            onMouseEnter={() => setIsVideoPlaying(true)}
            onMouseLeave={() => setIsVideoPlaying(false)}
        >
            <a href={`/watch/${id}`} className="relative aspect-video">
                <img
                    src={thumbnailUrl}
                    className={`block w-full h-[300px] object-cover transition-[border-radius] duration-200 ${isVideoPlaying ? "rounded-none" : "rounded-xl"
                        }`}
                />
                <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
                    {formatDuration(duration)}
                </div>
            </a>
            <div className="flex gap-2">
                <a href={`/watch/${channel.id}`} className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
                </a>
                <div className="flex flex-col max-[455px]:text-[12px]">
                    <a href={`/watch/${id}`} className="font-bold max-[455px]:text-[12px]">
                        {title}
                    </a>
                    <div className="text-secondary-text text-sm">
                        {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
                    </div>
                </div>
            </div>
        </div>
    )
}
