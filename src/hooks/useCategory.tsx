import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware"
import { categories } from "../data/categories";


interface SelectedCategoryProps {
    calegory: string;
    changeCategory: (category: string) => void;
}

export const useSelectCategory = create<SelectedCategoryProps>()(
    persist(
        (set) => ({ calegory: categories[0], changeCategory: (calegory: string) => set({ calegory: calegory }) }),
        {
            name: "category",
            storage: createJSONStorage(() => localStorage)
        }
    )
);
