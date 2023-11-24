import { useParams } from "react-router-dom"

import { videos } from "../../data/homepage-vidoes/vidoes";
export function VidoeDetails() {
    const { id } = useParams();

    const video = videos.filter(video => video.id === id);
   
    return (
        <section className="vidoe-details">
            <h1>Vidoe Details</h1>

            
        </section>
    )
}