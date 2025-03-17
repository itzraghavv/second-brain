import { PlusIcon, Share2Icon } from "lucide-react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { AddContentModal } from "../components/add-content-modal";
import { useState } from "react";

export const DashboardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <AddContentModal
        open={modalOpen}
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      />
      <div className="">
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
  );
};
