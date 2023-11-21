
import { CategoryPills } from "./components/CategoryPills"
import { PageHeader } from "./layouts/PageHeader"

import { categories } from "./data/categories";

import { useContext, useState, useEffect } from "react";

import { videos } from "./data/homepage-vidoes/vidoes";
import { VideoGridItem, VideoGridItemProps } from "./components/VideoGridItem";
import { SidebarProvider, } from "./contexts/SidebarContext";
import { Sidebar } from "./layouts/Sidebar";
import { CategoryPillsContext } from "./contexts/CategoryPillsContext"


// import { useQuery } from "@tanstack/react-query"
// import { getHomePage } from "./services";
// import { HomeVidoes, VidoeProps } from "./types/home";


export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const vidoesFilter = (videos: VideoGridItemProps[]) => {
    let filteredVidoes = (videos?.filter(video => video.category === selectedCategory.toLowerCase()));
    console.log(filteredVidoes);
  }

  useEffect(() => {
    const filteredCategory = vidoesFilter(videos);



  }, [selectedCategory])


  return (
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
  )
}