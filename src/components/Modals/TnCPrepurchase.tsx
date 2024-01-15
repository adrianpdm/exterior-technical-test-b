import React from "react";
import { IconCloseCircle } from "../icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const TnCPrepurchase: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-monochrome-800 rounded-lg shadow-lg p-6 max-w-[682px]">
          <div className="flex justify-between">
            <h1 className="modal-title text-[32px] font-bold">
              Syarat & Ketentuan
            </h1>
            <button className="" onClick={onClose}>
              <IconCloseCircle width={30} height={30} fill={"#A1A1A1"} />
            </button>
          </div>
          <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-5" />
          <div className="modal-body my-4 text-monochrome-100 font-normal overflow-y-scroll h-96 pr-1">
            <h2 className="text-[24px] font-bold mb-5">
              PERATURAN DAN PROSEDUR PERPINDAHAN KELAS ATAUPUN PROGRAM YANG
              TELAH BERJALAN
            </h2>
            <p>
              &nbsp;1. Prosedur Perpindahan kelas ataupun program yang telah
              berjalan <br />
              1.1. Perpindahan dari kelas Grup ke Privat <br />
              a. Siswa yang bersangkutan mengajuan perpindahan ke bagian
              Akademik Lister disertai dengan alasan perpindahan. <br />
              b. Tim Akademik akan memproses dan melakukan pengecekan terharap
              meeting yang telah berjalan, maksimal dalam 3 hari kerja. <br />
              c. Jika pengajuan telah disetujui, maka siswa yang bersangkutan
              harus menunggu maksimal 7 hari kerja untuk mendapatkan tutor yang
              baru. <br />
              d. Jika siswa telah mendapatkan tutor maka status siswa tersebut
              menjadi siswa kelas privat dan harus mengikuti aturan yang ada.{" "}
              <br />
              1.2. Perpindahan dari kelas Privat ke Grup <br />
              a. Siswa yang bersangkutan mengajuan perpindahan ke bagian
              Akademik Lister disertai dengan alasan perpindahan. <br />
              b. Tim Akademik akan memproses dan melakukan pengecekan terharap
              meeting yang telah berjalan, maksimal dalam 3 hari kerja. <br />
              c. Jika disetujui, siswa pemohon harus menunggu pembukaan kelas
              Grup baru yang terdekat. Kelas Grup dibuka pada tanggal 10 setiap
              bulannya dan hanya dibuka 1 kali dalam 1 bulan. <br />
              d. Jika siswa telah mendapatkan grup terbaru maka status siswa
              tersebut menjadi siswa kelas grup dan harus mengikuti aturan yang
              ada. <br />
              1.3. Perpindahan program dalam kelas Privat <br />
              a. Siswa yang bersangkutan mengajukan perpindahan ke bagian
              Akademik Lister disertai dengan alasan perpindahan. <br />
              b. Tim Akademik akan memproses dan melakukan pengecekan terhadap
              meeting yang telah berjalan, maksimal dalam 3 hari kerja. <br />
              c. Jika pengajuan diterima, siswa harus menunggu maksimal 7 hari
              kerja untuk mendapatkan tutor untuk program yang baru. <br />
              d. Jika siswa telah mendapatkan tutor baru maka siswa yang
              bersangkutan harus mematuhi aturan pembelajaran yang ada. <br />
              1.4. Perpindahan program dalam kelas Grup <br />
              a. Siswa yang bersangkutan mengajukan perpindahan ke bagian
              Akademik Lister disertai dengan alasan perpindahan. <br />
              b. Tim Akademik akan memproses dan melakukan pengecekan terhadap
              meeting yang telah berjalan, maksimal dalam 3 hari kerja. <br />
              c. Jika disetujui, siswa pemohon harus menunggu pembukaan kelas
              Grup baru yang terdekat. Kelas Grup dibuka pada tanggal 10 setiap
              bulannya dan hanya dibuka 1 kali dalam 1 bulan. <br />
              d. Jika siswa telah mendapatkan kelas grup yang dituju maka status
              siswa tersebut harus mengikuti aturan yang ada. <br />
              <br />
              2. Selisih biaya kursus. <br />
              Selisih biaya kursus yang dimaksud adalah biaya kursus yang
              tersisa setelah dikurangi kelas yang telah berjalan ditambah
              dengan biaya administrasi dari perpindahan sebesar Rp. 100.000 dan
              biaya kelas/kursus baru yang menjadi tujuan perpindahan. Selisih
              biaya yang harus dibayarkan ini akan disampaikan bersamaan dengan
              keterangan persetujuan pengajuan dari akademik. <br />
              <br />
              3. Pembayaran biaya kelas <br />
              Pihak pemohon harus membayarkan biaya-biaya yang telah disebutkan
              diatas sebelum kelas atau program dimulai. <br />
              <br />
              <br />
              <br />
              Tim Akademik Lister&nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TnCPrepurchase;
