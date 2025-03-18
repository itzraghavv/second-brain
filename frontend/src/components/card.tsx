import { NotebookIcon, Share2Icon, Trash2Icon } from "lucide-react";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import { Tweet } from "react-tweet";
interface CardInterface {
  title?: string;
  type: "youtube" | "twitter";
  link?: string;
  description?: string;
}

export const Card = ({ title, type, link }: CardInterface) => {
  const youtubeOpts = {
    height: "160",
    width: "250",
  };

  const linkId = getYouTubeID(link);

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
        {type === "youtube" && <YouTube videoId={linkId} opts={youtubeOpts} />}
        {type === "twitter" && (
          <Tweet id="1901992088268341525"/>
        )}
        <div className="w-full"></div>
      </div>
    </div>
  );
};

// https://x.com/Hiteshdotcom/status/1901992088268341525
