import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ErrorResponse } from "../domains";
import { Store } from "@reduxjs/toolkit";

export const APIService: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setUpInterceptors = (
  store: Store,
  instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },
    (error: AxiosError<ErrorResponse>): Promise<AxiosError<ErrorResponse>> => {
      return Promise.reject({
        message: error.response?.data.message,
        status: error.response?.status,
      });
    },
  )
}