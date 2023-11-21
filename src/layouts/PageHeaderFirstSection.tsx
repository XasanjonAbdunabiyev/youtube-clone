import { Menu } from "lucide-react";
import { Button } from "../components/Button";
import { useSidebarContext } from "../contexts/SidebarContext";

import logo from "../assets/logo.png";

type PageHeaderFirstSectionProps = {
    hidden?: boolean;
};

export function PageHeaderFirstSection({
    hidden = false,
}: PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext();

    return (
        <div
            className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"
                }`}
        >
            <Button onClick={toggle} variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/" className="font-bold font-mono text-[13px] flex gap-2 items-center">
                <img src={logo} className="h-10" />
            </a>
        </div>
    );
}
