import React, { useRef } from "react";
import {
  IconArrowRight,
  IconCross,
  IconUserRoundfill,
  IconWhatsapp,
} from "../icons";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const total_students: number = 1;

const StudentInformations: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const studentInfoRef = useRef<(HTMLDivElement | null)[]>([]);
  const toggleCollapse = (index: number) => {
    const currentArrowElement = studentInfoRef.current[index]
      ?.previousElementSibling?.lastChild?.lastChild as HTMLElement;

    if (studentInfoRef.current[index]) {
      studentInfoRef.current[index]?.classList.toggle("hidden");
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
        {total_students === 1 ? (
          <div className="bg-monochrome-600 rounded-lg shadow-lg w-[47rem] h-[15.75rem] p-[1rem]">
            <div className="flex justify-between">
              <div className="flex flex-row items-center space-x-[1.25rem]">
                <IconUserRoundfill />
                <h1 className="modal-title text-[1.25rem] font-bold">
                  Informasi Student
                </h1>
              </div>
              <button className="" onClick={onClose}>
                <IconCross width={30} height={30} fill={"#A1A1A1"} />
              </button>
            </div>
            <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-[1rem]" />
            <div className="modal-body mt-4 text-monochrome-100 font-normal">
              <div className="flex flex-row">
                <div className="bg-monochrome-500 rounded-lg mr-[1rem] h-[2.5rem] w-[2.5rem]">
                  <img src="./src/assets/dummy/img_tutor.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                    Dimas Aditya
                  </p>
                  <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                    +628122234432
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex flex-col col-span-2 mt-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                  Pendidikan
                </p>
                <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                  S2 Sastra Inggris UGM
                </p>
              </div>
              <div className="flex flex-col col-span-2 mt-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                  Usia
                </p>
                <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                  24 Tahun
                </p>
              </div>
              <div className="flex flex-col col-span-2 mt-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                  Intitusi
                </p>
                <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                  Lister Edukasi Teknologi
                </p>
              </div>
              <div className="flex flex-col col-span-1 mt-[1rem]">
                <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                  Pekerjaan
                </p>
                <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                  Karyawan Swasta
                </p>
              </div>
              <div className="mt-[1rem] flex justify-end">
                <Link
                  target="_blank"
                  to="https://api.whatsapp.com/send/?phone=6281231122250&text=Hi+Lister%0A%0AStudent,&type=phone_number&app_absent=0"
                >
                  <button className="h-[2.5rem] w-[7.25rem] flex flex-row items-center justify-center px-[0.75rem] py-[0.75rem] bg-allurared-600 rounded-lg hover:bg-[#67141B]">
                    <p className="font-bold text-[0.875rem] mr-[0.75rem] flex flex-row">
                      Hubungi
                    </p>
                    <IconWhatsapp />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-monochrome-600 rounded-lg shadow-lg w-[47rem] p-[1rem]">
            <div className="flex justify-between">
              <div className="flex flex-row items-center space-x-[1.25rem]">
                <IconUserRoundfill />
                <h1 className="modal-title text-[1.25rem] font-bold">
                  Informasi Student
                </h1>
              </div>
              <button className="" onClick={onClose}>
                <IconCross width={30} height={30} fill={"#A1A1A1"} />
              </button>
            </div>
            <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-[1rem]" />
            <div
              className="rounded-lg bg-monochrome-600 hover:cursor-pointer"
              onClick={() => toggleCollapse(0)}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center z-10">
                  <div className="flex flex-row">
                    <div className="bg-monochrome-500 rounded-lg mr-[1rem] h-[2.5rem] w-[2.5rem]">
                      <img src="./src/assets/dummy/img_tutor.png" alt="" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                        Dimas Aditya
                      </p>
                      <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                        +628122234432
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rotate-90">
                    <IconArrowRight fill="#A1A1A1" />
                  </div>
                </div>
              </div>
              <div
                ref={(ref) => (studentInfoRef.current[0] = ref)}
                className="hidden bg-monochrome-600 mt-[1rem]"
              >
                <div className="grid grid-cols-4">
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Pendidikan
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      S2 Sastra Inggris UI
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Usia
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      29 Tahun
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Intitusi
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      Lister Edukasi Teknologi
                    </p>
                  </div>
                  <div className="flex flex-col col-span-1 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Pekerjaan
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      Karyawan Swasta
                    </p>
                  </div>
                  <div className="mt-[1rem] flex justify-end">
                    <Link
                      target="_blank"
                      to="https://api.whatsapp.com/send/?phone=6281231122250&text=Hi+Lister%0A%0AStudent,&type=phone_number&app_absent=0"
                    >
                      <button className="h-[2.5rem] w-[7.25rem] flex flex-row items-center justify-center px-[0.75rem] py-[0.75rem] bg-allurared-600 rounded-lg hover:bg-[#67141B]">
                        <p className="font-bold text-[0.875rem] mr-[0.75rem] flex flex-row">
                          Hubungi
                        </p>
                        <IconWhatsapp />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="border border-monochrome-500 my-4" />
            </div>
            <div
              className="rounded-lg bg-monochrome-600 hover:cursor-pointer"
              onClick={() => toggleCollapse(1)}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center z-10">
                  <div className="flex flex-row">
                    <div className="bg-monochrome-500 rounded-lg mr-[1rem] h-[2.5rem] w-[2.5rem]">
                      <img src="./src/assets/dummy/img_tutor.png" alt="" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                        Rey Ricardo
                      </p>
                      <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                        +6281299876273
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rotate-90">
                    <IconArrowRight fill="#A1A1A1" />
                  </div>
                </div>
              </div>
              <div
                ref={(ref) => (studentInfoRef.current[1] = ref)}
                className="hidden bg-monochrome-600 mt-[1rem]"
              >
                <div className="grid grid-cols-4">
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Pendidikan
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      S2 Sastra Inggris UMS
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Usia
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      30 Tahun
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Intitusi
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      Lister Edukasi Teknologi
                    </p>
                  </div>
                  <div className="flex flex-col col-span-1 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Pekerjaan
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      Karyawan Swasta
                    </p>
                  </div>
                  <div className="mt-[1rem] flex justify-end">
                    <Link
                      target="_blank"
                      to="https://api.whatsapp.com/send/?phone=6281231122250&text=Hi+Lister%0A%0AStudent,&type=phone_number&app_absent=0"
                    >
                      <button className="h-[2.5rem] w-[7.25rem] flex flex-row items-center justify-center px-[0.75rem] py-[0.75rem] bg-allurared-600 rounded-lg hover:bg-[#67141B]">
                        <p className="font-bold text-[0.875rem] mr-[0.75rem] flex flex-row">
                          Hubungi
                        </p>
                        <IconWhatsapp />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="border border-monochrome-500 my-4" />
            </div>
            <div
              className="rounded-lg bg-monochrome-600 hover:cursor-pointer"
              onClick={() => toggleCollapse(2)}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center z-10">
                  <div className="flex flex-row">
                    <div className="bg-monochrome-500 rounded-lg mr-[1rem] w-[2.5rem] h-[2.5rem]">
                      <img src="./src/assets/dummy/img_tutor.png" alt="" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                        Elardo Goncalves
                      </p>
                      <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                        +628129234776
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rotate-90">
                    <IconArrowRight fill="#A1A1A1" />
                  </div>
                </div>
              </div>
              <div
                ref={(ref) => (studentInfoRef.current[2] = ref)}
                className="hidden bg-monochrome-600 mt-[1rem]"
              >
                <div className="grid grid-cols-4">
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Pendidikan
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      S2 Sastra Inggris IPB
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Usia
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      21 Tahun
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Intitusi
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      Lister Edukasi Teknologi
                    </p>
                  </div>
                  <div className="flex flex-col col-span-1 mt-[1rem]">
                    <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                      Pekerjaan
                    </p>
                    <p className="text-white font-normal leading-[1.25rem] text-[0.875rem]">
                      Karyawan Swasta
                    </p>
                  </div>
                  <div className="mt-[1rem] flex justify-end">
                    <Link
                      target="_blank"
                      to="https://api.whatsapp.com/send/?phone=6281231122250&text=Hi+Lister%0A%0AStudent,&type=phone_number&app_absent=0"
                    >
                      <button className="h-[2.5rem] w-[7.25rem] flex flex-row items-center justify-center px-[0.75rem] py-[0.75rem] bg-allurared-600 rounded-lg hover:bg-[#67141B]">
                        <p className="font-bold text-[0.875rem] mr-[0.75rem] flex flex-row">
                          Hubungi
                        </p>
                        <IconWhatsapp />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="border border-monochrome-500 my-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default StudentInformations;
