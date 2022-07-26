import axios, { AxiosResponse } from "axios";

export interface NetworkRequest {
  path: string;
  baseUrl?: string;
  data?: Record<string, any>;
}

const baseUrl =
  process.env.NODE_ENV === "development" ? "https://crab.api.subscan.io/api" : "https://crab.api.subscan.io/api";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (res) => {
    const { code } = res.data;
    let hasAuthFailed = false;
    switch (code) {
      case 4: {
        // Do something that relates to this server code response
        /* you may choose to log out the user,etc */
        hasAuthFailed = true;
        break;
      }
      case 0: {
        // Do something that relates to this server code response
        break;
      }
    }
    if (hasAuthFailed) {
      return;
    }
    return Promise.resolve(res);
  },
  (error) => {
    throw error;
  }
);

const http = {
  get<T>(requestData: NetworkRequest): Promise<AxiosResponse<T>> {
    return axiosInstance.get<T>(requestData.path, {
      // headers: {'auth-token': currentUser.getToken()},
      baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      params: requestData.data,
    });
  },
  post<T>(requestData: NetworkRequest): Promise<AxiosResponse<T>> {
    return axiosInstance.post<T>(
      requestData.path,
      { ...requestData.data },
      {
        // headers: {'auth-token': currentUser.getToken()},
        baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      }
    );
  },
  put<T>(requestData: NetworkRequest): Promise<AxiosResponse<T>> {
    return axiosInstance.put<T>(
      requestData.path,
      { ...requestData.data },
      {
        // headers: {'auth-token': currentUser.getToken()},
        baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      }
    );
  },
  delete<T>(requestData: NetworkRequest): Promise<AxiosResponse<T>> {
    return axiosInstance.put<T>(
      requestData.path,
      { ...requestData.data },
      {
        // headers: {'auth-token': currentUser.getToken()},
        baseURL: requestData.baseUrl ? requestData.baseUrl : baseUrl,
      }
    );
  },
};

export default http;
