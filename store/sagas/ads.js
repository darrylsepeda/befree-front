import api from "../../services/api";
import { call, put, select } from "redux-saga/effects";

const Api = new api();

import { Creators as AdsActions } from "../ducks/ads";

export function* setAds() {
  try {
    let token;

    if (localStorage.getItem("auth-token")) {
      yield put(AdsActions.setAdsFailure("Without authorization"));
    } else {
      token = localStorage.getItem("auth-token");
      const { data } = yield call(Api.index(token));

      yield put(AdsActions.setAdsSuccess(data.docs));
    }
  } catch (err) {
    yield put(AdsActions.setAdsFailure("Failure at fetching ads"));
  }
}
