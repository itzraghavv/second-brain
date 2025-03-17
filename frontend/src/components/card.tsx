import { NotebookIcon, Share2Icon, Trash2Icon } from "lucide-react";

interface CardInterface {
  title?: string;
  type: "youtube" | "twitter";
  link?: string;
  description?: string;
}

export const Card = ({ title, type, link }: CardInterface) => {
  return (
    <div className="bg-white min-w-72 max-w-72 min-h-48 rounded-md shadow-md p-4 border border-slate-200">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <NotebookIcon className="mr-2" />
          <p>{title}</p>
        </div>
        <div className="flex gap-2 items-center">
          <a href={link}>
            <Share2Icon />
          </a>
          <Trash2Icon />
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src={link?.replace("embed", "watch")} //embed here 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
