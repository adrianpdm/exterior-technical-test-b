import { Link } from "react-router-dom";
import {
  IconTrophyCircle,
  IconArrowRight,
  IconBook,
  IconFlagUK,
} from "../../components/icons";

function BestSeller() {
  return (
    <div className="p-4 mb-3 bg-monochrome-700 rounded-lg">
      <label className="text-monochrome-200 font-bold text-sm flex items-center">
        <IconTrophyCircle /> <p className="ml-3">Best Seller</p>
      </label>
      <hr className="text-monochrome-500 border-t-2 border-monochrome-500 mt-4 mb-2" />
      <Link to="/choosing-program?id_category=8&id_lang=21">
        <div className="flex row justify-between items-center border-monochrome-500 py-2 pb-3 my-2">
          <div className="flex items-center">
            <IconBook width={24} fill="#A1A1A1" />
            <div className="ml-3">
              <p className="text-sm font-bold">IELTS Prep</p>
              <p className="text-sm font-normal">1500 Penjualan</p>
            </div>
          </div>
          <IconArrowRight fill="#A1A1A1" />
        </div>
      </Link>
      {/* <Link to="/choosing-program?id_category=8&id_lang=21">
        <div className="flex row justify-between items-center border-b-2 border-monochrome-500 py-2 pb-3 my-2">
          <div className="flex items-center">
            <IconBook width={24} fill="#A1A1A1" />
            <div className="ml-3">
              <p className="text-sm font-bold">TPA</p>
              <p className="text-sm font-normal">600 Penjualan</p>
            </div>
          </div>
          <IconArrowRight fill="#A1A1A1" />
        </div>
      </Link> */}
      {/* <Link to="/choosing-program?id_category=8&id_lang=21">
        <div className="flex row justify-between items-center border-monochrome-500 p-2 mt-2">
          <div className="flex items-center">
            <IconFlagUK />
            <div className="ml-3">
              <p className="text-sm font-bold">Academic English</p>
              <p className="text-sm font-normal">250 Penjualan</p>
            </div>
          </div>
          <IconArrowRight fill="#A1A1A1" />
        </div>
      </Link> */}
    </div>
  );
}

export default BestSeller;
