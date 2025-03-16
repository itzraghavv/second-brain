import { BrainIcon, PlusIcon, Share2Icon } from "lucide-react";

export const DashboardPage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-10">
        <div className="col-span-3 bg-green-200">
          <div className="flex items-center gap-2 text-3xl">
            <BrainIcon className="size-8 text-indigo-600" />
            <p>Second Brain</p>
          </div>

          <div>Tweets</div>
          <div>Videos</div>
          <div>Documents</div>
          <div>Links</div>
          <div>Tags</div>
        </div>

        <div className="col-span-7 bg-red-200">
          <div className="flex justify-between">
            <h1>All Notes</h1>
            <div className="flex gap-4">
              <button className="flex items-center text-lg justify-center">
                <Share2Icon className="size-6" />
                Share Brain
              </button>
              <button className="flex items-center text-lg justify-center ">
                <PlusIcon className="size-6" />
                Add Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
