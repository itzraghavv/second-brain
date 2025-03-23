import { useState } from "react";
import { PlusIcon, Share2Icon } from "lucide-react";

import { Card } from "../components/card";
import { Button } from "../components/button";
import { AddContentModal } from "../components/add-content-modal";
import { Sidebar } from "../components/sidebar";
import { useContent } from "../hooks/useContent";

export const DashboardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const content = useContent();
  console.log(content);
  return (
    <>
      <Sidebar />
      <div className={`p-2 md:p-8 min-h-screen md:ml-76 bg-gray-100 `}>
        <AddContentModal
          open={modalOpen}
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        />
        <div className="flex justify-between items-center px-2 md:px-4 py-4 md:py-0">
          <div>
            <h1 className="text-lg md:text-2xl font-bold">All Notes</h1>
          </div>
          <div className="flex gap-x-3 items-center">
            <Button
              variant="secondary"
              className="hidden md:flex"
              size="md"
              text="Share"
              startIcon={<Share2Icon className="size-5" />}
            />
            <Button
              variant="primary"
              size="md"
              text="Add Content"
              startIcon={<PlusIcon />}
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
            />
          </div>
        </div>
        {content.length > 0 ? (
          <div className="flex gap-4 p-3 flex-wrap">
            {content.map(({ _id, type, title, link }) => (
              <Card key={_id} type={type} title={title} link={link} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">
              No content available. Add some content!
            </p>
          </div>
        )}
      </div>
    </>
  );
};
