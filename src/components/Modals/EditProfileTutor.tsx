import React, { ReactNode, useEffect, useRef, useState } from "react";
import ButtonFileUploader from "../FileUploader/ButtonFileUploader";
import NoPhotoAvatar from "./../../assets/dummy/dummy_no_photo.png";
import { ImagePreview } from ".";
import { IconAngleSmallDown, IconCalendar, IconMagnifier } from "../icons";
import {
  getMasterDataEducations,
  patchProfileTutor,
  postUploadFile,
} from "../../API";
import useClickOutside from "../../hooks/useClickOutside";
import { format, parseISO } from "date-fns";
import { useToastStore } from "../../store";

interface ModalProps {
  isOpen: boolean;
  data: any;
  onClose: () => void;
}

interface EducationDataItem {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

const EditProfileTutor: React.FC<ModalProps> = ({ isOpen, data, onClose }) => {
  const { setMessageToast, setBackgroundClassToast, setIsOpenToast } =
    useToastStore();
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string>("");
  const [isOpenImagePreviewModal, setIsOpenImagePreviewModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [errorMessageUploadPhoto, setErrorMessageUploadPhoto] = useState("");
  const [educationData, setEducationData] = useState<EducationDataItem[]>([]);

  // State variables for input fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [education, setEducation] = useState("");
  const [educationId, setEducationId] = useState(0);
  const [birthdate, setBirthdate] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [addressIdentity, setAddressIdentity] = useState("");
  const [institution, setInstitution] = useState("");
  const [institutionEducation, setInstitutionEducation] = useState("");

  const genderDropdownContainerRef = useRef<HTMLDivElement>(null);
  const genderDropdownRef = useRef<HTMLDivElement>(null);
  const educationDropdownContainerRef = useRef<HTMLDivElement>(null);
  const educationDropdownRef = useRef<HTMLDivElement>(null);

  const toggleGenderDropdown = () => {
    const currentArrowElement = genderDropdownRef.current?.parentElement
      ?.previousSibling?.lastChild as HTMLElement;

    if (genderDropdownRef.current) {
      genderDropdownRef.current.classList.toggle("hidden");
      currentArrowElement.classList.toggle("rotate-[180deg]");
    }
  };

  const toggleEducationDropdown = () => {
    const currentArrowElement = educationDropdownRef.current?.parentElement
      ?.previousSibling?.lastChild as HTMLElement;

    if (educationDropdownRef.current) {
      educationDropdownRef.current.classList.toggle("hidden");
      currentArrowElement.classList.toggle("rotate-[180deg]");
    }
  };

  const handleOptionSelectGender = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const clickedElement = event.currentTarget.textContent;
    setGender(String(clickedElement));
    toggleGenderDropdown();
  };

  const handleOptionSelectEducation = (
    event: React.MouseEvent<HTMLElement>,
    item: EducationDataItem
  ) => {
    setEducation(String(event.currentTarget.textContent));
    setEducationId(item.id);
    toggleEducationDropdown();
  };

  const toggleBirthday = () => {
    const dateInput: any = document.getElementById("birthdayInput");

    try {
      dateInput.showPicker();
      // A date picker is shown.
    } catch (_) {}
  };

  const handleBirthdayDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBirthdate(event.target.value);
    toggleBirthday();
  };

  function openImageModal(
    image: string = uploadedFileUrl
      ? uploadedFileUrl
      : "./src/assets/dummy/dummy_no_photo.png"
  ) {
    setIsOpenImagePreviewModal(true);
    setCurrentImage(image);
  }

  function getFilename(url: string): string {
    const urlObj = new URL(url);

    // Get the pathname, and split it into parts
    const pathnameParts = urlObj.pathname.split("/");

    // Get the last part of the pathname
    const lastPart = pathnameParts[pathnameParts.length - 1];

    // Decode the URI components and return
    return decodeURIComponent(lastPart);
  }

  async function reqPatchProfileTutor(formData: any) {
    const response = await patchProfileTutor(formData);
    if ((response.data.code = "000")) {
      onClose();
      resetForm();
      setMessageToast("Informasi berhasil disimpan.");
      setBackgroundClassToast("bg-green-500");
      setIsOpenToast(true);
    } else {
      onClose();
      resetForm();
      setMessageToast("Data tidak terkirim. Cobalah beberapa saat lagi.");
      setBackgroundClassToast("bg-allurared-500");
      setIsOpenToast(true);
    }
  }

  function closeModal() {
    resetForm();
    onClose();
  }

