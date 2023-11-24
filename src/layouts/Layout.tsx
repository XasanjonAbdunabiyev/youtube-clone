
import { useState, useEffect, ReactNode } from "react";
import { VideoGridItemProps } from "../components/VideoGridItem";
import { IVidoesProps } from "../types/home";
import { videos } from "../data/homepage-vidoes/vidoes";
import { categories } from "../data/categories";
import { PageHeader } from "./PageHeader";
import { SidebarProvider } from "../contexts/SidebarContext";
import { CategoryPills } from "../components/CategoryPills";
import { Sidebar } from "./Sidebar";


interface LayoutProps {
    children: ReactNode;
    showCategries?: boolean;
}

export function Layout({ children, showCategries = true }: LayoutProps) {
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
                                {showCategries && (
                                    <CategoryPills
                                        selectedCategory={selectedCategory}
                                        onSelect={setSelectedCategory}
                                        categories={categories} />
                                )}
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </section>
    )
}