import { ReactNode, useState, createContext } from "react";

import { VideoGridItemProps } from "../components/Videos/VideoGridItem";

type CategoryPillsContextType = {
    categoryType: string;
    vidoesFilter: (videos: VideoGridItemProps[], category: string) => VideoGridItemProps[];
}

export const CategoryPillsContext = createContext<CategoryPillsContextType | null>(null);

type CategoryPillsProviderProps = {
    children: ReactNode;
}

export function CategoryPillsProvider({ children }: CategoryPillsProviderProps) {
    const [categoryType, setCategoryType] = useState<string>("Javascript");


    const vidoesFilter = (videos: VideoGridItemProps[], category: string) => {
        setCategoryType(category)
        return videos?.filter(video => video.category === category);
    }

    return (
        <CategoryPillsContext.Provider value={{ categoryType, vidoesFilter }}>
            {children}
        </CategoryPillsContext.Provider>
    )
}