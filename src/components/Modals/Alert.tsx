import React from "react";
import SuccessAlert from "../../assets/success_alert.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  btnText: string;
}

const Alert: React.FC<ModalProps> = ({ isOpen, onClose, btnText = "OK" }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-monochrome-800 rounded-lg shadow-lg p-6 max-w-[31rem]">
          <div className="p-3 flex flex-col items-center justify-center text-center">
            <img src={SuccessAlert} width={230} className="mb-3" />
            <div className="my-3">
              <p className="text-2xl font-bold">Registrasi Berhasil!</p>
              <p className="text-sm font-normal">
                Selamat datang di Lister, silakan melanjutkan langkah pada menu
                dashboard, semoga harimu menyenangkan!
              </p>
            </div>
            <button
              type="submit"
              className="rounded-lg my-5 p-2 font-bold w-full bg-red-500"
              onClick={onClose}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Alert;
