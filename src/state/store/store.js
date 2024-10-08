import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "../player/playerSlice";
import createSagaMiddleware from "@redux-saga/core";
import songsSlice from "../songs/songsSlice";
import songSaga from "../saga/songSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    player: playerSlice,
    songs: songsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(songSaga);
