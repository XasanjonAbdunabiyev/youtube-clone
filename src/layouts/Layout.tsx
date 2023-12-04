
import { useState, ReactNode } from "react";
import { categories } from "../data/categories";
import { PageHeader } from "./__layout__components/PageHeader";
import { SidebarProvider } from "../contexts/SidebarContext";
import { CategoryPills } from "../components/ui/CategoryPills";
import { Sidebar } from "./__layout__components/Sidebar";
import { useSelectCategory } from "../hooks/useCategory";
interface LayoutProps {
    children: ReactNode;
    showCategries?: boolean;
}

export function Layout({ children, showCategries = true }: LayoutProps) {
    const { calegory } = useSelectCategory();
    const [selectedCategory, setSelectedCategory] = useState(calegory);

    return (
        <section className="home">
            <SidebarProvider>
                <div className="flex flex-col max-h-screen overflow-hidden">
                    <PageHeader />
                    <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                        <Sidebar />
                        <div className="overflow-x-hidden pb-4">
                            {showCategries && (
                                <div className="sticky top-0 bg-white z-10 pb-4">
                                    <CategoryPills
                                        selectedCategory={selectedCategory}
                                        onSelect={setSelectedCategory}
                                        categories={categories} />
                                </div>
                            )}
                            <div className="rounded-md bg-gray-200 p-6 mx-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </section>
    )
}