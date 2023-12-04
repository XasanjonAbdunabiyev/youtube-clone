import { IVidoesProps } from "../../types/home"
import { VideoGridItem } from "./VideoGridItem"

interface FilteredVidoesProps {
    filteredVidoes: IVidoesProps[]
}

export function FilteredVidoes({ filteredVidoes }: FilteredVidoesProps) {
    return (
        <>
            {filteredVidoes?.map((video) => {
                return <VideoGridItem vidoeRow="automatic" key={video.id} {...video} />
            })}
        </>
    )
}