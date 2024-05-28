import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { instance } from "./TaskService";
export const getAllUsers = createAsyncThunk("getUsers", async () => {
  let { data } = await axios.get(
    "https://e86d5374-73e1-4057-b131-680f6786616f-00-3r8s3ocviqhrp.pike.replit.dev/api/users",
  );
  return data;
});

export const getUsersDropDownList = createAsyncThunk(
  "userDropDownList",
  async () => {
    try {
      let { data } = await instance.get("api/dropdownuserlist");
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error?.message | "Unable to fetch users");
      return error;
    }
  },
);

export const addAUser = createAsyncThunk("addUser", async (userInfo) => {
  try {
    let { data } = await instance.post("api/users", userInfo);
    console.log(userInfo);
    toast.success(`User ${userInfo?.firstName} ${userInfo?.lastName} added`);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.message | "Unable to add user");
    return error;
  }
});
