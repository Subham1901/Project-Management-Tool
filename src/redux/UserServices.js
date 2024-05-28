import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllUsers = createAsyncThunk("getUsers", async () => {
  let { data } = await axios.get("http://localhost:3000/api/users");
  return data;
});

export const getUsersDropDownList = createAsyncThunk(
  "userDropDownList",
  async () => {
    try {
      let { data } = await axios.get(
        "http://localhost:3000/api/dropdownuserlist"
      );
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error?.message | "Unable to fetch users");
      return error;
    }
  }
);

export const addAUser = createAsyncThunk("addUser", async (userInfo) => {
  try {
    let { data } = await axios.post(
      "http://localhost:3000/api/users",
      userInfo
    );
    console.log(userInfo);
    toast.success(`User ${userInfo?.firstName} ${userInfo?.lastName} added`);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.message | "Unable to add user");
    return error;
  }
});
