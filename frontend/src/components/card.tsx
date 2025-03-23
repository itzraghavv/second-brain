import { NotebookIcon, Share2Icon, Trash2Icon } from "lucide-react";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import { Tweet } from "react-tweet";
import { getTweetId } from "../libs/utils";
interface CardInterface {
  title?: string;
  type: "youtube" | "twitter";
  link?: string;
  description?: string;
}

export const Card = ({ title, type, link }: CardInterface) => {
  const youtubeOpts = {
    height: "160",
    width: "100%",
  };

  const tweetId = getTweetId(link);
  const youtubeId = getYouTubeID(link);

  return (
    <div className="bg-white block rounded-md shadow-md p-4 border border-slate-200">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <NotebookIcon className="mr-2" />
          <p>{title}</p>
        </div>
        <div className="flex gap-2 items-center">
          <a href={link} target="_blank">
            <Share2Icon />
          </a>
          <Trash2Icon />
        </div>
      </div>
      <div className="pt-4">
        {type == "youtube" && (
          <YouTube videoId={youtubeId} opts={youtubeOpts} />
        )}
        {type == "twitter" && (
          <span className="">
            <Tweet id={tweetId} />
          </span>
        )}
      </div>
    </div>
  );
};
