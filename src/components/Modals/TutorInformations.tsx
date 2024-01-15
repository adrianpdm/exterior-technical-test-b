import React, { useRef } from "react";
import {
  IconCheckCircleFill,
  IconCross,
  IconUserRoundfill,
  IconWhatsapp,
} from "../icons";
import { Link } from "react-router-dom";

interface Tutor {
  id: number;
  full_name: string;
  image: string;
  phone: string;
  keahlian: string[];
  pengalaman: string;
  pendidikan: string;
  pencapaian: string[];
}

interface ModalProps {
  isOpen: boolean;
  data: Tutor | null;
  onClose: () => void;
}

const TutorInformations: React.FC<ModalProps> = ({ isOpen, data, onClose }) => {
  const tutorInfoRef = useRef<(HTMLDivElement | null)[]>([]);
  const toggleCollapse = (index: number) => {
    const currentArrowElement = tutorInfoRef.current[index]
      ?.previousElementSibling?.lastChild?.lastChild as HTMLElement;

    if (tutorInfoRef.current[index]) {
      tutorInfoRef.current[index]?.classList.toggle("hidden");
      currentArrowElement.classList.toggle("rotate-[270deg]");
      currentArrowElement.classList.toggle("flex");
      currentArrowElement.classList.toggle("flex-col-reverse");
    }
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal text-white">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-monochrome-600 rounded-lg shadow-lg w-[47rem] min-h-[28rem] max-h-[40rem] p-[1rem] m-[1rem] lg:m-0 overflow-y-auto">
          <div className="flex justify-between">
            <div className="flex flex-row items-center space-x-[1.25rem]">
              <IconUserRoundfill />
              <h1 className="modal-title text-[1.25rem] font-bold">
                Informasi Tutor
              </h1>
            </div>
            <button className="" onClick={onClose}>
              <IconCross width={30} height={30} fill={"#A1A1A1"} />
            </button>
          </div>
          <hr className="text-monochrome-300 border border-monochrome-500 my-[1rem]" />
          {data !== null ? (
            <div className="modal-body mt-4 text-monochrome-100 font-normal">
              <div className="flex flex-row justify-between mb-[1rem]">
                <div className="flex flex-row">
                  <div className="bg-monochrome-500 rounded-lg mr-[1rem] h-[2.5rem] w-[2.5rem]">
                    <img src={data.image} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      {data.full_name}
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      {data.phone !== undefined &&
                      data.phone !== null &&
                      data.phone.length > 0
                        ? data.phone
                        : "-"}
                    </p>
                  </div>
                </div>
                <Link
                  target="_blank"
                  to={`https://api.whatsapp.com/send/?phone=${data.phone}&text=Hi+Lister%0A%0ATutor,&type=phone_number&app_absent=0`}
                >
                  <button className="h-[2.5rem] w-[7.25rem] flex flex-row items-center justify-center px-[0.75rem] py-[0.75rem] bg-allurared-600 rounded-lg hover:bg-[#67141B]">
                    <p className="font-bold text-[0.875rem] mr-[0.75rem] flex flex-row">
                      Hubungi
                    </p>
                    <IconWhatsapp />
                  </button>
                </Link>
              </div>
              <div className="mb-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem] mb-[0.5rem]">
                  Keahlian
                </p>
                <div>
                  {data.keahlian !== undefined &&
                  data.keahlian !== null &&
                  data.keahlian.length > 0
                    ? data.keahlian.map((item, index) => (
                        <p
                          key={index}
                          className="mr-[0.5rem] mb-[0.5rem] inline-flex p-[0.5rem] bg-monochrome-500 rounded-lg font-bold leading-[1.25rem] text-[0.875rem]"
                        >
                          {item}
                        </p>
                      ))
                    : "-"}
                </div>
              </div>
              <div className="mb-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem] mb-[0.5rem]">
                  Pengalaman
                </p>
                <p className="text-[0.875rem] text-white font-normal leading-[1.5rem]">
                  {`${
                    data.pengalaman !== undefined && data.pengalaman !== null
                      ? data.pengalaman
                      : 0
                  } Tahun mengajar`}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem] mb-[0.5rem]">
                  Pendidikan
                </p>
                <p className="text-[0.875rem] text-white font-normal leading-[1.5rem]">
                  {data.pendidikan !== undefined &&
                  data.pendidikan !== null &&
                  data.pendidikan.length > 0
                    ? data.pendidikan
                    : "-"}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem] mb-[0.5rem]">
                  Achievement
                </p>
                <div className="grid grid-rows-2 grid-flow-col gap-[0.5rem]">
                  {data.pencapaian !== undefined &&
                  data.pencapaian !== null &&
                  data.pencapaian.length > 0
                    ? data.pencapaian.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-row space-x-[0.5rem] items-center"
                        >
                          <IconCheckCircleFill
                            width={16}
                            height={16}
                            fill="#46B753"
                          />
                          <p className="text-[0.875rem] text-white font-normal leading-[1.5rem]">
                            {item}
                          </p>
                        </div>
                      ))
                    : "-"}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default TutorInformations;
