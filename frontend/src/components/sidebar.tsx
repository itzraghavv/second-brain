import {
  BrainIcon,
  HashIcon,
  Link2Icon,
  MenuIcon,
  Notebook,
  PlusIcon,
  Share2Icon,
  TwitterIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import { SidebarItem } from "./sidebar-item";
import { useEffect, useState } from "react";
import { Button } from "./button";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setSidebarOpen(isDesktop);
  }, [isDesktop]);

  // if (!sidebarOpen) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "unset";
  // }
  if (!sidebarOpen) {
    return (
      <div className="fixed top-0 left-0 pb-3">
        <div className="cursor-pointer text-black md:text-white rounded-md md:transition-none transition-all duration-150">
          <MenuIcon
            className="size-6 m-2"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white shadow-md w-76 fixed left-0 top-0 p-3 md:px-6 md:transition-none transition-all duration-150">
      <div className="flex justify-between items-center py-4 md:py-2 px-1">
        <div className="flex items-center md:py-3 hover:cursor-pointer">
          <BrainIcon className="size-8 md:size-10 text-indigo-600 mr-2" />
          <p className="text-2xl md:text-3xl font-medium">Second Brain</p>
        </div>
        {!isDesktop ? (
          <XIcon
            className="size-6 m-2"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          />
        ) : null}
      </div>

      <SidebarItem title="Twitter" icon={<TwitterIcon />} />
      <SidebarItem title="Youtube" icon={<YoutubeIcon />} />
      <SidebarItem title="Documentations" icon={<Notebook />} />
      <SidebarItem title="Links" icon={<Link2Icon />} />
      <SidebarItem title="Tags" icon={<HashIcon />} />

      <div className="pt-5 font-normal md:hidden">
        <Button
          variant="secondary"
          className="w-full"
          size="md"
          text="Share Brain"
          startIcon={<Share2Icon className="size-5" />}
        />
      </div>
    </div>
  );
};
