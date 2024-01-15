interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

function IconArrowLeft(props: IconProps) {
  const { width = 24, height = 24, fill = "#FFFFFF" } = props; //Set default value

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconArrowLeft;
