import { createSlice } from "@reduxjs/toolkit";

const initState = {
  userInfo: {
    email: "test@test",
    name: "John",
    sex: "male",
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {},
});

export default UserSlice.reducer;
