import { twMerge } from "tailwind-merge"

import { ElementType } from "react";
import { buttonStyles } from "../../components/ui/Button";

type SmallSidebarItemProps = {
    Icon: ElementType
    title: string
    url: string
}

export function SmallSidebarItem({ Icon, title, url, ...props }: SmallSidebarItemProps) {
    return (
        <a
            {...props}
            href={url}
            className={twMerge(
                buttonStyles({ variant: "ghost" }),
                "py-4 px-1 flex flex-col items-center rounded-lg gap-1 my-2"
            )}
        >
            <Icon className="w-6 h-6" />
            <div className="text-sm">{title}</div>
        </a>
    )
}