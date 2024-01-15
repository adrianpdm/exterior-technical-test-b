import React, { useEffect, useRef, useState } from "react";
import {
  IconAngleSmallDown,
  IconCheckCircleFill,
  IconCross,
  IconShieldStarBanner,
} from "../icons";
import { DesktopChecker } from "../../helper";

interface CardProps {
  isOpen: boolean;
  isHideAvailable?: boolean;
  data: string[];
  onClose: () => void;
}

const device = DesktopChecker();

const HakStudent: React.FC<CardProps> = ({
  isOpen,
  isHideAvailable = false,
  data,
  onClose,
}) => {
  const [isOpenDetailMobile, setIsOpenDetailMobile] = useState(false);
  const [isOpenDetailDesktop, setIsOpenDetailDesktop] = useState(true);
  const refIconAngleSmallDown = useRef<HTMLDivElement>(null);

  function toggleDetail() {
    refIconAngleSmallDown.current?.classList.toggle("rotate-180");
    setIsOpenDetailMobile(!isOpenDetailMobile);
    setIsOpenDetailDesktop(!isOpenDetailDesktop);
  }

  useEffect(() => {
    if (device === "desktop") {
      refIconAngleSmallDown.current?.classList.add("rotate-180");
    }
  }, []);

  return isOpen ? (
    <div className="bg-monochrome-700 p-[1rem] lg:p-[1.5rem] text-center items-center rounded-xl">
      <div className="flex flex-row">
        <div className="w-full flex flex-row">
          <IconShieldStarBanner />
          <div className="flex flex-col justify-center text-left ml-[0.5rem]">
            <p className="text-[0.875rem] lg:text-[1.5rem] leading-[1.5rem] lg:leading-[2rem] font-bold w-[13rem] lg:w-full">
              Hak-Hak Kamu sebagai student di Lister!
            </p>
            <p className="text-monochrome-300 text-[0.75rem] lg:text-[1rem] leading-[1.5rem] font-normal">
              Berikut ada beberapa point hak yang kamu miliki selama menjadi
              student di Lister.
            </p>
          </div>
        </div>
        {isHideAvailable ? (
          <div className="relative">
            <div
              className="absolute right-[-0.5rem] bottom-[4.75rem] hover:cursor-pointer"
              onClick={() => onClose()}
            >
              <IconCross />
            </div>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute right-0 lg:right-[-0.5rem] bottom-[4.75rem] hover:cursor-pointer"
              onClick={() => toggleDetail()}
            >
              <div ref={refIconAngleSmallDown}>
                <IconAngleSmallDown />
              </div>
            </div>
          </div>
        )}
      </div>

      {device === "desktop" ? (
        <>
          {isOpenDetailDesktop && (
            <>
              <hr className="text-monochrome-500 border border-monochrome-600 my-[1rem]" />
              {data.map((item: string, index: number) => (
                <span
                  className="flex flex-row items-center mb-[1rem]"
                  key={index}
                >
                  <div className="w-[1rem] h-[1rem]">
                    <IconCheckCircleFill
                      height={16}
                      width={16}
                      fill="#46B753"
                    />
                  </div>
                  <p className="ml-[1rem] font-normal text-[0.875rem] text-left">
                    {item}
                  </p>
                </span>
              ))}
            </>
          )}
        </>
      ) : (
        <>
          {isOpenDetailDesktop && isHideAvailable && (
            <button
              onClick={() => toggleDetail()}
              className="bg-monochrome-500 rounded-lg w-full px-[1rem] py-[0.75rem]"
            >
              <p className="font-bold text-white text-[0.875rem] leading-[1.5rem] text-center">
                Lihat Detail
              </p>
            </button>
          )}
          {isOpenDetailMobile && (
            <>
              <hr className="text-monochrome-500 border border-monochrome-600 my-[1rem]" />
              {data.map((item: string, index: number) => (
                <span
                  className="flex flex-row items-center mb-[1rem]"
                  key={index}
                >
                  <div className="w-[1rem] h-[1rem]">
                    <IconCheckCircleFill
                      height={16}
                      width={16}
                      fill="#46B753"
                    />
                  </div>
                  <p className="ml-[1rem] font-normal text-[0.875rem] text-left">
                    {item}
                  </p>
                </span>
              ))}
              {isHideAvailable && (
                <button
                  onClick={() => toggleDetail()}
                  className="bg-monochrome-500 rounded-lg w-full px-[1rem] py-[0.75rem]"
                >
                  <p className="font-bold text-white text-[0.875rem] leading-[1.5rem] text-center">
                    Sembunyikan
                  </p>
                </button>
              )}
            </>
          )}
        </>
      )}
    </div>
  ) : (
    <></>
  );
};

export default HakStudent;
