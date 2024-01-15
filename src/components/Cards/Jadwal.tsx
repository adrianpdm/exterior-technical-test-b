import { IconClockYellow, IconFillCircle } from "../../components/icons";

function Jadwal() {
  return (
    <div className="p-4 mb-3 bg-monochrome-700 rounded-lg">
      <label className="text-monochrome-200 font-bold text-sm flex items-center">
        <IconClockYellow /> <p className="ml-3">Jadwal</p>
      </label>
      <hr className="text-monochrome-500 border-t-2 border-monochrome-500 mt-4 mb-2" />
      <div className="flex row border-b-2 border-monochrome-500 p-2 pb-3 my-2">
        <IconFillCircle width={14} fill="#A1A1A1" />
        <div className="ml-3">
          <p className="text-sm">Academic English</p>
          <p className="text-sm">17:00-18:00</p>
        </div>
      </div>
      <div className="flex row border-b-2 border-monochrome-500 p-2 pb-3 my-2">
        <IconFillCircle width={14} fill="#A1A1A1" />
        <div className="ml-3">
          <p className="text-sm">Business English</p>
          <p className="text-sm">20:00-21:00</p>
        </div>
      </div>
      <div className="flex row p-2 pb-3 my-2">
        <IconFillCircle width={14} fill="#A1A1A1" />
        <div className="ml-3">
          <p className="text-sm">Bahasa Jerman All Skill</p>
          <p className="text-sm">21:00-22:00</p>
        </div>
      </div>
    </div>
  );
}

export default Jadwal;