  function resetForm() {
    setFileName("");
    setFullName("");
    setEmail("");
    setGender("");
    setWhatsapp("");
    setEducation("");
    setBirthdate("");
    setBirthplace("");
    setOccupation("");
    setInstitution("");
    setAddress("");
    setAddressIdentity("");
  }

  function sendForm() {
    const educationProps = educationData.find(
      (element: EducationDataItem) => element.name === data?.education
    );

    const formFullName = fullName !== "" ? fullName : data?.full_name;
    const formGender = gender !== "" ? gender : data?.gender;
    const formEmail = email !== "" ? email : data?.email;
    const formWhatsapp = whatsapp !== "" ? whatsapp : data?.phone;
    const formBirthdate = birthdate !== "" ? birthdate : data?.date_of_birth;
    const formBirthplace =
      birthplace !== "" ? birthplace : data?.place_of_birth;
    const formOccupation =
      occupation !== "" ? occupation : data?.occupation_name;
    const formInstitution =
      institution !== "" ? institution : data?.institution;
    const formEducationId =
      educationId > 0 ? educationId : Number(educationProps?.id);
    const formInstitutionEducation =
      institutionEducation !== ""
        ? institutionEducation
        : data?.institution_education;
    // const formAddressIdentity =
    //   addressIdentity !== "" ? addressIdentity : data?.address_identity;
    // const formAddress = address !== "" ? address : data?.address;

    const formData = {
      full_name: formFullName,
      email: formEmail,
      no_wa: formWhatsapp,
      tanggal_lahir: formBirthdate,
      tempat_lahir: formBirthplace,
      institusi: formInstitution,
      pekerjaan: formOccupation,
      pendidikan_terakhir: formInstitutionEducation,
      alamat_domisili: address,
      alamat_kartu_identitas: addressIdentity,
      riwayat_pendidikan: formEducationId,
      gender: formGender,
      image:
        uploadedFileUrl !== ""
          ? uploadedFileUrl
          : currentImage.includes(NoPhotoAvatar)
          ? ""
          : currentImage,
    };

    reqPatchProfileTutor(formData);
  }

  const handleFile = async (file: File) => {
    setErrorMessageUploadPhoto("");
    const formData = new FormData();
    formData.append("file", file);

    const uploadResponse = await postUploadFile(file);

    if (uploadResponse.status === 400) {
      setErrorMessageUploadPhoto(uploadResponse.data.error.error);
    }

    if (uploadResponse.status === 200) {
      setFileName(uploadResponse.data.data.file_name);
      setUploadedFileUrl(uploadResponse.data.data.pathname);
    }
  };

  const getPropsDateInput = () => {
    if (data) {
      if (data?.date_of_birth !== "") {
        return format(parseISO(data?.date_of_birth), "yyyy-MM-dd");
      } else {
        return "";
      }
    }
  };

  // Use the useClickOutside hook to handle clicks outside of filterKursusRef
  useClickOutside(genderDropdownContainerRef, () => {
    // Hide the filterKursusRef when clicked outside
    if (
      genderDropdownRef.current &&
      !genderDropdownRef.current.classList.contains("hidden")
    ) {
      toggleGenderDropdown();
    }
  });

  async function reqGetMasterDataEducations() {
    const response = await getMasterDataEducations();

    if ((response.data.code = "000")) {
      setEducationData(response.data.data.educations);
    } else {
      setEducationData([]);
    }
  }

  useEffect(() => {
    reqGetMasterDataEducations();
  }, []);

  useEffect(() => {
    const imgDataProps = data?.image !== "" ? data?.image : "";
    setUploadedFileUrl(imgDataProps);
  }, [isOpen]);

