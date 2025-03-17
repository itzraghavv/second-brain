import { useState } from "react";
import { PlusIcon, Share2Icon } from "lucide-react";

import { Card } from "../components/card";
import { Button } from "../components/button";
import { AddContentModal } from "../components/add-content-modal";
import { Sidebar } from "../components/sidebar";

export const DashboardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
        <div className="flex gap-4 p-3">
          <Card title="Youtube Clip" type="youtube" link="" />
          <Card type="twitter" title="Tweet" link="" />
        </div>
      </div>
    </>
  );
};
