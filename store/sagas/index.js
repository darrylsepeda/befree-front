import { all, takeLatest } from "redux-saga/effects";
import { setAds } from "./ads";
import { Types as AdsTypes } from "../ducks/ads";

export default function* rootSaga() {
  yield all([takeLatest(Types.SET_REQUEST, setAds)]);
}
