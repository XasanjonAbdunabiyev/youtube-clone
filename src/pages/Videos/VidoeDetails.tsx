import { useParams } from "react-router-dom"

import { Layout } from "../../layouts/Layout";

import { useEffect } from "react";

import { getVidoeDetails } from "../../services"
import { VidoeList } from "../../components/VidoeList";

export function VidoeDetails() {
    

    const { id } = useParams();

    const video = getVidoeDetails(String(id));

    const metaTitle = video[0].title;
    useEffect(() => {
        document.title = metaTitle;
    }, [id])


    return (
        <section className="vidoe-details">
            <Layout showCategries={false}>
                <VidoeList vidoeRow="single" videos={video} />
            </Layout>
        </section>
    )
}