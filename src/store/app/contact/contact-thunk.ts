import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactFormData, contactFormDataSchema } from "../../../types/contact";

export type LogEntry = {
  level: string;
  message: string;
};

interface ErrorResponse {
  error: string;
  fields?: { [key: string]: string };
  logs?: LogEntry[];
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

export const submitContactForm = createAsyncThunk<
  ContactFormData,
  ContactFormData,
  {
    rejectValue: ThunkError;
  }
>("contact/submitContactForm", async (formData, thunkAPI) => {
  try {
    const response = await axios.post("/api/contact", formData);

    const validator = contactFormDataSchema.safeParse(response.data);

    if (!validator.success) {
      return thunkAPI.rejectWithValue({
        validation: "Validation failed",
        message: "Invalid response data",
        error: { raw: validator.error },
      });
    }
    return validator.data;
  } catch (e) {
    return thunkAPI.rejectWithValue({
      error: { raw: e },
      message: "Something went wrong",
    });
  }
});