  useEffect(() => {
    const educationProps = educationData.find(
      (element: EducationDataItem) => element.name === data?.education
    );

    const formFullName = fullName !== "" ? fullName : data?.full_name;
    const formGender = gender !== "" ? gender : data?.gender;
    const formEmail = email !== "" ? email : data?.email;
    const formWhatsapp = whatsapp !== "" ? whatsapp : data?.phone;
    const formBirthdate = birthdate !== "" ? birthdate : data?.date_of_birth;
    const formBirthplace =
      birthplace !== "" ? birthplace : data?.place_of_birth;
    const formOccupation =
      occupation !== "" ? occupation : data?.occupation_name;
    const formInstitution =
      institution !== "" ? institution : data?.institution;
    const formEducationId =
      educationId > 0 ? educationId : Number(educationProps?.id);
    const formInstitutionEducation =
      institutionEducation !== ""
        ? institutionEducation
        : data?.institution_education;
    // const formAddressIdentity =
    //   addressIdentity !== "" ? addressIdentity : data?.address_identity;
    // const formAddress = address !== "" ? address : data?.address;

    if (
      formFullName !== undefined &&
      formFullName.length > 0 &&
      formGender !== undefined &&
      formGender.length > 0 &&
      formEmail !== undefined &&
      formEmail.length > 0 &&
      formWhatsapp !== undefined &&
      formWhatsapp.length > 0 &&
      formBirthdate !== undefined &&
      formBirthdate.length > 0 &&
      formBirthplace !== undefined &&
      formBirthplace.length > 0 &&
      formOccupation !== undefined &&
      formOccupation.length > 0 &&
      formInstitution !== undefined &&
      formInstitution.length > 0 &&
      formEducationId !== undefined &&
      formEducationId > 0 &&
      formInstitutionEducation !== undefined &&
      formInstitutionEducation.length > 0
      // formAddressIdentity !== undefined &&
      // formAddressIdentity.length > 0 &&
      // formAddress !== undefined &&
      // formAddress.length > 0
    ) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  });

  const filled: ReactNode = (
    <div
      style={{
        backgroundImage: `url(${
          uploadedFileUrl ? uploadedFileUrl : NoPhotoAvatar
        })`,
      }}
      className={`group hover:brightness-50 h-[5.625rem] w-[5.625rem] rounded-[0.25rem] bg-cover`}
      onClick={() => openImageModal()}
    >
      <div className="opacity-0 hover:flex hover:opacity-100 cursor-pointer w-full h-full items-center justify-center">
        <IconMagnifier fill={"#fff"} />
      </div>
    </div>
  );

