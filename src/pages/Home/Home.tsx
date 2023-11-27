import { useState, useEffect } from "react"

import { videos } from "../../data/homepage-vidoes/vidoes"
import { Layout } from "../../layouts/Layout"


import { IVidoesProps } from "../../types/home";
import { useSelectCategory } from "../../hooks/useCategory";
import { FilteredVidoes } from "../../components/FilteredVidoes";
import { Empty } from "../../components/Empty";

export function Home() {
    const { calegory } = useSelectCategory();
    const [filteredCategories, setFiltedCategories] = useState<IVidoesProps[] & typeof videos>([]);
    const [notCategory, setNotCategory] = useState(false);

    useEffect(() => {
        const filteredCategiries = videos.filter((vidoe) => {
            if (vidoe.category.includes(calegory.toLowerCase())) {
                return vidoe;
            }
        });
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

