import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Home,
  PlaySquare,
  Repeat,
} from "lucide-react";

import { Children, ElementType, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { subscriptions } from "../../data/sidebar";
import { Button, buttonStyles } from "../../components/ui/Button";
import { SmallSidebarItem } from "./SmallSidebarItem";
import { PageHeaderFirstSection } from "./PageHeaderFirstSection";

export function Sidebar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto h-full  pb-4 flex flex-col ml-1 ${isLargeOpen ? "lg:hidden" : "lg:flex"
          }`}
      >
        <SmallSidebarItem Icon={Home} title="Главная страница" url="/" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Подписки"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}
      <aside
        className={`w-72 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${isLargeOpen ? "lg:flex" : "lg:hidden"
          } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title="Главная страница" url="/" />
          <LargeSidebarItem isActive IconOrImgUrl={Repeat} title="Shorts" url="/shorts" />
          <LargeSidebarItem
            IconOrImgUrl={Clapperboard}
            title="Подписки"
            url="/subscriptions"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImgUrl={PlaySquare}
            title="Мой канал"
            url="/dashboard"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Подписки">
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/subscriptions/?=subscripe${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
      </aside>
    </>
  );
}

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSidebarItem({
  IconOrImgUrl,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
