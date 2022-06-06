import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import {SelectOptions} from "../../types/UIRelated"
import * as actionTypes from "./types";
import {getAppTypesSuccess,getNationalitiesSuccess,setLoading,getUserTypesSuccess} from "./action";
import {getAppTypes,getNations,getUserTypes} from "../../Services/lookup"



function* onAppTypesRequest() {
    try {
        yield put(setLoading(true));
        const appTypes:SelectOptions[]  = yield call(getAppTypes);
        yield put(getAppTypesSuccess(appTypes));
        yield put(setLoading(false));
    } catch (error) {

    }
  }

  
function* onNationalitiesRequest() {
  try {
      yield put(setLoading(true));
      const nationalities:SelectOptions[]  = yield call(getNations);
      yield put(getNationalitiesSuccess(nationalities));
      yield put(setLoading(false));
  } catch (error) {

  }
}

function* onUserTypesRequest() {
  try {
      yield put(setLoading(true));
      const userTypes:SelectOptions[]  = yield call(getUserTypes);
      yield put(getUserTypesSuccess(userTypes));
      yield put(setLoading(false));
  } catch (error) {

  }
}

function* watchOnLookUps() {
    yield takeEvery(actionTypes.AppTypes_request, onAppTypesRequest);
    yield takeEvery(actionTypes.Nationalities_request, onNationalitiesRequest);
    yield takeEvery(actionTypes.AppTypes_request, onUserTypesRequest);
  }

  export default function* lookUpSaga() {
    yield all([fork(watchOnLookUps)]);
  }