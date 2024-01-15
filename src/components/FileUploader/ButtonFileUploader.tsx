import React, { useRef, ChangeEvent, useState } from "react";

interface FileUploaderProps {
  btnText: string;
  btnClass: string;
  acceptedFile: string;
  handleFile: (file: File) => void;
}

const ButtonFileUploader: React.FC<FileUploaderProps> = ({
  btnText,
  btnClass,
  acceptedFile,
  handleFile,
}) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files?.[0];

    if (fileUploaded) {
      handleFile(fileUploaded);
    }
  };

  return (
    <>
      <button className={btnClass} onClick={handleClick}>
        <p className="text-[0.875rem]">{btnText ? btnText : "Upload a file"}</p>
      </button>
      <input
        type="file"
        accept={acceptedFile}
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }} // Make the file input element invisible
      />
    </>
  );
};

export default ButtonFileUploader;
