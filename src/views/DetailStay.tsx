import { useSearchParams, useParams } from "react-router-dom";
import { DesktopChecker, RupiahConverter } from "../helper";
// import { useCourseStore, useLanguageStore, useOrderStore } from "../../store";
import { ReactNode, useEffect, useState } from "react";
import { Affix, Progress, Tabs } from "antd";
import {
  getContentByPropertyId,
  getFullTextSearchProperty,
  getPropertyAvailabilityById,
} from "../API";

import type { TabsProps } from "antd";
import {
  IconAsterisk,
  IconBed,
  IconBreakfast,
  IconCreditcard,
  IconFloorsize,
  IconGrid,
  IconStar,
  IconStrikecreditcard,
  IconStrikefreebreakfast,
  IconTag,
} from "../components/icons";
import IconFilter from "../components/icons/icon-filter";

interface IPropertyInformation {
  id: number;
  location_type: string;
  name: string;
  name_suffix: string;
  slug: string;
  fuzzy_ratio: number;
}

const initPropertyInformation: IPropertyInformation = {
  id: 0,
  location_type: "Loading...",
  name: "Loading...",
  name_suffix: "Loading...",
  slug: "Loading...",
  fuzzy_ratio: 0,
};

interface ICatalog {
  brand: string;
  chain: string;
  phone: string;
  category: string;
  star_rating: number;
  address_full: string;
  review_count: number;
  review_rating: number;
  hero_image_url: {
    lg: string;
    md: string;
    sm: string;
    th: string;
    ori: string;
  };
}

interface ImageItem {
  url: {
    lg: string;
    md: string;
    sm: string;
    th: string;
    ori: string;
  };
  group: string;
  caption: string;
}

interface IContentPropertyInformationDetails {
  id: number;
  slug: string;
  type: string;
  name: string;
  name_suffix: string;
  country_code: string;
  address_line: string;
  latitude: number;
  longitude: number;
  catalog: ICatalog;
  image: ImageItem[];
  room: any;
  important_info: any;
  general_info: any;
}

interface IOfferSummaryData {
  min_saving_pct: number;
  max_saving_pct: number;
  median_saving_pct: number;
  mean_saving_pct: number;
  mode_saving_pct: number;
}

interface IPropertyAvailability {
  property_id: number;
  offer_summary_data: IOfferSummaryData;
  offer_list: any;
  offers: any;
}

