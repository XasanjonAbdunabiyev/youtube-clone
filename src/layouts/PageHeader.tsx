import { ArrowLeft, Bell, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import { PageHeaderFirstSection } from "./PageHeaderFirstSection";
import { Dropdown } from "@/components/Dropdown"

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  const user = localStorage.getItem("user");

  return (
    <div className="flex gap-10 lg:gap-20 justify-between p-4 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow max-w-[98%] justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"
          }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 w- ${showFullWidthSearch ? "hidden" : "flex"
          } max-[475px]:flex-wrap`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>

        {user ? (
          <Dropdown />
        ) : <Button size="icon" variant="ghost">
          <User />
        </Button>}
      </div>
    </div>
  );
}
