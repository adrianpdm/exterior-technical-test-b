import {
  IconFlagSaudiarabia,
  IconFlagUK,
  IconFlagGermany,
} from "../../components/icons";

function PurchasedClass() {
  return (
    <div className="p-4 my-3 w-100 bg-monochrome-600 rounded-lg">
      <div className="flex row justify-between items-center py-2 pb-3 my-2">
        <div className="flex items-center">
          <IconFlagUK width={32} height={32} />
          <div className="ml-3">
            <p className="text-sm font-bold">Bahasa Inggris</p>
            <p className="text-sm font-normal">
              Bahasa Inggris Bisnis - Ultimate
            </p>
          </div>
        </div>
        <span>
          <p className="font-bold text-orange-500 lg:text-[24px]">70%</p>
        </span>
      </div>
    </div>
  );
}

export default PurchasedClass;
