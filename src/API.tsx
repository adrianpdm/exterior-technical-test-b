import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const token: string = localStorage.getItem("token")!; //non-null assertion
const cookie_token: string = localStorage.getItem("cookie_token")!; //non-null assertion
// console.log(cookie_token);

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

const postConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    // Cookie: cookie_token,
  },
  method: "post",
};

const postUploadConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
    // Cookie: cookie_token,
  },
  method: "post",
};

const getConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    // Cookie: cookie_token,
  },
  method: "get",
};

const patchConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    // Cookie: cookie_token,
  },
  method: "patch",
};

const putConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    // Cookie: cookie_token,
  },
  method: "put",
};

export const loginAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    withCredentials: true,
    data,
  })
    .then((response) => {
      localStorage.clear();
      let expires = new Date();
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.data.bearer_token)
      );
      localStorage.setItem(
        "expired_at",
        JSON.stringify(response.data.data.expired_at)
      );
      localStorage.setItem("cookie_token", response.data.data.cookie_token);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const registerApi = async (url: string, data: any): Promise<any> => {
  let phone_no = data.whatsapp.toString();
  if (phone_no.charAt(0) === "0") {
    phone_no = phone_no;
  } else if (phone_no.charAt(0) !== "0") {
    phone_no = "0" + phone_no;
  }

  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    data: {
      role: "student",
      fullname: data.name,
      phone_no: phone_no,
      email: data.email,
      password: data.password,
    },
  })
    .then((response) => {
      localStorage.setItem(
        "registration_id",
        JSON.stringify(response.data.data.registration_id)
      );
      localStorage.setItem("registration_email", data.email);
      localStorage.setItem("registration_phone", phone_no);

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const validateOTP_Register_API = async (
  url: string,
  data: any
): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    data: {
      registration_id: data.registration_id,
      phone_no: data.phone_no,
      OTP: data.OTP,
    },
  })
    .then((response) => {
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.data.login.bearer_token)
      );
      localStorage.setItem(
        "expired_at",
        JSON.stringify(response.data.data.login.expired_at)
      );

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const requestOTP_Register_API = async (
  url: string,
  data: any
): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    data: {
      registration_id: data.registration_id,
      phone_no: data.phone_no,
    },
  })
    .then((response) => {
      localStorage.setItem(
        "registration_id",
        JSON.stringify(response.data.data.registration_id)
      );
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const forgetPassword_API = async (
  url: string,
  data: any
): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    data: {
      target_otp: data.target_otp,
    },
  })
    .then((response) => {
      localStorage.setItem(
        "registration_id",
        JSON.stringify(response.data.data.registration_id)
      );
      localStorage.setItem("registration_email", data.target_otp);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const requestOTP_ForgetPass_API = async (
  url: string,
  data: any
): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    data,
  })
    .then((response) => {
      localStorage.setItem(
        "registration_id",
        JSON.stringify(response.data.data.registration_id)
      );
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const requestNewOTP = async (data: any): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/auths/register/request-otp`,
    headers: {},
    data,
  })
    .then((response) => {
      localStorage.setItem(
        "registration_id",
        JSON.stringify(response.data.data.registration_id)
      );
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const validateOTP_ForgetPass_API = async (
  url: string,
  data: any
): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    data: {
      registration_id: data.registration_id,
      target_otp: data.target_otp,
      otp: data.OTP,
    },
  })
    .then((response) => {
      localStorage.setItem(
        "forget_token",
        JSON.stringify(response.data.data.forget_token.token)
      );
      localStorage.setItem(
        "forget_expired_at",
        JSON.stringify(response.data.data.forget_token.expired_at)
      );

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const changePassword_API = async (
  url: string,
  data: any
): Promise<any> => {
  return await axios({
    method: "post",
    url: `${baseUrl}/${url}`,
    headers: {},
    data: {
      token: data.token.replace(/^"(.*)"$/, "$1"),
      password: data.password,
    },
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const profile_API = async (url: string): Promise<any> => {
  return await axios({
    ...postConfig,
    method: "post",
    url: `${baseUrl}/${url}`,
    withCredentials: true,
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (error.response.data.code === "ERR_BAD_REQUEST") {
        location.href = "/login";
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getLanguage = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/course/languages`,
    withCredentials: true,
  })
    .then((response) => {
      if (response.data.code === "301") {
        location.href = "/login";
        localStorage.clear();
      }

      const newListLanguage = response.data.data.list.map((item: any) => {
        return {
          ...item,
          image_path: `${import.meta.env.VITE_LANGUAGE_IMAGE_HOST}/${
            item.image
          }`,
        };
      });

      return {
        status: response.status,
        data: newListLanguage,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getLanguageById = async (id: number): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/course/language/${id}`,
    withCredentials: true,
  })
    .then((response) => {
      if (response.data.code === "301") {
        location.href = "/login";
        localStorage.clear();
      }

      const newResponse = {
        ...response.data.data,
        image_path: `${import.meta.env.VITE_LANGUAGE_IMAGE_HOST}/${
          response.data.data.image
        }`,
      };

      return {
        status: response.status,
        data: newResponse,
      };
    })
    .catch((error) => {
      console.log(error);

      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getCourseCategory = async (id: string): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/course/categories?lang_id=${id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getCoursePrograms = async (id: number): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/course/programs?category_id=${id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getCourseClassType = async (id: number): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/class/types?program_id=${id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getCourseList = async (
  program_id: number,
  class_type_id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/course/list?program_id=${program_id}&class_type_id=${class_type_id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      const newList = response.data.data.list.map((item: any) => {
        return {
          ...item,
          discount:
            (((item.original_price - item.final_price) / item.original_price) *
              100) /
            100,
          features: [
            "90 menit/sesi",
            "E-certificate",
            "Progressive test",
            "Akses zoom premium",
            "Learning Report",
            "Rekaman kelas",
            "Materi Pembelajaran",
          ],
        };
      });

      return {
        status: response.status,
        data: newList,
      };
    })
    .catch((error) => {
      console.log("cek error", error);
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getOrders = async (
  limit: number = 100,
  offset: number = 0,
  search: string = "",
  course_program_id: string = "",
  status: string = "",
  date_created: string = ""
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/orders?search=${search}&course_program=${course_program_id}&status=${status}&date_created=${date_created}&limit=${limit}&offset=${offset}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      if (response.data.data.list !== null) {
        const newListOrders = response.data.data.list.map((item: any) => {
          return {
            ...item,
            image_path: `${import.meta.env.VITE_LANGUAGE_IMAGE_HOST}/${
              item.properties.language_id
            }/${item.properties.language_icon}`,
          };
        });

        return {
          status: response.status,
          data: newListOrders,
        };
      } else {
        return {
          status: response.status,
          data: [],
        };
      }
    })
    .catch((error) => {
      console.log(error);

      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getOrdersById = async (class_detail_id: number): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/order/detail?class_detail_id=${class_detail_id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const createOrders = async (data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    method: "post",
    url: `${baseUrl}/order/create`,
    withCredentials: true,
    data: data,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getNotifications = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/notifications`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchReadNotification = async (id: number): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/notification/${id}/read`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchReadAllNotification = async (): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/notifications/read`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchIsClickedPurchasedCourseItem = async (
  id: number
): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/order/${id}/clicked`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchIsClickedMyClassTutorItem = async (
  id: number
): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/tutor/my-class/${id}/clicked`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchIsClickedMyClassStudentItem = async (
  id: number
): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/student/my-class/${id}/clicked`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getDropdownOptionsPendidikan = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/master/educations`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getDropdownOptionsPekerjaan = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/master/occupations`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getDropdownOptionsProvinsi = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/master/provinces`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getDropdownOptionsKota = async (id: number): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/master/regencies/${id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchStudentProfile = async (data: any): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/student/profile`,
    withCredentials: true,

    data: data,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getStudentOrderData = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/order-data`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const postCouponApply = async (
  coupon: string,
  final_price: number
): Promise<any> => {
  return await axios({
    ...postConfig,
    method: "post",
    url: `${baseUrl}/coupon/apply`,
    withCredentials: true,

    data: { coupon_code: coupon, final_price: final_price },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getTutorDashboardStatistic = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/dashboard`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getStudentDashboardStatistic = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/dashboard`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getProfileTutor = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/auths/tutor/profile`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getProfileStudent = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/auths/student/profile`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchProfileTutor = async (data: any): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/auths/tutor/profile`,
    withCredentials: true,
    data: data,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchProfileStudent = async (data: any): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/auths/student/profile`,
    withCredentials: true,
    data: data,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const postChangePasswordTutor = async (
  password: string,
  confirm_password: string
): Promise<any> => {
  return await axios({
    ...postConfig,
    method: "post",
    url: `${baseUrl}/auths/tutor/change-password`,
    withCredentials: true,

    data: { password, confirm_password },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const postChangePasswordStudent = async (
  password: string,
  confirm_password: string
): Promise<any> => {
  return await axios({
    ...postConfig,
    method: "post",
    url: `${baseUrl}/auths/student/change-password`,
    withCredentials: true,

    data: { password, confirm_password },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const postUploadFile = async (file: File): Promise<any> => {
  return await axios({
    ...postUploadConfig,
    method: "post",
    url: `${baseUrl}/upload/file`,
    withCredentials: true,
    data: { file },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.response.status,
        data: error.response.data,
      };
    });
};

export const patchTutorAvailability = async (
  availability: boolean
): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/tutor/availability`,
    withCredentials: true,
    data: { availability },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const patchTutorClassTypeAvailability = async (
  classTypeAvailability: string
): Promise<any> => {
  return await axios({
    ...patchConfig,
    url: `${patchConfig.baseUrl}/tutor/class/availability`,
    withCredentials: true,
    data: { availability: classTypeAvailability },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getTutorSchedule = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/schedules`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const postTutorSchedule = async (schedule_time: any): Promise<any> => {
  return await axios({
    ...postConfig,
    method: "post",
    url: `${baseUrl}/tutor/schedules`,
    withCredentials: true,

    data: { schedule_time },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassTutor = async (filter?: {
  course_id: string;
  status: string;
  search: string;
}): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/my-class?status=${filter?.status}&courses=${filter?.course_id}&search=${filter?.search}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassStudent = async (filter?: {
  status: string;
  search: string;
}): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/my-class?status=${filter?.status}&search=${filter?.search}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassTutorDetail = async (id: number): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/my-class/${id}/detail`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassStudentDetail = async (id: number): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/my-class/${id}/detail`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassTutorDetailSchedule = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/my-class/${id}/detail/schedule`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassStudentDetailSchedule = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/my-class/${id}/detail/schedule`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassTutorDetailScheduleMeetingDetail = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/my-class/detail/schedule/${id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassStudentDetailScheduleMeetingDetail = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/my-class/detail/schedule/${id}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassTutorDetailDescription = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/my-class/${id}/detail/description`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassStudentDetailDescription = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/my-class/${id}/detail/description`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassStudentDetailPreference = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/student/my-class/${id}/detail/preference`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassTutorDetailStudent = async (
  id: number
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/my-class/${id}/detail/student`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMyClassTutorCourseFilter = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/tutor/my-class/courses`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const putTutorMeetingDetail = async (
  id: number,
  data: any
): Promise<any> => {
  return await axios({
    ...putConfig,
    url: `${putConfig.baseUrl}/tutor/my-class/detail/schedule/${id}`,
    withCredentials: true,
    data: data,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getCourseDetail = async (slug: string): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/course/${slug}`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getCountryPhoneCode = async (): Promise<any> => {
  return await axios({
    method: "get",
    headers: {},
    url: `${getConfig.baseUrl}/master/country-codes`,
  })
    .then((response: any) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const putStudentMeetingDetail = async (
  id: number,
  feedback: string
): Promise<any> => {
  return await axios({
    ...putConfig,
    url: `${putConfig.baseUrl}/student/my-class/detail/schedule/${id}`,
    withCredentials: true,
    data: { feedback: feedback },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const postCouponList = async (course_price: number): Promise<any> => {
  return await axios({
    ...postConfig,
    method: "post",
    url: `${baseUrl}/coupon/list`,
    withCredentials: true,
    data: { course_price },
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getMasterDataEducations = async (): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/master/educations`,
    withCredentials: true,
  })
    .then((response: any) => {
      if (response.data.code === "301" || response.data.code === "401") {
        location.href = "/login";
        localStorage.clear();
      }

      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (
        error.response.data.code === "301" ||
        error.response.data.code === "401"
      ) {
        location.href = "/login";
        localStorage.clear();
      }
      return {
        status: error.status,
        data: error.response,
      };
    });
};

// EXAMPLE
export const postAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${postConfig.baseUrl}/${url}`,
    data,
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}/${data !== null ? data : ""}`,
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
