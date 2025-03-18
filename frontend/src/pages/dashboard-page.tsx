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
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <AddContentModal
          open={modalOpen}
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            variant="secondary"
            size="md"
            text="Share"
            startIcon={<Share2Icon className="size-6 mr-2" />}
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
        <div className="flex gap-4 p-3 flex-wrap">
          {content.map(({ _id, type, title, link }) => (
            <>
              <Card key={_id} type={type} title={title} link={link} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
