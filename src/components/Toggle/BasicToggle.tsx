import React, { useEffect, useState } from "react";

interface ToggleProps {
  value?: boolean;
  onToggle?: (isChecked: boolean) => void;
}

const BasicToggle: React.FC<ToggleProps> = ({ value, onToggle }) => {
  const [isChecked, setIsChecked] = useState(value);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onToggle) {
      onToggle(!isChecked);
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`h-[2rem] w-[3.5rem] bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-allurared-800 rounded-full peer ${
          isChecked
            ? 'dark:bg-monochrome-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.75rem] after:w-[1.75rem] after:transition-all dark:border-gray-600 peer-checked:bg-allurared-600'
            : 'dark:bg-monochrome-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.75rem] after:w-[1.75rem] after:transition-all dark:border-gray-600'
        }`}
      ></div>
    </label>
  );
};

export default BasicToggle;
