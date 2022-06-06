import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions from "./action";
import { createPassportInfo,fetchPassportInfo,updatePassportInfo } from "../../Services/passportInfo";


function* onPassportInfoRequest({ type, payload }: actionTypes.CreateRequestActionType) {
  try {
    let res: actionTypes.IState = yield call(createPassportInfo, payload);
    yield put(actions.getCreateSuccess(res));
  } catch (error) {

  }
}

function* onFetchRequest({ type,payload }: actionTypes.FetchActionType) {
  try {
    let res: actionTypes.IState = yield call(fetchPassportInfo, payload);
    yield put(actions.getFetchIncompleteSuccess(res));
  } catch (error) {

  }
}

function* onUpdateRequest({ type,payload }: actionTypes.UpdateActionType) {
  try {
     let res: actionTypes.IState = yield call(updatePassportInfo, payload);
     yield put(actions.getUpdateSuccess(res));
  } catch (error) {

  }
}




function* watchOnPassportInfo() {
  yield takeEvery(actionTypes.CreateRequest, onPassportInfoRequest);
  yield takeEvery(actionTypes.FetchRequest, onFetchRequest);
  yield takeEvery(actionTypes.UpdateRequest, onUpdateRequest);

}

export default function* passportInfoSaga() {
  yield all([fork(watchOnPassportInfo)]);
}