function DetailStay() {
  const [searchParams] = useSearchParams();
  const guest_per_room = searchParams.get("guest_per_room");
  const number_of_room = searchParams.get("number_of_room");
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  const { slug } = useParams();
  const deviceType = DesktopChecker();

  const [filterFreeBreakfast, setFilterFreeBreakfast] = useState(false);
  const [filterFreeCancellation, setFilterFreeCancellation] = useState(false);
  const [propertyInformation, setPropertyInformation] =
    useState<IPropertyInformation>(initPropertyInformation);
  const [
    contentPropertyInformationDetails,
    setContentPropertyInformationDetails,
  ] = useState<IContentPropertyInformationDetails>();
  const [propertyAvailability, setPropertyAvailability] =
    useState<IPropertyAvailability>();
  const [groupedOfferList, setGroupedOfferList] = useState<any>();

  useEffect(() => {}, [propertyAvailability?.offer_list]);

  // const {
  //   selectedCourseClass,
  //   selectedCourseProgram,
  //   selectedCourseClassType,
  //   selectCourseClass,
  //   selectCourseClassType,
  //   selectCourseProgram,
  //   selectCourseCategory,
  // } = useCourseStore();
  // const { orderStep, setOrderStep } = useOrderStore();
  // const { selectedLanguage, setSelectedLanguage } = useLanguageStore();

  async function reqGetFullTextSearchProperty(slug: string) {
    const response = await getFullTextSearchProperty(slug);
    setPropertyInformation(response.data[0]);
    reqGetContentByPropertyId(response.data[0].id);
    reqGetPropertyAvailabilityById(response.data[0].id);
  }

  async function reqGetContentByPropertyId(id: number) {
    const response = await getContentByPropertyId(id);
    setContentPropertyInformationDetails(response.data[id]);
  }

  async function reqGetPropertyAvailabilityById(id: number) {
    const query = `guest_per_room=${guest_per_room}&number_of_room=${number_of_room}&checkin=${checkin}&checkout=${checkout}`;
    const response = await getPropertyAvailabilityById(id, query);
    setPropertyAvailability(response.data);
    // console.log(response.data.offer_list);
    const groupedByRoomName = {};

    // Iterasi melalui array dan mengelompokkan objek berdasarkan room_name
    response.data.offer_list.forEach((item) => {
      const roomName = item.room_name;

      if (!groupedByRoomName[roomName]) {
        // Jika kelompok belum ada, buat array baru
        groupedByRoomName[roomName] = [item];
      } else {
        // Jika kelompok sudah ada, tambahkan objek ke dalamnya
        groupedByRoomName[roomName].push(item);
      }
      setGroupedOfferList(groupedByRoomName);
      console.log(groupedByRoomName);
    });
  }

  useEffect(() => {
    reqGetFullTextSearchProperty(String(slug));
  }, []);

  const onChange = (key: string) => {
    console.log(key);
  };

  const HotelInformation = () => (
    <div className="mb-[2rem]">
      {deviceType === "mobile" && (
        <div id="catalog-header-desktop" className="mb-[1rem]">
          <div className="align-baseline">
            <span className="font-medium pr-1 text-xl leading-7 tracking-[0]">
              {propertyInformation.name}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-row">
        <div
          className={`flex flex-row ${
            deviceType === "mobile"
              ? "justify-start mr-[1rem]"
              : "w-4/12 justify-center"
          }`}
        >
          <img
            id="hero-image"
            className="w-[90px] h-[90px] lg:w-[168px] lg:h-[168px] rounded-full object-cover object-[50%_50%]"
            src={contentPropertyInformationDetails?.catalog.hero_image_url.lg}
            alt={propertyInformation.name}
          />
        </div>
        <div
          id="catalog-data"
          className={`flex-grow-1 ${deviceType === "mobile" ? "" : " w-8/12"}`}
        >
          {deviceType === "desktop" && (
            <div id="catalog-header-desktop">
              <div className="align-baseline">
                <span className="font-medium pr-1 text-xl leading-7 tracking-[0]">
                  {/* {JSON.stringify(propertyInformation)} */}
                  {propertyInformation.name}
                </span>
              </div>
            </div>
          )}
          <div id="catalog-body">
            <div className="text-[rgba(0,0,0,0.6)] py-1 text-[0.9375rem] leading-[1.4375rem] font-normal tracking-[0] capitalize">
              {contentPropertyInformationDetails?.type}
            </div>
            <div className="pb-1 lg:text-[0.9375rem] text-sm leading-[1.325rem] lg:leading-[1.4375rem] font-normal tracking-[0]">
              {contentPropertyInformationDetails?.address_line === undefined
                ? ""
                : `${contentPropertyInformationDetails?.address_line}, ${contentPropertyInformationDetails?.name_suffix}`}
            </div>
          </div>
          <div
            id="review-desktop"
            className="d-flex align-center py-1 leading-[1.4375rem] font-normal tracking-[0]"
          >
            <span className="h-[1rem]">
              <Progress
                type="circle"
                percent={
                  contentPropertyInformationDetails?.catalog.review_rating ===
                  undefined
                    ? 0
                    : contentPropertyInformationDetails?.catalog.review_rating
                }
                size={34}
                strokeWidth={9}
                format={(percent) => `${percent}`}
              />
            </span>
            <span className="pl-2">Excellent ·&nbsp;</span>
            <span>
              {contentPropertyInformationDetails?.catalog.review_count} reviews
            </span>
          </div>
          {deviceType === "desktop" && (
            <div id="headline-desktop" className="pt-1">
              <span className="text-body-2">
                Business, romantic, city hotel with spa, shopping facilities in
                Jakarta (Senayan)
              </span>
            </div>
          )}
        </div>
      </div>

      {deviceType === "mobile" && (
        <div id="headline-mobile" className="pt-1">
          <span className="text-body-2">
            Business, romantic, city hotel with spa, shopping facilities in
            Jakarta (Senayan)
          </span>
        </div>
      )}
    </div>
  );

  const FreeBreakfastBtn = () => (
    <button
      onClick={() => setFilterFreeBreakfast(true)}
      className={`flex flex-row items-center gap-x-[1rem] border rounded-full px-[0.75rem] py-[0.25rem]`}
    >
      <IconBreakfast fill="#000" height={16} width={16} /> Free Breakfast
    </button>
  );

  const CountFilterBtn = () => (
    <button
      onClick={() => {
        setFilterFreeBreakfast(false);
        setFilterFreeCancellation(false);
      }}
      className="relative flex flex-row items-center gap-x-[1rem] border rounded-full px-[0.75rem] py-[0.25rem] w-[7rem] text-[#167cff] border-[#167cff]"
    >
      Clear All{" "}
      <span className="absolute bg-[#167cff] text-white px-2 py-1 text-xs font-bold rounded-full right-2">
        {filterFreeBreakfast === true && filterFreeCancellation === true
          ? 2
          : filterFreeBreakfast === false && filterFreeCancellation === true
          ? 1
          : filterFreeBreakfast === true && filterFreeCancellation === false
          ? 1
          : 0}
      </span>
    </button>
  );

  const FreeCancellationBtn = () => (
    <button
      onClick={() => setFilterFreeCancellation(true)}
      className="flex flex-row items-center gap-x-[1rem] border rounded-full px-[0.75rem] py-[0.25rem]"
    >
      <IconCreditcard fill="#000" height={16} width={16} /> Free Cancellation
    </button>
  );

  const FilterRooms = () => (
    <div className="lg:flex lg:flex-row lg:items-center lg:justify-center w-full px-[1rem]">
      <div className="w-full lg:w-[8.5rem] flex flex-row items-center gap-[0.5rem]">
        <IconFilter fill="#000" height={18} width={18} />
        <p className="text-[0.9375rem] leading-[1.5rem] font-medium">
          Filter rooms by
        </p>
      </div>
      <div className="flex flex-row items-center gap-[0.5rem] mt-[1rem] lg:mt-0">
        {(filterFreeBreakfast === true || filterFreeCancellation === true) && (
          <CountFilterBtn />
        )}
        <FreeBreakfastBtn />
        <FreeCancellationBtn />
      </div>
    </div>
  );

  const RoomViewMobile = () => (
    <>
      {propertyAvailability !== undefined ? (
        propertyAvailability.offer_list.map((item: any) => (
          <div className="mt-[1rem]">
            <Affix
              offsetTop={65}
              style={{
                position: "absolute",
                left: 0,
                width: "100vw",
                zIndex: 999,
              }}
            >
              <div className="bg-white p-[1rem] border-b-[0.0125rem] border-gray-300">
                <p className="font-medium text-lg leading-[1.625rem]">
                  {item.room_name}
                </p>
                <div className="flex flex-row items-center gap-[0.75rem]">
                  <div className="flex flex-row items-center gap-[0.5rem]">
                    <IconBed height={18} width={18} fill="rgba(0,0,0,.54)" />
                    <p>{item.room_bed_groups}</p>
                  </div>
                  <div className="flex flex-row items-center gap-[0.5rem]">
                    <IconFloorsize
                      height={18}
                      width={18}
                      fill="rgba(0,0,0,.54)"
                    />
                    <p>
                      {item.room_size_sqm}m<sup>2</sup>
                    </p>
                  </div>
                </div>
              </div>
            </Affix>
            <div className="pt-[5rem]">
              <div className="flex flex-row relative">
                <div>
                  <img
                    src={item.room_images[0].size_sm}
                    className="w-[321px] h-[214px] object-cover"
                  />
                </div>
                <div className="grid-rows-3">
                  <img
                    src={item.room_images[1].size_sm}
                    className="h-[70px] w-[107px] border border-white object-cover"
                  />
                  <img
                    src={item.room_images[2].size_sm}
                    className="h-[70px] w-[107px] border border-white object-cover"
                  />
                  <img
                    src={item.room_images[3].size_sm}
                    className="h-[70px] w-[107px] border border-white object-cover"
                  />
                </div>
                <div className="absolute bottom-0 m-[1.5rem] flex flex-row gap-[0.5rem] bg-white px-[0.5rem] py-[0.25rem] rounded-lg">
                  <IconGrid fill="#000" />
                  <p className="font-medium">See Photos</p>
                </div>
              </div>
            </div>
            <div className="-mt-[0.5rem] z-40 relative bg-white flex flex-col w-full p-[1rem] gap-[0.5rem]">
              {item.meal_plan_description === "" ? (
                <div className="flex flex-row gap-[0.5rem]">
                  <IconStrikefreebreakfast fill="#000" /> Without Breakfast
                </div>
              ) : (
                <div className="flex flex-row gap-[0.5rem]">
                  <IconStrikefreebreakfast fill="#000" /> Free Breakfast
                </div>
              )}

              {item.cancel_policy_description === "Non-refundable" ? (
                <div className="flex flex-row gap-[0.5rem]">
                  <IconStrikecreditcard fill="#e82127" />
                  <p className="text-[#e82127]">Non-refundable</p>
                </div>
              ) : (
                <div className="flex flex-row gap-[0.5rem]">
                  <IconCreditcard fill="#3d944e" width={16} height={16} />
                  <p className="text-[#3d944e]">
                    {item.cancel_policy_description}
                  </p>
                </div>
              )}
            </div>
            <div className="p-[1rem]">
              <div className="flex flex-row w-full">
                <div className="w-8/12">
                  <div className="grid grid-cols-1 gap-[0.25rem]">
                    <div className="rounded bg-[#f44336] px-[0.5rem] w-[8.75rem]">
                      <p className="text-white text-center">
                        SAVE{" "}
                        <b>
                          {Math.floor(
                            ((item.pricing_data.strikethrough_rate_nightly -
                              item.pricing_data.rate_nightly) /
                              item.pricing_data.strikethrough_rate_nightly) *
                              100
                          ) === 0
                            ? (
                                ((item.pricing_data.strikethrough_rate_nightly -
                                  item.pricing_data.rate_nightly) /
                                  item.pricing_data
                                    .strikethrough_rate_nightly) *
                                100
                              ).toFixed(2)
                            : Math.floor(
                                ((item.pricing_data.strikethrough_rate_nightly -
                                  item.pricing_data.rate_nightly) /
                                  item.pricing_data
                                    .strikethrough_rate_nightly) *
                                  100
                              )}
                          %
                        </b>{" "}
                        TODAY!
                      </p>
                    </div>
                    <p className="text-gray-500 line-through">
                      {RupiahConverter(
                        Number(item.pricing_data.strikethrough_rate_nightly)
                      )}
                    </p>
                    <div className="flex gap-x-[0.25rem]">
                      <p className="text-gray-950">
                        {RupiahConverter(
                          Number(item.pricing_data.rate_nightly)
                        )}{" "}
                        / night
                      </p>
                      <IconAsterisk fill="#b9b9b9" height={8} width={8} />
                    </div>
                    <p className="text-gray-500">after tax & fees</p>
                    <div className="flex flex-row items-center gap-x-[0.25rem]">
                      <IconAsterisk fill="#b9b9b9" height={8} width={8} />
                      <p className="text-gray-400">
                        Member-only price, valid in app only
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-4/12 flex items-end justify-end">
                  <div className="flex flex-col gap-[0.5rem]">
                    <button className="bg-[#1a73e8] rounded px-[1rem] h-[2rem] text-white font-medium">
                      Book Now
                    </button>
                    <div className="flex flex-row gap-x-[0.25rem] items-center">
                      <IconStar width={12} height={12} fill="#1a73e8" />
                      <p className="text-[#1a73e8]">
                        Collect {item.pricing_data.wisata_point} points
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <>empty</>
      )}
    </>
  );

  const RoomViewDesktop = () => (
    <>
      {groupedOfferList !== undefined ? (
        Object.keys(groupedOfferList).map((roomName) => (
          <div className="flex flex-row gap-x-[1rem] mb-[2.5rem]">
            <div className="rounded-lg flex flex-col hover:cursor-pointer">
              <div className="relative">
                <img
                  src={groupedOfferList[roomName][0].room_images[0].size_sm}
                  className="max-w-[328px] rounded-t-xl border border-white"
                />
                <div className="absolute bottom-0 m-[1rem] flex flex-row items-center gap-[0.25rem] bg-white px-[0.25rem] rounded-md h-[24px]">
                  <IconGrid fill="#000" height={16} width={16} />
                  <p className="font-medium text-[12px] leading-[1rem]">
                    See Photos
                  </p>
                </div>
              </div>
              <div className="flex flex-row max-w-[328px] [&>*:first-child]:rounded-bl-xl [&>*:first-child]:border-l-0 [&>*:last-child]:rounded-br-xl [&>*:last-child]:border-r-0">
                <img
                  src={groupedOfferList[roomName][0].room_images[1].size_sm}
                  className="w-1/3 max-w-[108px] max-h-[81px] border border-white"
                />
                <img
                  src={groupedOfferList[roomName][0].room_images[2].size_sm}
                  className="w-1/3 max-w-[108px] max-h-[81px] border border-white"
                />
                <img
                  src={groupedOfferList[roomName][0].room_images[3].size_sm}
                  className="w-1/3 max-w-[108px] max-h-[81px] border border-white"
                />
              </div>
            </div>
            <div className="rounded-lg border border-gray-300 min-w-[656px]">
              <div className="rounded-t-lg border-b border-gray-300 p-[1rem]">
                <p className="font-medium text-lg leading-[1.625rem]">
                  {groupedOfferList[roomName][0].room_name}
                </p>
                <div className="flex flex-row items-center gap-[0.75rem]">
                  <div className="flex flex-row items-center gap-[0.5rem]">
                    <IconBed height={18} width={18} fill="rgba(0,0,0,.54)" />
                    <p>{groupedOfferList[roomName][0].room_bed_groups}</p>
                  </div>
                  <div className="flex flex-row items-center gap-[0.5rem]">
                    <IconFloorsize
                      height={18}
                      width={18}
                      fill="rgba(0,0,0,.54)"
                    />
                    <p>
                      {groupedOfferList[roomName][0].room_size_sqm}m<sup>2</sup>
                    </p>
                  </div>
                </div>
              </div>
              {groupedOfferList[roomName].map((item: any) => (
                <>
                  <div className="border-t border-gray-300 p-[1rem]">
                    {item.meal_plan_description === "" ? (
                      <div className="flex flex-row items-center gap-[0.5rem]">
                        <IconStrikefreebreakfast
                          fill="#000"
                          width={16}
                          height={16}
                        />
                        Without Breakfast
                      </div>
                    ) : (
                      <div className="flex flex-row items-center gap-[0.5rem]">
                        <IconStrikefreebreakfast
                          fill="#000"
                          width={16}
                          height={16}
                        />
                        Free Breakfast
                      </div>
                    )}

                    {item.cancel_policy_description === "Non-refundable" ? (
                      <div className="flex flex-row items-center gap-[0.5rem]">
                        <IconStrikecreditcard
                          fill="#e82127"
                          width={16}
                          height={16}
                        />
                        <p className="text-[#e82127]">Non-refundable</p>
                      </div>
                    ) : (
                      <div className="flex flex-row items-center gap-[0.5rem]">
                        <IconCreditcard fill="#3d944e" width={16} height={16} />
                        <p className="text-[#3d944e]">
                          {item.cancel_policy_description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-[1rem]">
                    <div className="flex flex-row w-full">
                      <div className="w-8/12">
                        <div className="grid grid-cols-1 gap-[0.25rem]">
                          <div className="rounded bg-[#f44336] px-[0.5rem] w-[8.75rem]">
                            <p className="text-white text-center">
                              SAVE{" "}
                              <b>
                                {Math.floor(
                                  ((item.pricing_data
                                    .strikethrough_rate_nightly -
                                    item.pricing_data.rate_nightly) /
                                    item.pricing_data
                                      .strikethrough_rate_nightly) *
                                    100
                                ) === 0
                                  ? (
                                      ((item.pricing_data
                                        .strikethrough_rate_nightly -
                                        item.pricing_data.rate_nightly) /
                                        item.pricing_data
                                          .strikethrough_rate_nightly) *
                                      100
                                    ).toFixed(2)
                                  : Math.floor(
                                      ((item.pricing_data
                                        .strikethrough_rate_nightly -
                                        item.pricing_data.rate_nightly) /
                                        item.pricing_data
                                          .strikethrough_rate_nightly) *
                                        100
                                    )}
                                %
                              </b>{" "}
                              TODAY!
                            </p>
                          </div>
                          <p className="text-gray-500 line-through">
                            {RupiahConverter(
                              Number(
                                item.pricing_data.strikethrough_rate_nightly
                              )
                            )}
                          </p>
                          <div className="flex gap-x-[0.25rem]">
                            <p className="text-gray-950">
                              {RupiahConverter(
                                Number(item.pricing_data.rate_nightly)
                              )}{" "}
                              / night
                            </p>
                            <IconAsterisk fill="#b9b9b9" height={8} width={8} />
                          </div>
                          <p className="text-gray-500">after tax & fees</p>
                          <div className="flex flex-row items-center gap-x-[0.25rem]">
                            <IconAsterisk fill="#b9b9b9" height={8} width={8} />
                            <p className="text-gray-400">
                              Member-only price, valid in app only
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-4/12 flex items-end justify-end">
                        <div className="flex flex-col gap-[0.5rem]">
                          <button className="bg-[#1a73e8] rounded px-[1rem] h-[2rem] text-white font-medium">
                            Book Now
                          </button>
                          <div className="flex flex-row gap-x-[0.25rem] items-center">
                            <IconStar width={12} height={12} fill="#1a73e8" />
                            <p className="text-[#1a73e8]">
                              Collect {item.pricing_data.wisata_point} points
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center font-medium text-green-900">Loading...</p>
      )}
    </>
  );

  const contentTab1: ReactNode = (
    <>
      <FilterRooms />
      <div className={`${deviceType === "desktop" && "mt-[2.5rem]"}`}>
        {deviceType === "desktop" ? <RoomViewDesktop /> : <RoomViewMobile />}
      </div>
    </>
  );

  const iconContentTab1: ReactNode = (
    <div className="flex flex-row items-center">
      <IconTag fill="#167cff" />
      {deviceType === "desktop" && (
        <p className="text-xs leading-[1.2rem] ml-[0.25rem] font-medium">
          DEALS
        </p>
      )}
    </div>
  );

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: iconContentTab1,
      children: contentTab1,
    },
  ];

  return (
    <div className="mt-[5rem]">
      <HotelInformation />
      {deviceType === "desktop" ? (
        <Tabs
          className="desktop-tab"
          centered
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      ) : (
        <Tabs
          className="mobile-tab"
          size="large"
          centered
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ position: "absolute", left: "0px" }}
        />
      )}
    </div>
  );
}

export default DetailStay;
