interface EmptyDataProps {
  text?: string;
  containerClassProps?: string;
  textClassProps?: string;
  bgColorProps?: string;
}

const BasicEmptyData: React.FC<EmptyDataProps> = ({
  text = "Tidak ada data",
  containerClassProps = "",
  textClassProps = "",
  bgColorProps = "bg-monochrome-700",
}) => {
  return (
    <div
      className={`${containerClassProps} rounded-lg h-[10rem] w-full ${bgColorProps} flex justify-center items-center`}
    >
      <p
        className={`${textClassProps} text-monochrome-300 text-[0.875rem] leading-[1.5rem] font-normal`}
      >
        {text}
      </p>
    </div>
  );
};

export default BasicEmptyData;
