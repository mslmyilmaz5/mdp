import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Bohemian Rhapsody",
  artist: "Queen",
  image:
    "https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
  duration: "5:55",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentTrack } = playerSlice.actions;
export default playerSlice.reducer;
