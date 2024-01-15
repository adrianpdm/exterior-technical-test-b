import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { IconEye, IconBlindEye } from "../icons";
import { postChangePasswordTutor, postChangePasswordStudent } from "../../API";
import { useToastStore } from "../../store";

interface ModalProps {
  isOpen: boolean;
  role: string;
  onClose: () => void;
}

interface FormAccountValues {
  password: string;
  passwordconfirmation: string;
}

const ChangePassword: React.FC<ModalProps> = ({ isOpen, role, onClose }) => {
  const [blindPassword, setBlindPassword] = useState(true);
  const [blindConfirmationPassword, setBlindConfirmationPassword] =
    useState(true);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const { setMessageToast, setIsOpenToast } = useToastStore();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-monochrome-700 rounded-lg shadow-lg p-6 min-w-[35.25rem] max-w-[35.25rem]">
          <div className="flex justify-between">
            <h1 className="modal-title text-[32px] font-bold">
              Informasi Akun
            </h1>
          </div>
          <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-5" />
          <div className="modal-body mt-4 text-monochrome-100 font-normal overflow-y-scroll">
            <Formik
              initialValues={{
                password: "",
                passwordconfirmation: "",
              }}
              validate={(values) => {
                const errors: FormAccountValues = {
                  password: "",
                  passwordconfirmation: "",
                };

                //password validation
                if (!values.password) {
                  errors.password = "Required";
                } else if (!/^(.{8,})$/i.test(values.password)) {
                  errors.password = "Password minimal 8 karakter";
                }
                // else if (!/[A-Z]+/.test(values.password)) {
                //   errors.password = "Minimal ada 1 buah huruf besar";
                // } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
                //   errors.password =
                //     "Minimal ada 1 buah Angka Masukan Spesial karakter (@$!#%*?&-_)";
                // }

                //passwordconfirmation validation
                if (!values.passwordconfirmation) {
                  errors.passwordconfirmation = "Required";
                } else if (values.password !== values.passwordconfirmation) {
                  errors.passwordconfirmation =
                    "Konfirmasi Password tidak sesuai";
                }

                if (
                  errors.password === "" &&
                  errors.passwordconfirmation === ""
                ) {
                  setAllowSubmit(true);
                  return {};
                } else {
                  setAllowSubmit(false);
                  return errors;
                }
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                if (role === "student") {
                  postChangePasswordStudent(
                    values.password,
                    values.passwordconfirmation
                  ).then((res) => {
                    setAllowSubmit(false);
                    if (res.data.code === "000") {
                      onClose();
                      setMessageToast("Password sudah diubah.");
                      setIsOpenToast(true);
                    } else {
                      // setErrorAuth("Password salah. Harap periksa kembali kata sandi Anda.")
                    }
                    setAllowSubmit(true);
                    setSubmitting(false);
                  });
                } else {
                  postChangePasswordTutor(
                    values.password,
                    values.passwordconfirmation
                  ).then((res) => {
                    setAllowSubmit(false);
                    if (res.data.code === "000") {
                      onClose();
                      setMessageToast("Password sudah diubah.");
                      setIsOpenToast(true);
                    } else {
                      // setErrorAuth("Password salah. Harap periksa kembali kata sandi Anda.")
                    }
                    setAllowSubmit(true);
                    setSubmitting(false);
                  });
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div id="inputPassword" className="w-full mb-[1.5rem]">
                    <span className="flex mb-3">
                      <label className="font-bold text-sm">Password Baru</label>
                      <label className="font-bold text-sm text-red-600">
                        *
                      </label>
                    </span>
                    <div className="relative px-1">
                      <Field
                        type={blindPassword ? "password" : "text"}
                        name="password"
                        className={`h-[2.5rem] rounded-[0.5rem] bg-monochrome-600 border min-w-0 w-full text-sm p-2 focus:outline-none focus:ring focus:ring-monochrome-300 ${
                          touched.password && errors.password
                            ? "border-allurared-500"
                            : "border-monochrome-500"
                        }`}
                        placeholder="masukkan password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <a
                        onClick={() => setBlindPassword(!blindPassword)}
                        className="text-monochrome-300 absolute right-1 top-2 w-10"
                      >
                        {blindPassword ? <IconEye /> : <IconBlindEye />}
                      </a>
                    </div>
                    <p className="text-red-400 text-sm mt-1">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                  <div
                    id="inputPasswordConfirmation"
                    className="w-full mb-[1.5rem]"
                  >
                    <span className="flex mb-3">
                      <label className="font-bold text-sm">
                        Konfirmasi Password Baru
                      </label>
                      <label className="font-bold text-sm text-red-600">
                        *
                      </label>
                    </span>
                    <div className="relative px-1">
                      <Field
                        type={blindConfirmationPassword ? "password" : "text"}
                        name="passwordconfirmation"
                        className={`h-[2.5rem] rounded-[0.5rem] bg-monochrome-600 border min-w-0 w-full text-sm p-2 focus:outline-none focus:ring focus:ring-monochrome-300 ${
                          touched.password && errors.password
                            ? "border-allurared-500"
                            : "border-monochrome-500"
                        }`}
                        placeholder="konfirmasi password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordconfirmation}
                      />
                      <a
                        onClick={() =>
                          setBlindConfirmationPassword(
                            !blindConfirmationPassword
                          )
                        }
                        className="text-monochrome-300 absolute right-1 top-2 w-10"
                      >
                        {blindConfirmationPassword ? (
                          <IconEye />
                        ) : (
                          <IconBlindEye />
                        )}
                      </a>
                    </div>
                    <p className="text-red-400 text-sm mt-1">
                      {errors.passwordconfirmation &&
                        touched.passwordconfirmation &&
                        errors.passwordconfirmation}
                    </p>
                  </div>
                  <div className="rounded-lg bg-monochrome-700 border border-monochrome-500 block flex-1 min-w-0 w-full text-sm p-3 mb-[1.5rem]">
                    <p className="font-bold mb-1">Petunjuk!</p>
                    <p>Buat password minimal 8 karakter</p>
                  </div>
                  <div className="flex flex-row space-x-[1.5rem]">
                    <button
                      onClick={() => onClose()}
                      className={`rounded-lg p-2 font-bold w-full bg-monochrome-500 hover:bg-[#2d2d2d]`}
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      className={`rounded-lg p-2 font-bold w-full ${
                        allowSubmit ? "bg-red-500" : "bg-monochrome-300"
                      }`}
                      disabled={isSubmitting || !allowSubmit}
                    >
                      Simpan
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
