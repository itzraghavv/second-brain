import { ReactElement } from "react";

interface SidebarItemProps {
  icon: ReactElement;
  title: string;
}

export const SidebarItem = ({ icon, title }: SidebarItemProps) => {
  return (
    <div className="flex items-center gap-x-2 py-4 hover:bg-slate-100 hover:cursor-pointer rounded-md transition-all duration-200">
      <div className="px-2 text-black">{icon}</div>
      <div className=" text-gray-600">{title}</div>
    </div>
  );
};
