import {
  useNavigate,
  useSearchParams,
  useParams,
  Link,
} from "react-router-dom";
import { DesktopChecker, RupiahConverter } from "../helper";
// import { useCourseStore, useLanguageStore, useOrderStore } from "../../store";
import { ReactNode, useEffect, useState } from "react";
import { getCourseDetail, getLanguageById } from "../API";
import Cookies from "js-cookie";
import { Affix, Progress, Tabs } from "antd";
import { FilterOutlined, TagOutlined } from "@ant-design/icons";

import type { TabsProps } from "antd";
import {
  IconBed,
  IconBreakfast,
  IconCreditcard,
  IconFloorsize,
  IconGrid,
  IconStrikecreditcard,
  IconStrikefreebreakfast,
  IconTag,
} from "../components/icons";
import IconFilter from "../components/icons/icon-filter";

function DetailStay() {
  const { slug } = useParams();
  const [queryParameters] = useSearchParams();
  const [quickbuyState, setQuickbuyState] = useState<any>([]);
  const [isSticky, setIsSticky] = useState(false);
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
  const navigate = useNavigate();
  const deviceType = DesktopChecker();

  console.log(deviceType);

  const onChange = (key: string) => {
    console.log(key);
  };

  const FreeBreakfastBtn = () => (
    <button className="flex flex-row items-center gap-x-[1rem] border rounded-full px-[0.75rem] py-[0.25rem]">
      <IconBreakfast fill="#000" height={16} width={16} /> Free Breakfast
    </button>
  );

  const FreeCancellationBtn = () => (
    <button className="flex flex-row items-center gap-x-[1rem] border rounded-full px-[0.75rem] py-[0.25rem]">
      <IconCreditcard fill="#000" height={16} width={16} /> Free Cancellation
    </button>
  );

  const RoomPhotos = () => <></>;

  const FilterRooms = () => (
    <div className="lg:flex lg:flex-row lg:items-center lg:justify-center w-full px-[1rem]">
      <div className="w-full lg:w-[8.5rem] flex flex-row items-center gap-[0.5rem]">
        <IconFilter fill="#000" height={18} width={18} />
        <p className="text-[0.9375rem] leading-[1.5rem] font-medium">
          Filter rooms by
        </p>
      </div>
      <div className="flex flex-row items-center gap-[0.5rem] mt-[1rem] lg:mt-0">
        <FreeBreakfastBtn />
        <FreeCancellationBtn />
      </div>
    </div>
  );

  const Room = () => (
    <div className="mt-[1rem]">
      <Affix
        offsetTop={65}
        style={{ position: "absolute", left: 0, width: "100vw", zIndex: 999 }}
      >
        <div className="bg-white p-[1rem] border-b-[0.0125rem] border-gray-500">
          <p className="font-medium text-lg leading-[1.625rem]">
            Deluxe Room, 1 King Bed
          </p>
          <div className="flex flex-row items-center gap-[0.75rem]">
            <div className="flex flex-row items-center gap-[0.5rem]">
              <IconBed height={18} width={18} fill="rgba(0,0,0,.54)" />
              <p>1 King Bed</p>
            </div>
            <div className="flex flex-row items-center gap-[0.5rem]">
              <IconFloorsize height={18} width={18} fill="rgba(0,0,0,.54)" />
              <p>
                42m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </Affix>
      <div className="pt-[5rem]">
        <div className="flex flex-row relative">
          <div>
            <img
              src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg"
              className="w-[321px] h-[214px] object-cover"
            />
          </div>
          <div className="grid-rows-3">
            <img
              src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg"
              className="h-[70px] w-[107px] border border-white object-cover"
            />
            <img
              src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg"
              className="h-[70px] w-[107px] border border-white object-cover"
            />
            <img
              src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg"
              className="h-[70px] w-[107px] border border-white object-cover"
            />
          </div>
          <div className="absolute bottom-0 m-[1.5rem] flex flex-row gap-[0.5rem] bg-white px-[0.5rem] py-[0.25rem] rounded-lg">
            <IconGrid fill="#000" />
            <p className="font-medium">See Photos</p>
          </div>
        </div>
      </div>
      <div className="-mt-[0.5rem] z-40 relative bg-white flex flex-col w-full p-[1rem]">
        <div className="flex flex-row gap-[0.5rem]">
          <IconStrikefreebreakfast fill="#000" /> Without Breakfast
        </div>
        <div className="flex flex-row gap-[0.5rem]">
          <IconStrikecreditcard fill="#000" /> Non-refundable
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis
        risus at laoreet commodo. Quisque pretium neque sit amet auctor
        eleifend. Aliquam erat volutpat. Curabitur sollicitudin velit eu turpis
        pretium faucibus. Ut tristique, orci eget luctus cursus, turpis orci
        sagittis eros, nec congue dui augue non neque. Donec mi sapien, rhoncus
        a blandit sit amet, viverra eget nisl. Cras venenatis, lacus sit amet
        molestie ornare, ligula dolor sodales lorem, at interdum felis tellus in
        magna. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Pellentesque hendrerit cursus semper.
        Nam pretium sem ipsum, quis sodales quam vulputate quis. Donec vitae
        ipsum odio. Cras volutpat mi convallis nisl vestibulum, sed sagittis
        lectus interdum. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Ut condimentum quam ac est maximus
        rhoncus eget et ante. Sed volutpat purus in sem varius placerat. Sed
        rutrum blandit ex tincidunt molestie. Duis ullamcorper eleifend leo
        fringilla convallis. Ut eu tortor non turpis vehicula placerat. Cras
        volutpat consectetur lacus, nec commodo justo condimentum sed.
        Vestibulum pretium fermentum sollicitudin. Donec vestibulum, erat vitae
        aliquet finibus, sem velit mattis purus, lobortis commodo mauris diam
        non magna. Phasellus non dui feugiat, blandit quam et, pellentesque
        lacus. Cras a rutrum urna. Nulla dictum eros vel neque condimentum, a
        interdum felis vehicula. Praesent enim mauris, congue vel ipsum at,
        laoreet porta augue. Nam scelerisque, purus sit amet congue rhoncus,
        ante augue rutrum augue, quis ultrices turpis turpis rhoncus ligula.
        Cras consectetur convallis nisi, id pharetra odio eleifend vitae. Mauris
        ornare dui et nisl venenatis, quis pharetra orci tempor. Proin cursus
        nisi id dolor porttitor, quis volutpat velit tristique. Morbi vel
        convallis lectus. Nam et tincidunt ipsum. In at metus quis nunc eleifend
        gravida. Praesent neque nisl, egestas sed libero nec, hendrerit mollis
        est. Donec ante arcu, rutrum at orci in, sagittis luctus enim. Nunc
        sagittis libero eu vehicula mattis. Nulla tincidunt, sem a pretium
        vehicula, velit ligula hendrerit ipsum, in placerat velit odio nec
        metus. Nullam nec quam sapien. Nulla pharetra leo nec iaculis ornare.
        Proin feugiat malesuada nisi, quis pretium sapien accumsan eu. Maecenas
        id imperdiet est. Sed lobortis ex quis pretium varius. Morbi sapien
        purus, ornare nec dui eu, tincidunt imperdiet ligula. Nunc fringilla
        imperdiet placerat. Aenean lobortis mauris non nulla bibendum porta.
        Duis lacinia elementum dolor, rhoncus hendrerit justo elementum nec.
        Curabitur a lectus sem. Aliquam non tempus lectus. Phasellus in
        pellentesque elit. Curabitur luctus massa a nunc tristique, ut porttitor
        arcu fermentum. Mauris nec vestibulum lorem. Mauris vitae leo eu libero
        consequat fermentum. Fusce eros elit, interdum nec ultricies sit amet,
        consequat et velit. Sed in tellus neque. Integer maximus nunc at erat
        pharetra suscipit. Vivamus neque purus, maximus id tristique vel, rutrum
        vitae risus. Sed et est condimentum, bibendum nibh sed, tincidunt massa.
        Fusce a ligula sit amet lectus euismod commodo nec non dui. Donec neque
        magna, pretium non ex eu, imperdiet dictum purus. Nulla consectetur
        nulla ut tortor fringilla, ac molestie leo congue. Donec elementum neque
        magna. Suspendisse a rutrum velit, eu cursus mi.
      </p>
    </div>
  );

  const contentTab1: ReactNode = (
    <>
      <FilterRooms />

      <Room />
    </>
  );

  const iconContentTab1: ReactNode = (
    <div className="flex flex-row">
      <IconTag fill="#167cff" />
      {deviceType === "desktop" && (
        <p className="text-xs leading-[1.2rem] -ml-[0.25rem] font-medium">
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-[5rem]">
      <div className="flex flex-row mb-[1.5rem]">
        <div className="flex flex-row justify-center w-4/12">
          <img
            id="hero-image"
            className="w-[5rem] h-[5rem] lg:w-[168px] lg:h-[168px] rounded-full object-cover object-[50%_50%]"
            src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/824ab5e0_b.jpg"
            alt="Rounded avatar"
          />
        </div>
        <div id="catalog-data" className="flex-grow-1 ml-n2 ml-sm-0 w-8/12">
          <div id="catalog-header-desktop">
            <div className="align-baseline">
              <span className="font-medium pr-1 text-xl leading-7 tracking-[0]">
                The Langham, Jakarta
              </span>
            </div>
          </div>
          <div id="catalog-body">
            <div className="text-[rgba(0,0,0,0.6)] py-1 text-[0.9375rem] leading-[1.4375rem] font-normal tracking-[0]">
              Hotel
            </div>
            <div className="pb-1 text-[0.9375rem] leading-[1.4375rem] font-normal tracking-[0]">
              District 8 SCBD Lot 28, Jakarta, Indonesia
            </div>
          </div>
          <div
            id="review-desktop"
            className="d-flex align-center py-1 leading-[1.4375rem] font-normal tracking-[0]"
          >
            <span className="h-[1rem]">
              <Progress
                type="circle"
                percent={94}
                size={34}
                strokeWidth={9}
                format={(percent) => `${percent}`}
              />
            </span>
            <span className="pl-2">Excellent ·&nbsp;</span>
            <span> 17 reviews</span>
          </div>
          <div id="headline-desktop" className="pt-1">
            <span className="text-body-2">
              Business, romantic, city hotel with spa, shopping facilities in
              Jakarta (Senayan)
            </span>
          </div>
        </div>
      </div>
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
