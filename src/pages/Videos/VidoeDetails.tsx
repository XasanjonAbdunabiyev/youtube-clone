import { useEffect, useState } from "react";

import { getVideosByCategory, getVidoeDetails } from "@/services";
import { useNavigate, useParams } from "react-router-dom";
import { VidoeList } from "@/components/VidoeList";
import { Layout } from "@/layouts/Layout";
import { ArrowLeftCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { IVidoesProps } from "@/types/home";
import { useSelectCategory } from "@/hooks/useCategory";

export function VidoeDetails() {
    const { id } = useParams();
    const { calegory } = useSelectCategory();

    const video = getVidoeDetails(String(id));

    const metaTitle = video[0].title;

    const [videos, setVideos] = useState<IVidoesProps[]>([]);

    useEffect(() => {
        document.title = metaTitle;
        const videos = getVideosByCategory(calegory);
        setVideos(videos)
    }, [id]);

    let navigate = useNavigate();

    return (
        <section className="vidoe-details">
            <Layout showCategries={false}>
                <Button onClick={() => navigate(-1)} variant="default" className="w-max px-10 my-2 font-bold bg-gray-400  flex gap-2 items-center">
                    <ArrowLeftCircle />
                    Back to home page
                </Button>
                <VidoeList vidoeRow="single" videos={video} />
                <div className="my-3">
                    <VidoeList vidoeRow="automatic" videos={videos} />
                </div>
            </Layout>
        </section>
    )
}