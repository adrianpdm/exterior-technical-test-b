import { useEffect, useRef, useState } from "react";
import { IconLineEnvelope, IconNotification } from "../icons";
import { DesktopChecker } from "../../helper";
import {
  getNotifications,
  patchReadAllNotification,
  patchReadNotification,
  profile_API,
} from "../../API";
import { BasicEmptyData } from "../EmptyData";
import { diffDateFromNow } from "../../helper";
import { useMenuStore, useNotificationStore } from "../../store";

interface Notification {
  notification_id: number;
  notification_type: string;
  notification_to: string;
  notification_to_userid: number;
  notification_message: string;
  notification_created_at: string;
  notification_is_read: boolean;
}

interface CountUnread {
  invoice: number;
  class_room: number;
}

function Bell() {
  const {
    notificationList,
    setNotificationList,
    emptyNotificationList,
    countUnreadNotification,
    setCountUnreadNotification,
  } = useNotificationStore();
  const [isNotificationListOpen, setIsNotificationListOpen] =
    useState<Boolean>(false);
  const { menuList, setMenuList } = useMenuStore();
  const notificationListRefs = useRef<HTMLDivElement>(null);
  const bellButtonRef = useRef<HTMLButtonElement>(null);
  const device = DesktopChecker();

  async function reqGetNotifications() {
    const response = await getNotifications();

    if (response.status === 200) {
      if (response.data.data) {
        await setCountUnreadNotification(response.data.data.count_unread);
        await setNotificationList(response.data.data.list.reverse());
        await profile_API("auths/profile").then((res) => {
          if (res.data.code === "000") {
            const role = res.data.data.role_name;
            // Handle count_unred segments
            if (response.data.data.count_unread !== null) {
              // invoice segment
              if (response.data.data.count_unread.invoice !== null) {
                const foundObject = menuList.find(
                  (item) => item.link_to === "/purchased-course"
                );

                if (foundObject) {
                  // console.log("Object found:", foundObject);
                  foundObject.count_notification =
                    response.data.data.count_unread.invoice;

                  const index = menuList.findIndex(
                    (item) => item.link_to === "/purchased-course"
                  );

                  if (index !== -1) {
                    menuList[index] = foundObject;
                    setMenuList(menuList);
                  }
                } else {
                  // console.log("Object not found");
                }
              }
              // class_room segment
              if (response.data.data.count_unread.class_room !== null) {
                const roleUrl =
                  role === "tutor" ? "/myclass-tutor" : "/myclass-student";

                const foundObject = menuList.find(
                  (item) => item.link_to === roleUrl
                );

                if (foundObject) {
                  foundObject.count_notification =
                    response.data.data.count_unread.class_room;

                  const index = menuList.findIndex(
                    (item) => item.link_to === roleUrl
                  );

                  if (index !== -1) {
                    menuList[index] = foundObject;
                    setMenuList(menuList);
                  }
                } else {
                  // console.log("Object not found");
                }
              }
            }
          }
        });
      }
    }
  }

  async function reqPatchReadNotification(id: number) {
    patchReadNotification(id);
  }

  function setReadNotif(id: number) {
    reqPatchReadNotification(id);
  }

  // Remove this function if backend has endpoints to read all user notification
  function setReadAllNotif() {
    const resetUnread: CountUnread = { ...countUnreadNotification };
    for (const key in resetUnread) {
      if (resetUnread.hasOwnProperty(key)) {
        resetUnread[key as keyof CountUnread] = 0;
      }
    }
    setCountUnreadNotification(resetUnread);
  }

  function reqPatchReadAllNotification() {
    patchReadAllNotification();
  }

  const countUnreadValues = (unreadObject: CountUnread) => {
    return Object.values(unreadObject).reduce(
      (total, value) => total + value,
      0
    );
  };

  useEffect(() => {
    emptyNotificationList();
    reqGetNotifications();
  }, []);

  useEffect(() => {
    if (isNotificationListOpen) {
      emptyNotificationList();
      reqGetNotifications();
    }
  }, [isNotificationListOpen]);

  const useOutsideDetector = (ref: React.RefObject<HTMLElement>): void => {
    const handleClickOutside = async (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        bellButtonRef.current &&
        !bellButtonRef.current.contains(event.target as Node)
      ) {
        if (notificationListRefs.current) {
          await setIsNotificationListOpen(false);
          // await reqPatchReadAllNotification();
          // await setReadAllNotif();
          if (!notificationListRefs.current.classList.contains("hidden")) {
            notificationListRefs.current.classList.add("hidden");
          }
        }
      }
    };

    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      // Unbind the event listener on clean up
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, handleClickOutside]);
  };

  useOutsideDetector(notificationListRefs);

  const toggleNotificationList = async () => {
    // setReadAllNotif();
    setIsNotificationListOpen(!isNotificationListOpen);
    getNotifications();
    if (notificationListRefs.current) {
      notificationListRefs.current.classList.toggle("hidden");
      await reqPatchReadAllNotification();
      await setReadAllNotif();
    }
  };

  const NewNotificationMark = () => {
    return (
      <>
        {Number(countUnreadValues(countUnreadNotification)) === 0 ? (
          <></>
        ) : (
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-allurared-500 rounded-full top-2 dark:border-gray-900">
            <p className="text-[0.675rem]">
              {Number(countUnreadValues(countUnreadNotification))}
            </p>
          </div>
        )}
      </>
    );
  };

  const BellButton = () => {
    return (
      <button ref={bellButtonRef} onClick={() => toggleNotificationList()}>
        <IconNotification />
        <NewNotificationMark />
      </button>
    );
  };

  const NotificationListclasses = () => {
    if (device === "mobile") {
      return `lg:top-[4.5rem] p-[1rem] w-full lg:w-[31.25rem] left-0 lg:left- top-[3rem] lg:right-[11.5%] bg-monochrome-700 rounded-lg ${
        isNotificationListOpen ? "fixed" : "hidden"
      }`;
    } else {
      return `lg:top-[4rem] p-[1rem] w-[31.25rem] h-[75%] right-[11.5%] overflow-y-auto bg-monochrome-700 rounded-lg ${
        isNotificationListOpen ? "fixed" : "hidden"
      }`;
    }
  };

  const NotificationList = () => {
    return (
      <div ref={notificationListRefs} className={NotificationListclasses()}>
        <p className="text-[1.125rem] font-bold text-white">Notifikasi</p>
        <hr className="border border-monochrome-500 my-4 px-8" />

        {notificationList.length > 0 ? (
          notificationList
            .slice(0, 5)
            .map((item: any, index: number, row: Notification[]) => (
              <div key={index}>
                <div
                  className={
                    "p-[1rem] flex flex-row justify-between " +
                    (item.notification_is_read
                      ? "bg-monochrome-700"
                      : `bg-monochrome-800 hover:cursor-pointer ${
                          index === 0 && "first:rounded-t-lg"
                        } ${
                          index + 1 ===
                            row.filter(
                              (notification) =>
                                !notification.notification_is_read
                            ).length && "last:rounded-b-lg"
                        } `)
                  }
                  onClick={() => setReadNotif(item.notification_id)}
                >
                  <div className="flex flex-row items-center">
                    <IconLineEnvelope fill="#A1A1A1" />
                    <div className="ml-[1rem] w-full lg:w-[20rem] text-monochrome-300">
                      <p className="text-[0.875rem] font-bold">
                        {item.notification_type}
                      </p>
                      <p className="text-[0.875rem] font-normal">
                        {item.notification_message}
                      </p>
                    </div>
                  </div>
                  <div className="ml-[1rem]">
                    <p className="font-normal text-[0.875rem] text-monochrome-300">
                      {diffDateFromNow(item.notification_created_at)}
                    </p>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <BasicEmptyData />
        )}
      </div>
    );
  };

  return (
    <>
      <BellButton />
      <NotificationList />
    </>
  );
}

export default Bell;
