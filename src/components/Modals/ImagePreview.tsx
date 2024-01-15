import React from "react";
import { IconCloseCircle } from "../icons";

interface ModalProps {
  isOpen: boolean;
  image: string;
  downloadImage?: boolean;
  onClose: () => void;
}

const ImagePreview: React.FC<ModalProps> = ({
  isOpen,
  image,
  downloadImage = false,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = image;
    a.download = "virtual_background.png"; // Set the desired file name here
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="modal">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-monochrome-800 rounded-lg shadow-lg p-6 max-w-[682px] m-[1rem] lg:m-0">
          <div className="flex justify-end">
            <button
              className="absolute -mt-[2rem] -mr-[2rem]"
              onClick={onClose}
            >
              <IconCloseCircle width={30} height={30} fill={"#A1A1A1"} />
            </button>
          </div>
          <img src={image} alt="" className="max-h-[70vh]" />

          {downloadImage && (
            <button
              className="h-[2.5rem] w-full mt-[1rem] flex flex-row items-center justify-center px-[0.75rem] py-[0.75rem] bg-allurared-600 font-bold rounded-lg hover:bg-[#67141B]"
              onClick={handleDownload}
            >
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
