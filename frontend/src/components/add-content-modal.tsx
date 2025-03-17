import { XIcon } from "lucide-react";
import { Input } from "./input";

interface ModalProps {
  open: boolean;
  onClick: () => void;
}

export const AddContentModal = ({ open, onClick }: ModalProps) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center bg-slate-500 opacity-60">
          <div className="flex flex-col justify-center">
            <div className="bg-white opacity-100 py-2 px-4 rounded-md min-w-72 text-black">
              <div className="flex justify-end">
                <div onClick={onClick}>
                  <XIcon className="size-4" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                Add Content
                <Input type="text" placeholder="Title" />
                <Input type="text" placeholder="Description here" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//  TODO - Add a hook on outside click to close the modal