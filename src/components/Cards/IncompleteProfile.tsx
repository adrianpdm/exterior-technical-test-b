import { Progress } from "antd";
import { Link } from "react-router-dom";

interface CardProps {
  isOpen: boolean;
  percentage: number;
  profilePicture: string;
  btnLink: string;
}

const IncompleteProfile: React.FC<CardProps> = ({
  isOpen,
  percentage,
  profilePicture,
  btnLink,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-monochrome-700 p-[1rem] lg:p-[1.5rem] text-center items-center rounded-xl">
      <div className="flex flex-col space-y-[1.25rem]">
        <div className="flex flex-row">
          <img
            src={profilePicture}
            className="w-[3rem] h-[3rem] rounded mr-[1rem]"
          />
          <div className="flex flex-col w-full mr-[1rem]">
            <p className="text-[0.875rem] text-left font-bold leading-[1.5rem]">
              Kelengkapan Datamu!
            </p>
            <div className="w-full">
              <Progress
                percent={percentage}
                showInfo={false}
                strokeColor={"#CD2935"}
                trailColor={"#555555"}
                strokeWidth={12.5}
              />
            </div>
          </div>
          <div className="font-bold text-[2rem] text-[#FD9C1D] leading-[3rem]">
            {percentage}%
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-[0.875rem] text-left font-bold leading-[1.5rem]">
              Hai Syamsul Maryadi, Yuk isi data diri!
            </p>
            <p className="text-[0.75rem] text-left font-normal leading-[1rem]">
              Agar memudahkan proses pencarian tutor sesuai dengan kebutuhanmu.
            </p>
          </div>
          <div className="mt-[1rem] lg:mt-0">
            <Link
              to={btnLink}
              className="lg:flex lg:justify-end w-full lg:w-auto"
            >
              <button className="flex justify-center items-center rounded-lg bg-red-600 font-bold text-[0.875rem] h-[2.5rem] w-full lg:w-[150px] lg:text-sm p-[0.5rem] hover:bg-[#67141B]">
                Lengkapi Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncompleteProfile;
