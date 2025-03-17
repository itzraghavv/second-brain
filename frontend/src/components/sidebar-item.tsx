import { ReactElement } from "react";

interface SidebarItemProps {
  icon: ReactElement;
  title: string;
}

export const SidebarItem = ({ icon, title }: SidebarItemProps) => {
  return (
    <div className="flex items-center gap-x-2 py-2">
      <div className="mr-2 text-black">{icon}</div>
      <div className=" text-gray-600">{title}</div>
    </div>
  );
};
