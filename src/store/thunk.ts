/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { AppDispatch } from ".";
import axiosClient, { AxiosClient } from "../utils/axios";
import { LogEntry } from "../../data/store/connect/connect";

export enum ThunkMethod {
  "delete" = "delete",
  "put" = "put",
  "post" = "post",
  "get" = "get",
}

export type ThunkConfig<R> = {
  name: string;
  error: string;
  responseProperty: keyof AxiosResponse<R>;
  axiosClient?: AxiosInstance;
};

interface ErrorResponse {
  error: string;
  fields?: { [key: string]: string };
  logs?: LogEntry[];
}

export enum ErrorTag {
  Validation = "data validation error",
  Otp = "Invalid confirmation code",
}

export type ThunkError = {
  validation?: string;
  message: string;
  error?: {
    raw?: unknown;
    axios?: AxiosError<ErrorResponse>;
    logs?: unknown;
  };
};

export const isAxiosError = (
  error: unknown
): error is AxiosError<ErrorResponse> =>
  (error as AxiosError<ErrorResponse>)?.isAxiosError === true;

export const createAppAsyncThunk =
  <R>() =>
  <UrlArgs, BodyArgs, HeaderArgs, EventArgs, Body>(
    m: ThunkMethod,
    url: (args?: UrlArgs) => string,
    cfg: ThunkConfig<R>,
    body?: (args: BodyArgs) => Body | undefined,
    header?: (args?: HeaderArgs) => AxiosRequestHeaders | undefined,
    validator?: (val: unknown) => Zod.SafeParseReturnType<unknown, R>,
    events?: {
      onStart?: (args?: EventArgs) => (dispatch: AppDispatch) => void;
      onSuccess?: (args?: EventArgs) => (dispatch: AppDispatch) => void;
      onError?: (args?: EventArgs) => (dispatch: AppDispatch) => void;
    },
    mockData?: R,
    mockMode = false
  ) =>
    createAsyncThunk<
      R,
      {
        urlArgs?: UrlArgs;
        bodyArgs?: BodyArgs;
        headerArgs?: HeaderArgs;
        eventArgs?: EventArgs;
      },
      {
        rejectValue: ThunkError;
      }
    >(
      cfg.name,
      async ({ urlArgs, bodyArgs, headerArgs, eventArgs }, thunkAPI) => {
        try {
          if (events?.onStart)
            events.onStart(eventArgs)(thunkAPI.dispatch as AppDispatch);

          if (mockMode && mockData) {
            if (events?.onSuccess) {
              events.onSuccess(eventArgs)(thunkAPI.dispatch as AppDispatch);
            }
            return mockData;
          }

          const client = cfg.axiosClient ? cfg.axiosClient : axiosClient;
          const headers = header ? header(headerArgs) : {};
          const resConf: AxiosRequestConfig = {
            data: body && bodyArgs && body(bodyArgs),
            headers,
          };

          let resp: AxiosResponse<R>;
          if (m === ThunkMethod.get || m === ThunkMethod.delete) {
            resp = await (client as AxiosClient)[m](url(urlArgs), resConf);
          } else {
            resp = await (client as AxiosClient)[m](
              url(urlArgs),
              resConf.data,
              resConf
            );
          }
          let data: R = resp[cfg.responseProperty];
          if (validator) {
            const check = validator(data);
            if (!check.success) {
              return thunkAPI.rejectWithValue({
                message: cfg.error,
                validation: `validation error: [${JSON.stringify(
                  check.error
                )}]`,
              });
            }
            data = check.data;
          }

          if (events?.onSuccess) {
            events.onSuccess(eventArgs)(thunkAPI.dispatch as AppDispatch);
          }

          return data;
        } catch (e) {
          if (events?.onError)
            events.onError(eventArgs)(thunkAPI.dispatch as AppDispatch);

          if (isAxiosError(e)) {
            return thunkAPI.rejectWithValue({
              error: { raw: e, axios: e },
              message: cfg.error,
            });
          }

          return thunkAPI.rejectWithValue({
            error: { raw: e },
            message: cfg.error,
          });
        }
      }
    );
