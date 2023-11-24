import { CategoryPills } from "../../components/CategoryPills"
import { VideoGridItem, VideoGridItemProps } from "../../components/VideoGridItem"
import { SidebarProvider } from "../../contexts/SidebarContext"
import { categories } from "../../data/categories"
import { videos } from "../../data/homepage-vidoes/vidoes"
import { PageHeader } from "../../layouts/PageHeader"
import { Sidebar } from "../../layouts/Sidebar"

import { useState, useEffect } from "react";
import { IVidoesProps } from "../../types/home"

export function Home() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [filteredCategories, setFiltedCategories] = useState<IVidoesProps[] & typeof videos>([]);

    const vidoesFilter = (videos: VideoGridItemProps[]) => {
        return (videos?.filter(video => video.category === selectedCategory.toLowerCase()));
    }

    useEffect(() => {
        const filteredCategory = vidoesFilter(videos);
        setFiltedCategories(filteredCategory);

    }, [selectedCategory])


    console.log(filteredCategories);
    


    return (
        <section className="home">
            <SidebarProvider>
                <div className="flex flex-col max-h-screen overflow-hidden">
                    <PageHeader />
                    <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                        <Sidebar />
                        <div className="overflow-x-hidden px-10 pb-4">
                            <div className="sticky top-0 bg-white z-10 pb-4">
                                <CategoryPills
                                    selectedCategory={selectedCategory}
                                    onSelect={setSelectedCategory}
                                    categories={categories} />
                            </div>

                            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(40%,1fr))] max-[750px]:grid-cols-[repeat(auto-fill,minmax(95%,1fr))]">
                                {videos?.map((video) => {
                                    return <VideoGridItem key={video.id} {...video} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </section>
    )
}