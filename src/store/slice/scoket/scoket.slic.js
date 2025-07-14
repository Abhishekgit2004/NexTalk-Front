import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const initialState = {
  socket: null,
  onlineUser: null,
};
export const scoketSlice = createSlice({
  name: "scoket",
  initialState,
  reducers: {
    initialSocket: (state, actions) => {
      const socket = io(import.meta.env.VITE_DB_ORIGIN, {
        query: {
          userid: actions.payload,
        },
      });
      state.socket = socket;
    },

    setOnlineUser: (state, actions) => {
      state.onlineUser = actions.payload;
    },
  },
});

export const { initialSocket, setOnlineUser } = scoketSlice.actions;

export default scoketSlice.reducer;
