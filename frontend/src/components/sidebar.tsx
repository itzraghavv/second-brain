import { Link2Icon, Notebook, TwitterIcon, YoutubeIcon } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r w-76 fixed left-0 top-0 pl-6">
      this is sidebar
      <SidebarItem title="Twitter" icon={<TwitterIcon />} />
      <SidebarItem title="Youtube" icon={<YoutubeIcon />} />
      <SidebarItem title="Documentaions" icon={<Notebook />} />
      <SidebarItem title="Links" icon={<Link2Icon />} />
    </div>
  );
};
