import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions from "./action";
import { createNewApp,fetchIncompleteNewApp,updateNewApp ,getAppRequest} from "../../Services/newApp";


function* onNewAppRequest({ type, payload }: actionTypes.CreateRequestActionType) {
  try {
    let res: actionTypes.IState = yield call(createNewApp, payload);
    yield put(actions.getCreateSuccess(res));
  } catch (error) {

  }
}

function* onIncompleteAppRequest({ type,payload }: actionTypes.FetchIncompleteActionType) {
  try {

    let res: actionTypes.IState = yield call(fetchIncompleteNewApp, payload);
    console.log("res in onIncompleteAppRequest saga ",res);
    yield put(actions.getFetchIncompleteSuccess(res));
  } catch (error) {

  }
}

function* onUpdateAppRequest({ type,payload }: actionTypes.UpdateActionType) {
  try {

    let res: actionTypes.IState = yield call(updateNewApp, payload);
    yield put(actions.getUpdateSuccess(res));
  } catch (error) {

  }
}


function* onGetAppRequest({ type,payload }: actionTypes.GetRequestActionType) {
  try {
    let res: actionTypes.IState = yield call(getAppRequest, payload);
    yield put(actions.getUpdateSuccess(res));
  } catch (error) {

  }
}


function* onLoadingAppRequest({ type,payload }: actionTypes.GetRequestActionType) {
  try {
    yield put(actions.loadingRequest(true));
  } catch (error) {
    yield put(actions.loadingRequest(false));
  }
}


function* onClearAppRequest({ type }: actionTypes.ClearRequstActionType) {
  try {
    yield put(actions.ClearRequest());
  } catch (error) {
    yield put(actions.loadingRequest(false));
  }
}

function* watchOnNewApp() {
  yield takeEvery(actionTypes.CreateRequest, onNewAppRequest);
  yield takeEvery(actionTypes.IncompleteFetchRequest, onIncompleteAppRequest);
  yield takeEvery(actionTypes.UpdateRequest, onUpdateAppRequest);
  yield takeEvery(actionTypes.GetRequest, onGetAppRequest);
  yield takeEvery(actionTypes.RequestLoading, onLoadingAppRequest);
  yield takeEvery(actionTypes.ClearRequst, onClearAppRequest);
}

export default function* newAppSaga() {
  yield all([fork(watchOnNewApp)]);
}