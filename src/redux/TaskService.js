import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllTasks = createAsyncThunk("getTasks", async () => {
  try {
    let data = await fetch("http://localhost:3000/api/tasks");
    data = await data.json();

    return data;
  } catch (error) {
    toast.error(error?.message | "Something went wrong");
    return error;
  }
});

export const createATask = createAsyncThunk("createTask", async (taskInfo) => {
  try {
    let { data } = await axios.post(
      "http://localhost:3000/api/tasks",
      taskInfo
    );
    return data;
  } catch (error) {
    toast.error(error?.message | "Something went wrong");
  }
});

export const getATask = createAsyncThunk("getTask", async (taskId) => {
  try {
    let { data } = await axios.get(`http://localhost:3000/api/tasks/${taskId}`);
    return data;
  } catch (error) {
    toast.error(error?.message | "Something went wrong");
  }
});
