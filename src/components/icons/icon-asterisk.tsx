interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

function IconAsterisk(props: IconProps) {
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
        d="M10,2H14L13.21,9.91L19.66,5.27L21.66,8.73L14.42,12L21.66,15.27L19.66,18.73L13.21,14.09L14,22H10L10.79,14.09L4.34,18.73L2.34,15.27L9.58,12L2.34,8.73L4.34,5.27L10.79,9.91L10,2Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconAsterisk;
