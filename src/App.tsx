
import { CategoryPills } from "./components/CategoryPills"
import { PageHeader } from "./layouts/PageHeader"

import { categories } from "./data/categories";

import { useState } from "react";

import { videos } from "./data/homepage-vidoes/vidoes";
import { VideoGridItem } from "./components/VideoGridItem";
import { SidebarProvider } from "./contexts/SidebarContext";
import { Sidebar } from "./layouts/Sidebar";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <SidebarProvider>
      <div className="flex flex-col max-h-screen">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar/>
          <div className="overflow-x-hidden px-10 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
                categories={categories} />
            </div>

            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos?.map((video) => {
                return <VideoGridItem key={video.id} {...video} />
              })}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}