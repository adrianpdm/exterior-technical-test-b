import { Link } from "react-router-dom";
import { IconWhatsapp } from "../icons";

interface ButtonProps {
  isOpenNewTab?: boolean;
  fullWidth?: boolean;
  whatsapp: string;
  text?: string;
}

const WhatsappCallout: React.FC<ButtonProps> = ({
  isOpenNewTab = true,
  fullWidth = false,
  whatsapp,
  text = "Hubungi CS",
}) => {
  return (
    <Link
      to={`https://api.whatsapp.com/send/?phone=${whatsapp}&text=Hi+Lister%0A%0AAkademik,%0A%0Asaya%0A%0Amenemui%0A%0Akesulitan%0A%0Adalam%0A%0Amengisi%0A%0A&type=phone_number&app_absent=0`}
      target={isOpenNewTab ? "_blank" : "_self"}
      className={`flex justify-end items-center ${
        fullWidth ? "w-full" : "w-[12.5rem]"
      }`}
    >
      <button
        className={`flex justify-center items-center rounded-lg h-[2.5rem] bg-allurared-600 font-bold text-[0.875rem] py-[0.75rem] px-[1rem] hover:bg-[#67141B] ${
          fullWidth ? "w-full" : "w-[12.5rem]"
        }`}
      >
        <p className="mr-[0.75rem] text-[0.875rem] leading-[1.5rem]">{text}</p>
        <IconWhatsapp />
      </button>
    </Link>
  );
};

export default WhatsappCallout;
