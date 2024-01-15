import { Link } from "react-router-dom";
import { IconWhatsapp } from "../icons";

const waAkademik = import.meta.env.VITE_WA_AKADEMIK;
const waSales = import.meta.env.VITE_WA_SALES;

function WhatsappFloating() {
  return (
    <Link
      target="_blank"
      to={`https://api.whatsapp.com/send?phone=${
        localStorage.getItem("token")
          ? localStorage.getItem("role") === "student"
            ? waSales
            : waAkademik
          : waSales
      }&text=Saya%20mau%20bertanya%20mengenai%20...%20`}
      className="fixed z-30 right-[0.25rem] bottom-[1rem]"
    >
      <button
        className="rounded-full p-2 text-white shadow-md bg-[#46B753]"
        type="button"
      >
        <IconWhatsapp width={28} height={28} />
      </button>
    </Link>
  );
}

export default WhatsappFloating;
