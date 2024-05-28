import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const instance = axios.create({
  baseURL:
    "https://e86d5374-73e1-4057-b131-680f6786616f-00-3r8s3ocviqhrp.pike.replit.dev/",
});

export const getAllTasks = createAsyncThunk("getTasks", async () => {
  let { data } = await instance.get("api/tasks");
  return data;
});

export const createATask = createAsyncThunk("createTask", async (taskInfo) => {
  try {
    let { data } = await instance.post("api/tasks", taskInfo);
    return data;
  } catch (error) {
    toast.error(error?.message | "Something went wrong");
  }
});

export const getATask = createAsyncThunk("getTask", async (taskId) => {
  try {
    let { data } = await instance.get(`api/tasks/${taskId}`);
    return data;
  } catch (error) {
    toast.error(error?.message | "Something went wrong");
  }
});