  const empty: ReactNode = (
    <div
      style={{
        backgroundImage: `url(${
          uploadedFileUrl ? uploadedFileUrl : NoPhotoAvatar
        })`,
      }}
      className={`group bg-cover hover:brightness-50 h-[5.625rem] w-[5.625rem] rounded-lg`}
      onClick={() => openImageModal()}
    >
      <div className="opacity-0 hover:flex hover:opacity-100 cursor-pointer w-full h-full items-center justify-center">
        <IconMagnifier fill={"#fff"} />
      </div>
    </div>
  );

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ImagePreview
        isOpen={isOpenImagePreviewModal}
        image={currentImage}
        onClose={() => setIsOpenImagePreviewModal(!isOpenImagePreviewModal)}
      />
      <div className="modal">
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-monochrome-700 rounded-lg shadow-lg p-[1.5rem] min-w-[46.875rem] min-h-[46.rem] scale-[0.785] 3xl:scale-[0.9] 4xl:scale-[1]">
            <div className="flex justify-between">
              <h1 className="modal-title text-[2rem] font-bold">
                Informasi Personal
              </h1>
              <br />
            </div>
            <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-5" />
            <div className="modal-body my-4 text-monochrome-100 font-normal max-h-[30rem] overflow-y-scroll pr-[0.5rem]">
              <div className="flex flex-row justify-between mb-[1.5rem]">
                <div className="flex flex-row">
                  <div className="flex flex-row items-center space-x-[1rem]">
                    <div className="flex flex-col text-center">
                      <p className="font-bold text-white text-[0.875rem] leading-[1.5rem]">
                        Foto Profile
                      </p>
                      {uploadedFileUrl !== "" ? filled : empty}
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-white text-[0.875rem] leading-[1.5rem] truncate">
                        {fileName !== ""
                          ? fileName
                          : data?.image !== ""
                          ? getFilename(data.image)
                          : "(masukkan foto)"}
                      </p>
                      <p className="text-[0.875rem] text-monochrome-300 font-normal leading-[1.5rem]">
                        Max 2MB, Format (JPEG,JPG,PNG)
                      </p>
                      <p className="text-[0.875rem] text-allurared-500 font-normal leading-[1.5rem]">
                        {errorMessageUploadPhoto}
                      </p>
                    </div>
                  </div>
                </div>
                {uploadedFileUrl !== "" ? (
                  <div className="flex items-center">
                    <ButtonFileUploader
                      btnText="Ganti Foto"
                      btnClass="h-[2.5rem] w-[6.875rem] bg-transparent text-allurared-600 border border-allurared-600 hover:bg-[#67141B] px-4 py-3 rounded-lg flex items-center justify-center font-bold text-[0.875rem]"
                      acceptedFile=".png, .jpg, .jpeg"
                      handleFile={handleFile}
                    />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <ButtonFileUploader
                      btnText="Upload Foto"
                      btnClass="h-[2.5rem] w-[7.875rem] bg-allurared-600 text-white hover:bg-[#67141B] px-4 py-3 rounded-lg flex items-center justify-center font-bold text-[0.875rem]"
                      acceptedFile=".png, .jpg, .jpeg"
                      handleFile={handleFile}
                    />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[1.5rem] mb-[1rem]">
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Nama Lengkap<b className="text-allurared-500">*</b>
                  </p>
                  <input
                    type="text"
                    className="border rounded-lg focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600"
                    placeholder="Nama"
                    defaultValue={data?.full_name}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Gender<b className="text-allurared-500">*</b>
                  </p>
                  <div className="w-full" ref={genderDropdownContainerRef}>
                    <div
                      className="px-4 py-2 border flex flex-row items-center justify-between hover:cursor-pointer mb-[0.25rem]border rounded-lg focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600"
                      onClick={() => toggleGenderDropdown()}
                    >
                      <p className="text-[0.875rem]">
                        {gender
                          ? gender
                          : data.gender
                          ? data.gender
                          : "Pilih Gender"}
                      </p>
                      <div>
                        <IconAngleSmallDown />
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        ref={genderDropdownRef}
                        className="hidden top-[0.5rem] w-full z-10 p-4 border rounded-lg focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 mb-[1.5rem] absolute"
                      >
                        <div className="grid grid-cols-1 text-left text-[0.875rem]">
                          <div
                            className="px-[1rem] py-[0.5rem] hover:cursor-pointer hover:bg-monochrome-500 rounded-lg"
                            onClick={handleOptionSelectGender}
                          >
                            Laki-laki
                          </div>
                          <div
                            className="px-[1rem] py-[0.5rem] hover:cursor-pointer hover:bg-monochrome-500 rounded-lg"
                            onClick={handleOptionSelectGender}
                          >
                            Perempuan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Email<b className="text-allurared-500">*</b>
                  </p>
                  <input
                    type="text"
                    className="border rounded-lg focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600"
                    placeholder="email@gmail.com"
                    defaultValue={data?.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    No WhatsApp<b className="text-allurared-500">*</b>
                  </p>
                  <div className="relative">
                    <span
                      className={`h-[2.5rem] absolute left-0 top-0 items-center p-2 text-sm bg-monochrome-400 border border-r-0 rounded-l-[0.5rem] border-monochrome-300"
                    }`}
                    >
                      +62
                    </span>
                    <input
                      type="text"
                      name="whatsapp"
                      min="0"
                      className="h-[2.5rem] pl-12 rounded-[0.5rem] bg-monochrome-600 border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 text-monochrome-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="contoh : 82218327556"
                      defaultValue={data?.phone}
                      onKeyDown={(evt) => {
                        // Allow numbers (0-9), delete, backspace, and arrow keys (left and right)
                        if (
                          !/^[0-9]$/.test(evt.key) &&
                          evt.key !== "Backspace" &&
                          evt.key !== "Delete" &&
                          evt.key !== "ArrowLeft" &&
                          evt.key !== "ArrowRight"
                        ) {
                          evt.preventDefault();
                        }
                      }}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Tempat Lahir<b className="text-allurared-500">*</b>
                  </p>
                  <input
                    type="text"
                    className="h-[2.5rem] rounded-[0.5rem] border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 text-monochrome-200"
                    placeholder="masukkan pendidikan terakhir"
                    defaultValue={data?.place_of_birth}
                    onChange={(e) => setBirthplace(e.target.value)}
                  />
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Tanggal Lahir<b className="text-allurared-500">*</b>
                  </p>
                  <div className="relative">
                    <span
                      className={`h-[2.5rem] absolute left-0 top-0 items-center p-2 text-sm bg-monochrome-400 border border-r-0 rounded-l-[0.5rem] border-monochrome-300"
                    }`}
                    >
                      <IconCalendar />
                    </span>
                    <input
                      type="date"
                      name="birthdate"
                      id="birthdayInput"
                      className="h-[2.5rem] pl-12 rounded-[0.5rem] bg-monochrome-600 border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 text-monochrome-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="mm/dd/yyyy"
                      defaultValue={getPropsDateInput()}
                      onClick={() => toggleBirthday()}
                      onChange={handleBirthdayDateChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Pekerjaan Saat Ini<b className="text-allurared-500">*</b>
                  </p>
                  <input
                    type="text"
                    className="h-[2.5rem] rounded-[0.5rem] border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 text-monochrome-200"
                    placeholder="masukkan pekerjaan"
                    defaultValue={data?.occupation_name}
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Institusi<b className="text-allurared-500">*</b>
                  </p>
                  <input
                    type="text"
                    className="h-[2.5rem] rounded-[0.5rem] border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 text-monochrome-200"
                    placeholder="masukkan institusi"
                    defaultValue={data?.institution}
                    onChange={(e) => setInstitution(e.target.value)}
                  />
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Riwayat Pendidikan<b className="text-allurared-500">*</b>
                  </p>

                  <div className="w-full" ref={educationDropdownContainerRef}>
                    <div
                      className="px-4 py-2 border flex flex-row items-center justify-between hover:cursor-pointer mb-[0.25rem]border rounded-lg focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600"
                      onClick={() => toggleEducationDropdown()}
                    >
                      <p className="text-[0.875rem]">
                        {education
                          ? education
                          : data.education
                          ? data.education
                          : "Pilih Riwayat Pendidikan"}
                      </p>
                      <div>
                        <IconAngleSmallDown />
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        ref={educationDropdownRef}
                        className="hidden top-[0.5rem] w-full z-10 p-4 border rounded-lg focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 mb-[1.5rem] absolute"
                      >
                        <div className="grid grid-cols-1 text-left text-[0.875rem]">
                          {educationData.map(
                            (item: EducationDataItem, index: number) => (
                              <div
                                key={index}
                                className="px-[1rem] py-[0.5rem] hover:cursor-pointer hover:bg-monochrome-500 rounded-lg"
                                onClick={(e) =>
                                  handleOptionSelectEducation(e, item)
                                }
                              >
                                {item.name}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[4.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Jurusan & Institusi Pendidikan Terakhir
                    <b className="text-allurared-500">*</b>
                  </p>
                  <input
                    type="text"
                    className="h-[2.5rem] rounded-[0.5rem] border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 text-monochrome-200"
                    placeholder="masukkan jurusan & institusi pendidikan terakhir"
                    defaultValue={data?.institution_education}
                    onChange={(e) => setInstitutionEducation(e.target.value)}
                  />
                </div>

                <div className="flex flex-col h-[8.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Alamat Kartu Identitas
                  </p>
                  <textarea
                    className="h-[8.5rem] rounded-[0.5rem] border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 text-monochrome-200"
                    placeholder="masukkan alamat sesuai kartu identitas"
                    defaultValue={data?.address_identity}
                    onChange={(e) => setAddressIdentity(e.target.value)}
                  />
                </div>

                <div className="flex flex-col h-[8.5rem]">
                  <p className="font-bold text-white text-[0.875rem] mb-[0.5rem] leading-[1.5rem]">
                    Alamat Domisili
                  </p>
                  <textarea
                    className="h-[8.5rem] rounded-[0.5rem] border block flex-1 min-w-0 w-full text-sm p-2 focus:border-monochrome-300 focus:ring-transparent border-monochrome-300 bg-monochrome-600 text-monochrome-200"
                    placeholder="masukkan alamat domisili"
                    defaultValue={data?.address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col p-[1rem] border border-[#E17F00] rounded-lg bg-opacity-10 bg-[#E17F00] my-[1rem] lg:my-[1.5rem]">
                <div className="flex flex-row items-center">
                  <p className="font-bold text-[0.875rem]">Perhatian!</p>
                </div>
                <p className="font-normal text-[0.875rem] leading-[1.5rem]">
                  Untuk mengubah infomasi selain field di atas, harap hubungi
                  Tim Akademik.
                </p>
              </div>

              <hr className="text-monochrome-500 border-t-2 border-monochrome-500 mb-[1.5rem]" />
            </div>
            <div className="modal-footer">
              <div className="flex flex-row justify-end space-x-[1.5rem]">
                <button
                  onClick={() => closeModal()}
                  className={`rounded-lg p-2 font-bold w-[9.25rem] h-[3rem] bg-monochrome-500 hover:bg-[#2d2d2d]`}
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className={`rounded-lg p-2 font-bold w-[9.25rem] h-[3rem] ${
                    allowSubmit
                      ? "bg-red-500 hover:bg-[#67141B]"
                      : "bg-monochrome-300"
                  }`}
                  disabled={!allowSubmit}
                  onClick={() => sendForm()}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfileTutor;
