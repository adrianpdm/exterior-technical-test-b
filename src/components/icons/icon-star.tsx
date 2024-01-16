interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

function IconStar(props: IconProps) {
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
        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconStar;
