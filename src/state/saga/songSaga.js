import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsSuccess } from "../songs/songsSlice";
import axios from "axios";

function* workGetSongsFetch() {
  const songs = yield call(() => axios.get("/api/web-team/case/spotify.json"));
  yield put(getSongsSuccess(songs.data));
}
function* songSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongsFetch);
}

export default songSaga;
