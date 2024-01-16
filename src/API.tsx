import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
// const token: string = localStorage.getItem("token")!; //non-null assertion

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

const postConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    // Authorization: `Bearer ${token}`,
  },
  method: "post",
};

const postUploadConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
  method: "post",
};

const getConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    // Authorization: `Bearer ${token}`,
  },
  method: "get",
};

const patchConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    // Authorization: `Bearer ${token}`,
  },
  method: "patch",
};

const putConfig: Params = {
  baseUrl: baseUrl,
  headers: {
    // Authorization: `Bearer ${token}`,
  },
  method: "put",
};

export const getFullTextSearchProperty = async (
  query: string
): Promise<any> => {
  return await axios({
    method: "get",
    headers: {},
    url: `${getConfig.baseUrl}/property/fts?query=${query}`,
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

export const getContentByPropertyId = async (id: number): Promise<any> => {
  return await axios({
    method: "get",
    headers: {},
    url: `${getConfig.baseUrl}/property?id=${id}`,
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

export const getPropertyAvailabilityById = async (
  id: number,
  query: string
): Promise<any> => {
  return await axios({
    method: "get",
    headers: {},
    url: `${getConfig.baseUrl}/property/availability/${id}?${query}`,
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
