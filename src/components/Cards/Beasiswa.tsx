import { Link } from "react-router-dom";
import beasiswaLogo from "../../assets/beasiswa.svg";

function Beasiswa() {
  return (
    <div className="bg-monochrome-600 p-3 text-center flex flex-col  justify-center items-center space-y-3 rounded-xl">
      <img src={beasiswaLogo} className="" alt="beasiswa" />
      <p className="font-bold text-sm">Melesat Lebih Jauh?</p>
      <p className="font-normal text-sm">
        Dapatkan informasi seputar beasiswa & jadikanlah mimpimu kenyataan!
      </p>
      <Link to="https://lister.co.id/blog/category/beasiswa/" target="_blank">
        <button className="py-2 px-5 bg-red-600 rounded-lg text-sm font-bold">
          Lihat Beasiswa
        </button>
      </Link>
    </div>
  );
}

export default Beasiswa;
