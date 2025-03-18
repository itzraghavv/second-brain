import { XIcon } from "lucide-react";
import { Input } from "./input";
import { useRef } from "react";
import { Button } from "./button";
import { CreatePost } from "../services/create-post";

interface ModalProps {
  open: boolean;
  onClick: () => void;
}

export const AddContentModal = ({ open, onClick }: ModalProps) => {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const typeRef = useRef<HTMLInputElement>();

  const createPost = () => {
    const title = titleRef.current?.value;
    const type = typeRef.current?.value;
    const link = linkRef.current?.value;
    CreatePost(title, type.toLowerCase(), link);
  };

  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center backdrop-filter backdrop-blur-xs bg-opacity-50">
          <div className="flex flex-col justify-center">
            <div className="bg-white py-2 px-4 rounded-md min-w-72 text-black">
              <div className="flex justify-end">
                <div onClick={onClick}>
                  <XIcon className="size-4" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                Add Content
                <Input
                  reference={titleRef}
                  type="text"
                  placeholder="Enter title"
                />
                <Input
                  reference={linkRef}
                  type="text"
                  placeholder="Paste link"
                />
                <Input
                  reference={typeRef}
                  type="text"
                  placeholder="Enter Type"
                />
                <Button
                  variant="primary"
                  size="md"
                  text="Create"
                  onClick={createPost}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//  TODO - Add a hook on outside click to close the modal
