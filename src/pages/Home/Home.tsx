import { useState, useEffect } from "react"

import { useSelectCategory } from "@/hooks/useCategory";
import { IVidoesProps } from "@/types/home";
import { FilteredVidoes } from "@/components/FilteredVidoes";
import { Empty } from "@/components/Empty";
import { videos } from "@/data/homepage-vidoes/vidoes";
import { Layout } from "@/layouts/Layout";

import { getVideosByCategory } from "@/services"

export function Home() {
    const { calegory } = useSelectCategory();
    const [filteredCategories, setFiltedCategories] = useState<IVidoesProps[] & typeof videos>([]);
    const [notCategory, setNotCategory] = useState(false);

    useEffect(() => {
        const filteredCategiries = getVideosByCategory(calegory)
        if (filteredCategiries.length <= 0) {
            setNotCategory(true);
            setFiltedCategories([])
        } else {
            setNotCategory(false);
        }
        setFiltedCategories(filteredCategiries)
    }, [calegory, filteredCategories.length]);


    return (
        <section className="home">
            <Layout>
                <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(40%,1fr))] max-[750px]:grid-cols-[repeat(auto-fill,minmax(95%,1fr))]">
                    <FilteredVidoes filteredVidoes={filteredCategories} />
                </div>
                {notCategory && <Empty />}
            </Layout>
        </section>
    );
}

