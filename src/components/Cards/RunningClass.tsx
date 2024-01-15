import { useNavigate } from "react-router-dom";
import { BasicEmptyData } from "../EmptyData";
import { getMyClassStudent, patchIsClickedMyClassStudentItem } from "../../API";
import { useEffect, useState } from "react";
import {
  IconLineBook,
  IconLineClock,
  IconLineListCheck,
  IconTutorUnassigned,
} from "../icons";
import { DesktopChecker } from "../../helper";
import dummyClassImage from "../../assets/dummy/scene/Spain.png";
import { Progress } from "antd";

interface CardProps {
  isOpen: boolean;
}

interface Tutor {
  id: number;
  full_name: string;
  image: string;
}

interface MyClassType {
  class_room_id: number;
  class_room_unique_id: string;
  class_image: string;
  class_language_image: string;
  class_category: string;
  class_type: string;
  class_language: string;
  class_meeting_set: string;
  class_product_name: string;
  class_total_meeting: number;
  class_meeting_finished: number;
  class_room_is_clicked: boolean;
  class_session: number;
  tutor: Tutor;
  class_progress_percentage: number;
  class_status: string;
  class_program: string;
}

const RunningClass: React.FC<CardProps> = ({ isOpen }) => {
  const [myclass, setMyClass] = useState<MyClassType[]>([]);
  const navigate = useNavigate();
  const device = DesktopChecker();

  function redirectToDetail(id: number) {
    navigate(`/detail-myclass-student?id=${id}`);
  }

  function handleClickNewMyclassItemList(
    class_room_id: number,
    class_room_is_clicked: boolean
  ) {
    const classRoomIdToSetClicked = class_room_id; // Replace with the class_room_id you want to set class_room_is_clicked to true

    const modifiedArray = setClickedByClassRoomId(
      myclass,
      classRoomIdToSetClicked
    );

    setMyClass(modifiedArray);
    if (class_room_is_clicked === false) {
      reqPatchIsClickedMyclassStudentItem(class_room_id);
    }
  }

  function setClickedByClassRoomId(array: any, classRoomId: number) {
    const index = array.findIndex(
      (item: any) => item.class_room_id === classRoomId
    );

    if (index !== -1) {
      array[index].class_room_is_clicked = true;
    }

    return array.slice(); // Return the updated array and we need to add .slice() function to refresh the state
  }

  async function reqPatchIsClickedMyclassStudentItem(id: number) {
    try {
      await patchIsClickedMyClassStudentItem(id);
    } catch (_) {}
  }

  async function reqGetMyClassStudent(filter: any) {
    const response = await getMyClassStudent(filter);
    if (response.data.code === "000") {
      setMyClass(response.data.data.slice(0, 3));
    }
  }

  useEffect(() => {
    reqGetMyClassStudent({
      status: "berjalan",
      search: "",
    });
  }, []);

  return isOpen ? (
    <div id="listClass">
      {myclass && myclass.length > 0 ? (
        myclass.slice(0.3).map((item: any, index: number) => (
          <div
            key={index}
            className={
              item.class_room_is_clicked === false
                ? "border border-[#46B753] p-[1.5rem] bg-monochrome-700 rounded-lg mb-[1.5rem] hover:cursor-pointer"
                : "p-[1.5rem] bg-monochrome-700 rounded-lg mb-[1.5rem]"
            }
            onClick={() =>
              handleClickNewMyclassItemList(
                item.class_room_id,
                item.class_room_is_clicked
              )
            }
          >
            {item.class_room_is_clicked === false && (
              <div className="bg-[#46B753] flex justify-center items-center px-[0.5rem] py-[0.25rem] w-[7.5rem] h-[1.5rem] absolute -ml-[1.5rem] -mt-[1.5rem] rounded-tl-[0.25rem] rounded-tr-[0rem] rounded-br-[0.5rem]">
                <p className="text-[0.875rem] font-bold">Terbaru!</p>
              </div>
            )}
            <div className="flex flex-col lg:flex-row">
              <div
                className="rounded-lg w-full h-[5.5rem] lg:w-[16.4rem] lg:h-[9.75rem] px-[1rem] lg:px-[1.2rem] py-[0.8rem] lg:mr-[1.69rem] mb-[0.5rem] lg:mb-0 flex flex-row items-end relative bg-center lg:bg-cover"
                style={
                  item.class_image !== ""
                    ? {
                        backgroundImage: `url(${dummyClassImage})`, // use dummyClassImage temporary until real class_image provided from backend API
                      }
                    : { backgroundImage: `url(${dummyClassImage})` }
                }
              >
                <div className="h-1/2 w-full bg-gradient-to-t from-[#003A82] to-transparent absolute bottom-0 left-0 rounded-lg"></div>
                <div className="flex flex-row items-center lg:w-[16.4rem]">
                  <img
                    src={`./flags/${item.class_language_image}`}
                    alt=""
                    className="h-[3rem] w-[3rem] mr-[1rem] z-10"
                  />
                  <p
                    className={`capitalize text-[2rem] font-bold z-10 truncate max-w-[10rem]`}
                  >
                    {item.class_language}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-monochrome-300 text-[1.125rem] font-light leading-[1.5rem] mr-[1rem]">
                      #{item.class_room_unique_id}
                    </p>

                    <div
                      className={`rounded-lg flex items-center p-[0.5rem] h-[2rem] bg-opacity-10 ${
                        item.class_status.toLowerCase() === "selesai"
                          ? "bg-[#46B753] text-[#46B753]"
                          : ""
                      } ${
                        item.class_status.toLowerCase() === "berjalan"
                          ? "bg-[#E17F00] text-[#E17F00]"
                          : ""
                      } ${
                        item.class_status.toLowerCase() === "menunggu tutor"
                          ? "bg-[#2D92E2] text-[#2D92E2]"
                          : ""
                      } ${
                        item.class_status.toLowerCase() === "dibatalkan"
                          ? "bg-[#CD2935] text-[#CD2935]"
                          : ""
                      }
                  `}
                    >
                      <p className="font-bold text-[0.875rem] capitalize">
                        {item.class_status}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-[0.875rem] lg:text-[1rem] font-bold leading-[1.5rem] flex flex-row space-x-[0.5rem] lg:mb-[1.75rem]">
                  <p className="space-x-[0.5rem]">
                    <b className="text-monochrome-300">{item.class_language}</b>
                    <b>{item.class_category}</b>
                    <b className="text-[#2D92E2]">({item.class_type})</b>
                    <b>-</b>
                    <b> {item.class_meeting_set}</b>
                  </p>
                </div>
                <div className="w-auto flex flex-row">
                  <div className="w-full h-[3.5rem]">
                    <div className="bg-monochrome-600 rounded-lg p-[0.5rem] flex flex-row">
                      <div className="bg-monochrome-500 rounded-lg p-[0.5rem] mr-[1rem]">
                        <IconLineBook />
                      </div>
                      <div className="flex flex-col w-full">
                        <p className="font-bold leading-[1.25rem] text-[0.875rem]">
                          Progress Kelas
                        </p>
                        <div className="w-full flex flex-row justify-between h-[1rem]">
                          <div className="w-full">
                            <Progress
                              percent={item.class_progress_percentage}
                              showInfo={false}
                              strokeColor={"#46B753"}
                            />
                          </div>
                          <div className="w-auto flex text-right">
                            <p className="w-[3rem] text-[#46B753] font-bold">
                              {item.class_progress_percentage}%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <BasicEmptyData text="Belum ada kelas yang berjalan." />
      )}
    </div>
  ) : (
    <></>
  );
};

export default RunningClass;
