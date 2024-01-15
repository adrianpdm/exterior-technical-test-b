import React, { useEffect, useRef, useState } from "react";
import { IconArrowRight, IconCalendar } from "../icons";
import { Checkbox, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import useClickOutside from "../../hooks/useClickOutside";
import IllustrationImg from "../../assets/complete_profile_data_img.svg";
import {
  getDropdownOptionsKota,
  getDropdownOptionsPekerjaan,
  getDropdownOptionsPendidikan,
  getDropdownOptionsProvinsi,
  patchStudentProfile,
} from "../../API";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DropdownOptionPendidikan {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface DropdownOptionPekerjaan {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface DropdownOptionProvinsi {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface ProvinceItem {
  id: number;
  name: string;
}
interface DropdownOptionKota {
  id: number;
  province_id: number;
  name: string;
  province: ProvinceItem[];
}

const CheckboxGroup = Checkbox.Group;
const defaultCheckedList = [""];

const dummy_arr_reference_source = [
  "Google",
  "Twitter/X",
  "Event",
  "Facebook",
  "TIKTOK",
  "Youtube",
  "Instagram",
  "Email",
  "LinkedIn",
  "Rekomendasi teman/keluarga",
];

const CompleteProfileData: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [dropdownPendidikan, setDropdownPendidikan] = useState<
    DropdownOptionPendidikan[]
  >([]);
  const [dropdownPekerjaan, setDropdownPekerjaan] = useState<
    DropdownOptionPekerjaan[]
  >([]);
  const [dropdownProvinsi, setDropdownProvinsi] = useState<
    DropdownOptionProvinsi[]
  >([]);
  const [dropdownKota, setDropdownKota] = useState<DropdownOptionKota[]>([]);

  const [availableToSubmit, setAvailableToSubmit] = useState(false);
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const onChangeCheckbox = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  async function saveProfileData() {
    const studentFormData = {
      tanggal_lahir: birthDate,
      pendidikan: selectedPendidikanTerakhir,
      pekerjaan: selectedPekerjaan,
      institusi: institusi,
      provinsi: selectedProvinsi,
      kota: selectedKota,
      gender: gender,
      knowledge_channel: checkedList,
    };
    const response = await patchStudentProfile(studentFormData);
    if (response.data.code === "000") onClose();
  }

  const pendidikanTerakhirContainerRef = useRef<HTMLDivElement>(null);
  const pendidikanTerakhirRef = useRef<HTMLDivElement>(null);
  const [pendidikanTerakhir, setPendidikanTerakhir] = useState<string | null>(
    null
  );
  const [birthDate, setBirthDate] = useState<string>("");
  const [selectedPendidikanTerakhir, setSelectedPendidikanTerakhir] =
    useState<number>(0);
  const [selectedPekerjaan, setSelectedPekerjaan] = useState<string>("");
  const [selectedProvinsi, setSelectedProvinsi] = useState<number>(0);
  const [selectedKota, setSelectedKota] = useState<number>(0);
  const [institusi, setInstitusi] = useState<string>("");

  const togglePendidikanTerakhir = () => {
    const currentArrowElement = pendidikanTerakhirRef.current?.previousSibling
      ?.lastChild as HTMLElement;

    if (pendidikanTerakhirRef.current) {
      pendidikanTerakhirRef.current.classList.toggle("hidden");
      currentArrowElement.classList.toggle("rotate-[270deg]");
    }
  };

  const handleOptionPendidikanTerakhir = (
    id: Number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    const clickedElement = event.currentTarget.textContent;
    setPendidikanTerakhir(clickedElement);
    setSelectedPendidikanTerakhir(Number(id));
    togglePendidikanTerakhir();
  };

  const handleInputInstitusi = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstitusi(event.target.value);
  };

  const pekerjaanContainerRef = useRef<HTMLDivElement>(null);
  const pekerjaanRef = useRef<HTMLDivElement>(null);
  const [pekerjaan, setPekerjaan] = useState<string | null>(null);
  const [isInputPekerjaan, setIsInputPekerjaan] = useState(false);

  const togglePekerjaan = () => {
    setIsInputPekerjaan(false);
    const currentArrowElement = pekerjaanRef.current?.previousSibling
      ?.lastChild as HTMLElement;

    if (pekerjaanRef.current) {
      pekerjaanRef.current.classList.toggle("hidden");
      currentArrowElement.classList.toggle("rotate-[270deg]");
    }
  };

  const handleOptionPekerjaan = (
    isInputTextfield: boolean,
    event: React.MouseEvent<HTMLElement>,
    item: DropdownOptionPekerjaan | null
  ) => {
    event.stopPropagation();
    if (isInputTextfield) {
      const valuePekerjaan = (
        document.getElementById("inputPekerjaan") as HTMLInputElement
      )?.value;
      setSelectedPekerjaan(String(valuePekerjaan));
      setPekerjaan(String(valuePekerjaan));
      togglePekerjaan();
    } else {
      const clickedElement = event.currentTarget.textContent;
      setPekerjaan(clickedElement);
      setSelectedPekerjaan(String(clickedElement));
      if (item?.id === 25) {
        setIsInputPekerjaan(true);
      } else {
        togglePekerjaan();
        setIsInputPekerjaan(false);
      }
    }
  };

  const provinsiContainerRef = useRef<HTMLDivElement>(null);
  const provinsiRef = useRef<HTMLDivElement>(null);
  const [provinsi, setProvinsi] = useState<string | null>(null);

  const toggleProvinsi = () => {
    const currentArrowElement = provinsiRef.current?.previousSibling
      ?.lastChild as HTMLElement;

    if (provinsiRef.current) {
      provinsiRef.current.classList.toggle("hidden");
      currentArrowElement.classList.toggle("rotate-[270deg]");
    }
  };

  const handleOptionProvinsi = (
    id: number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    const clickedElement = event.currentTarget.textContent;
    setProvinsi(clickedElement);
    setSelectedProvinsi(Number(id));
    reqGetDropdownOptionsKota(Number(id));
    setKota("");
    toggleProvinsi();
  };

  const kotaContainerRef = useRef<HTMLDivElement>(null);
  const kotaRef = useRef<HTMLDivElement>(null);
  const [kota, setKota] = useState<string | null>(null);

  const toggleKota = () => {
    const currentArrowElement = kotaRef.current?.previousSibling
      ?.lastChild as HTMLElement;

    if (kotaRef.current) {
      kotaRef.current.classList.toggle("hidden");
      currentArrowElement.classList.toggle("rotate-[270deg]");
    }
  };

  const handleOptionKota = (
    id: number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    const clickedElement = event.currentTarget.textContent;
    setSelectedKota(Number(id));
    setKota(clickedElement);
    toggleKota();
  };

  const [gender, setGender] = useState<string>("");
  const handleGenderRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.currentTarget.value);
  };

  const handleInputBirthDate: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(date);
    setBirthDate(dateString);
  };

  useClickOutside(pendidikanTerakhirContainerRef, () => {
    if (
      pendidikanTerakhirRef.current &&
      !pendidikanTerakhirRef.current.classList.contains("hidden")
    ) {
      togglePendidikanTerakhir();
    }
  });

  useClickOutside(pekerjaanContainerRef, () => {
    if (
      pekerjaanRef.current &&
      !pekerjaanRef.current.classList.contains("hidden")
    ) {
      togglePekerjaan();
    }
  });

  useClickOutside(provinsiContainerRef, () => {
    if (
      provinsiRef.current &&
      !provinsiRef.current.classList.contains("hidden")
    ) {
      toggleProvinsi();
    }
  });

  useClickOutside(kotaContainerRef, () => {
    if (kotaRef.current && !kotaRef.current.classList.contains("hidden")) {
      toggleKota();
    }
  });

  async function reqGetDropdownOptionsPendidikan() {
    const response = await getDropdownOptionsPendidikan();

    setDropdownPendidikan(response.data.data.educations);
  }

  async function reqGetDropdownOptionsPekerjaan() {
    const response = await getDropdownOptionsPekerjaan();

    setDropdownPekerjaan(response.data.data.occupations);
  }

  async function reqGetDropdownOptionsProvinsi() {
    const response = await getDropdownOptionsProvinsi();

    setDropdownProvinsi(response.data.data.province);
  }

  async function reqGetDropdownOptionsKota(id: number) {
    const response = await getDropdownOptionsKota(id);

    setDropdownKota(response.data.data.regencies);
  }

  useEffect(() => {
    reqGetDropdownOptionsPekerjaan();
    reqGetDropdownOptionsPendidikan();
    reqGetDropdownOptionsProvinsi();
  }, []);

  useEffect(() => {
    // Enable or disable process button
    if (
      birthDate?.length &&
      selectedPendidikanTerakhir > 0 &&
      selectedPekerjaan?.length &&
      selectedProvinsi > 0 &&
      selectedKota > 0 &&
      institusi?.length &&
      gender?.length &&
      checkedList?.length
    ) {
      setAvailableToSubmit(true);
    } else {
      setAvailableToSubmit(false);
    }
  });

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal text-white">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 py-[20%]">
        <div className="bg-monochrome-600 rounded-xl shadow-lg w-[56.5rem] h-[36.75rem] p-[1.5rem] overflow-y-auto">
          <div className="flex mb-[1.5rem]">
            <div className="flex flex-row items-center space-x-[1rem]">
              <img src={IllustrationImg} alt="" />
              <div className="flex flex-col">
                <p className="text-[1.5rem] leading-[2rem] font-bold">
                  Lengkapi Data
                </p>
                <p className="text-[0.875rem] leading-[1.5rem] font-normal">
                  Isi pertanyaan dibawah ini dan pastikan data yang kamu isi
                  benar untuk melanjutkan pesanan.{" "}
                  <b className="text-[#46B753]">
                    Data hanya diisi sekali untuk pembelian pertama.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col relative lg:odd:mr-[0.75rem] lg:even:ml-[0.75rem] mb-[1.5rem]">
              <span className="flex flex-row mb-[0.5rem]">
                <label className="font-bold text-[0.875rem] leading-[1.5rem]">
                  Tanggal Lahir
                </label>
                <label className="font-bold text-[0.875rem] leading-[1.5rem] text-red-600">
                  *
                </label>
              </span>
              <DatePicker
                id="dobCompleteProfile"
                onChange={handleInputBirthDate}
                format={"YYYY-MM-DD"}
                className={`h-[2.5rem] w-full rounded-[0.5rem] bg-monochrome-600 border border-monochrome-400 text-monochrome-400 text-sm p-2 focus:outline-0 hover:border-0 hover:ring-1 hover:ring-allurared-500`}
                placeholder="yyyy-mm-dd"
              />
              <div className="absolute right-[0.5rem] top-[2.5rem] pointer-events-none">
                <IconCalendar fill="#A1A1A1" />
              </div>
            </div>
            <div className="flex flex-col relative lg:odd:mr-[0.75rem] lg:even:ml-[0.75rem] mb-[1.5rem]">
              <span className="flex flex-row mb-[0.5rem]">
                <label className="font-bold text-[0.875rem] leading-[1.5rem]">
                  Pendidikan Terakhir
                </label>
                <label className="font-bold text-[0.875rem] leading-[1.5rem] text-red-600">
                  *
                </label>
              </span>
              <div className="flex flex-row gap-[1rem]">
                <div
                  ref={pendidikanTerakhirContainerRef}
                  className="border-monochrome-400 w-full"
                >
                  <div
                    className="px-4 py-2 border border-monochrome-400 bg-monochrome-600 flex flex-row items-center justify-between rounded-lg hover:cursor-pointer mb-[0.25rem]"
                    onClick={() => togglePendidikanTerakhir()}
                  >
                    <p className="font-normal text-[0.875rem]">
                      {pendidikanTerakhir
                        ? pendidikanTerakhir
                        : "Pilih Pendidikan Terakhir"}
                    </p>
                    <div className="rotate-90">
                      <IconArrowRight fill="#A1A1A1" />
                    </div>
                  </div>
                  <div
                    ref={pendidikanTerakhirRef}
                    className="hidden z-10 p-4 bg-monochrome-600 mb-[1.5rem] rounded-lg absolute w-full border border-monochrome-400"
                  >
                    <div className="grid grid-cols-1 text-left">
                      {dropdownPendidikan.map((item, index) => (
                        <div
                          key={index}
                          className="px-[1rem] py-[0.5rem] hover:cursor-pointer hover:bg-monochrome-500 rounded-lg"
                          onClick={(event) =>
                            handleOptionPendidikanTerakhir(item.id, event)
                          }
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative lg:odd:mr-[0.75rem] lg:even:ml-[0.75rem] mb-[1.5rem]">
              <span className="flex flex-row mb-[0.5rem]">
                <label className="font-bold text-[0.875rem] leading-[1.5rem]">
                  Pekerjaan
                </label>
                <label className="font-bold text-[0.875rem] leading-[1.5rem] text-red-600">
                  *
                </label>
              </span>
              <div className="flex flex-row gap-[1rem]">
                <div
                  ref={pekerjaanContainerRef}
                  className="border-monochrome-400 w-full"
                >
                  <div
                    className="px-4 py-2 border border-monochrome-400 bg-monochrome-600 flex flex-row items-center justify-between rounded-lg hover:cursor-pointer mb-[0.25rem]"
                    onClick={() => togglePekerjaan()}
                  >
                    <p className="font-normal text-[0.875rem]">
                      {pekerjaan ? pekerjaan : "Pilih Pekerjaan"}
                    </p>
                    <div className="rotate-90">
                      <IconArrowRight fill="#A1A1A1" />
                    </div>
                  </div>
                  <div
                    ref={pekerjaanRef}
                    className="hidden z-10 p-4 bg-monochrome-600 mb-[1.5rem] rounded-lg absolute w-full h-[10rem] overflow-y-auto border border-monochrome-400"
                  >
                    <div className="grid grid-cols-1 text-left">
                      {isInputPekerjaan && dropdownPekerjaan.length > 0 ? (
                        <>
                          <input
                            id="inputPekerjaan"
                            type="text"
                            className="px-4 py-2 border border-monochrome-400 bg-monochrome-600 flex flex-row items-center justify-between rounded-lg hover:cursor-pointer focus:outline-0 w-full mb-[1rem]"
                          />
                          <button
                            onClick={(event) =>
                              handleOptionPekerjaan(true, event, null)
                            }
                            className="h-[2.5rem] w-full flex items-center justify-center px-[1rem] py-[0.75rem] lg:py-[0.5rem] rounded-lg bg-allurared-600 hover:cursor-pointer"
                          >
                            Simpan
                          </button>
                        </>
                      ) : (
                        dropdownPekerjaan.map((item, index) => (
                          <div
                            key={index}
                            className="px-[1rem] py-[0.5rem] hover:cursor-pointer hover:bg-monochrome-500 rounded-lg"
                            onClick={(event) =>
                              handleOptionPekerjaan(false, event, item)
                            }
                          >
                            {item.name}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative lg:odd:mr-[0.75rem] lg:even:ml-[0.75rem] mb-[1.5rem]">
              <span className="flex flex-row mb-[0.5rem]">
                <label className="font-bold text-[0.875rem] leading-[1.5rem]">
                  Institusi
                </label>
                <label className="font-bold text-[0.875rem] leading-[1.5rem] text-red-600">
                  *
                </label>
              </span>
              <div>
                <input
                  value={institusi}
                  onChange={handleInputInstitusi}
                  type="text"
                  className="px-4 py-2 border border-monochrome-400 bg-monochrome-600 flex flex-row items-center justify-between rounded-lg hover:cursor-pointer mb-[0.25rem] focus:outline-0 w-full"
                  placeholder="contoh : Sekolah/Kampus/Perusahaan"
                />
              </div>
            </div>
            <div className="flex flex-col relative lg:odd:mr-[0.75rem] lg:even:ml-[0.75rem] mb-[1.5rem]">
              <span className="flex flex-row mb-[0.5rem]">
                <label className="font-bold text-[0.875rem] leading-[1.5rem]">
                  Provinsi
                </label>
                <label className="font-bold text-[0.875rem] leading-[1.5rem] text-red-600">
                  *
                </label>
              </span>
              <div className="flex flex-row gap-[1rem]">
                <div
                  ref={provinsiContainerRef}
                  className="border-monochrome-400 w-full"
                >
                  <div
                    className="px-4 py-2 border border-monochrome-400 bg-monochrome-600 flex flex-row items-center justify-between rounded-lg hover:cursor-pointer mb-[0.25rem]"
                    onClick={() => toggleProvinsi()}
                  >
                    <p className="font-normal text-[0.875rem]">
                      {provinsi ? provinsi : "Pilih Provinsi"}
                    </p>
                    <div className="rotate-90">
                      <IconArrowRight fill="#A1A1A1" />
                    </div>
                  </div>
                  <div
                    ref={provinsiRef}
                    className="hidden z-10 p-4 bg-monochrome-600 mb-[1.5rem] rounded-lg absolute w-full h-[9rem] overflow-y-auto border border-monochrome-400"
                  >
                    <div className="grid grid-cols-1 text-left">
                      {dropdownProvinsi.map((item, index) => (
                        <div
                          key={index}
                          className="px-[1rem] py-[0.5rem] hover:cursor-pointer hover:bg-monochrome-500 rounded-lg"
                          onClick={(event) =>
                            handleOptionProvinsi(item.id, event)
                          }
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative lg:odd:mr-[0.75rem] lg:even:ml-[0.75rem] mb-[1.5rem]">
              <span className="flex flex-row mb-[0.5rem]">
                <label className="font-bold text-[0.875rem] leading-[1.5rem]">
                  Kota
                </label>
                <label className="font-bold text-[0.875rem] leading-[1.5rem] text-red-600">
                  *
                </label>
              </span>
              <div className="flex flex-row gap-[1rem]">
                <div
                  ref={kotaContainerRef}
                  className="border-monochrome-400 w-full"
                >
                  <div
                    className="px-4 py-2 border border-monochrome-400 bg-monochrome-600 flex flex-row items-center justify-between rounded-lg hover:cursor-pointer mb-[0.25rem]"
                    onClick={() => toggleKota()}
                  >
                    <p className="font-normal text-[0.875rem]">
                      {kota ? kota : "Pilih Kota"}
                    </p>
                    <div className="rotate-90">
                      <IconArrowRight fill="#A1A1A1" />
                    </div>
                  </div>
                  <div
                    ref={kotaRef}
                    className="hidden z-10 p-4 bg-monochrome-600 mb-[1.5rem] rounded-lg absolute w-full h-[9rem] overflow-y-auto border border-monochrome-400"
                  >
                    <div className="grid grid-cols-1 text-left">
                      {dropdownKota.map((item, index) => (
                        <div
                          key={index}
                          className="px-[1rem] py-[0.5rem] hover:cursor-pointer hover:bg-monochrome-500 rounded-lg"
                          onClick={(event) => handleOptionKota(item.id, event)}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[1.5rem]">
            <p className="font-bold text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
              Pilih Gender
              <b className="text-allurared-500">*</b>
            </p>
            <div className="flex flex-row gap-y-[1rem] mb-[1.5rem]">
              <div className="flex items-center mr-[1rem]">
                <input
                  id="gender1"
                  type="radio"
                  name="gender"
                  value="Laki-laki"
                  className="accent-allurared-600 bg-transparent border-transparent focus:ring-2 w-[1.5rem] h-[1.5rem]"
                  onChange={(e) => handleGenderRadioChange(e)}
                />
                <label
                  htmlFor="gender1"
                  className="text-sm font-normal ml-[1rem]"
                >
                  Laki - Laki
                </label>
              </div>
              <div className="flex items-center mr-[1rem]">
                <input
                  id="gender2"
                  type="radio"
                  name="gender"
                  value="Perempuan"
                  className="accent-allurared-600 bg-transparent border-transparent focus:ring-2 w-[1.5rem] h-[1.5rem]"
                  onChange={(e) => handleGenderRadioChange(e)}
                />
                <label
                  htmlFor="gender2"
                  className="text-sm font-normal ml-[1rem]"
                >
                  Perempuan
                </label>
              </div>
            </div>
          </div>
          <div className="mb-[1.5rem]">
            <p className="font-bold text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
              Dari mana kamu mengtahui Lister?
              <b className="text-allurared-500">*</b>
            </p>
            <div>
              <CheckboxGroup
                options={dummy_arr_reference_source}
                value={checkedList}
                onChange={onChangeCheckbox}
                className="grid grid-cols-2 lg:grid-cols-4 items-center space-y-2"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            {availableToSubmit ? (
              <button
                disabled={!availableToSubmit}
                onClick={() => saveProfileData()}
                className={
                  `h-[2.5rem] w-full lg:w-[11.75rem] flex items-center justify-center px-[1rem] py-[0.75rem] lg:py-[0.5rem] rounded-lg hover:cursor-pointer ` +
                  (availableToSubmit
                    ? "bg-allurared-600 rounded-lg hover:bg-[#67141B]"
                    : "bg-monochrome-300")
                }
              >
                <p className="font-bold text-[0.875rem]">Simpan & Lanjutkan</p>
              </button>
            ) : (
              <button className="h-[2.5rem] w-full lg:w-[11.75rem] flex items-center justify-center px-[1rem] py-[0.75rem] lg:py-[0.5rem] bg-monochrome-300 rounded-lg">
                <p className="font-bold text-[0.875rem]">Simpan & Lanjutkan</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompleteProfileData;
