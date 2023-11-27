import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";


import {
    useState, useRef, useEffect,
} from "react";
import { useSelectCategory } from "../hooks/useCategory";


type CategoryPillProps = {
    categories: string[],
    selectedCategory: string;
    onSelect: (calegory: string) => void
}

const TRANSLATE_AMOUNT = 200;

export function CategoryPills({ categories, selectedCategory, onSelect }: CategoryPillProps) {
    const [translate, setTranslate] = useState(0);
    const [isLeftVisible, setIsLeftVisible] = useState(true);
    const [isRightVisible, setIsRightVisible] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);

    const { changeCategory } = useSelectCategory()
    useEffect(() => {
        if (containerRef.current == null) return;

        const observer = new ResizeObserver(entries => {
            const container = entries[0].target;
            if (container == null) return
            setIsLeftVisible(translate < 0);

            setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
        });

        return () => {
            observer.disconnect()
        }

    }, [categories, translate]);

    return (
        <div ref={containerRef} className="overflow-x-hidden relative">
            <div
                className="flex whitespace-nowrap gap-3 transition-transform w-[max-content] max-[455px]:text-[13px]" style={{ transform: `translateX(-${translate}px)` }}>
                {categories.map(categ => (
                    <Button variant={selectedCategory == categ ? "dark" : "default"}
                        key={categ}
                        onClick={() => {
                            onSelect(categ)
                            changeCategory(categ)
                        }}
                        className="py-1 px-3 rounded-lg whitespace-nowrap">
                        {categ}
                    </Button>
                ))}
            </div>


            {isLeftVisible && <div className="absolute -translate-y-1/2 left-0 top-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
                <Button
                    onClick={() => setTranslate(translate => {
                        const newTranslate = translate - TRANSLATE_AMOUNT;
                        if (newTranslate <= 0) {
                            return 0
                        }
                        return newTranslate
                    })}
                    variant="ghost" size="icon" className="h-full aspect-square w-auto p-1.5">
                    <ChevronLeft />
                </Button>
            </div>}

            {isRightVisible && <div className="absolute -translate-y-1/2 right-0 top-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
                <Button
                    onClick={() => {
                        setTranslate((translate) => {
                            if (containerRef.current === null) {
                                return translate
                            }
                            const newTranslate = translate + TRANSLATE_AMOUNT;

                            const edge = containerRef.current.scrollWidth;
                            const width = containerRef.current.clientWidth;

                            if (newTranslate + width >= edge) {
                                return edge - width
                            }
                            return newTranslate
                        })
                    }}
                    variant="ghost" size="icon" className="h-full aspect-square w-auto p-1.5">
                    <ChevronRight />
                </Button>
            </div>}
        </div>
    )
}