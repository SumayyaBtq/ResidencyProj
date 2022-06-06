import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions from "./action";
import { createAttachemnt,fetchAttachemnt,updateAttachment } from "../../Services/fileAttachment";


function* onCreateRequest({ type, payload }: actionTypes.CreateRequestActionType) {
  try {
    let res: actionTypes.IState = yield call(createAttachemnt, payload);
    yield put(actions.getCreateSuccess(res));
  } catch (error) {

  }
}


function* onFetchRequest({ type,payload }: actionTypes.FetchActionType) {
  try {
    let res: actionTypes.IState = yield call(fetchAttachemnt, payload);
    yield put(actions.getFetchIncompleteSuccess(res));
  } catch (error) {

  }
}


function* onUpdateRequest({ type,payload }: actionTypes.UpdateActionType) {
  try {

     let res: actionTypes.IState = yield call(updateAttachment, payload);
     yield put(actions.getUpdateSuccess(res));
  } catch (error) {

  }
}


function* watchOnAttachmentInfo() {
  yield takeEvery(actionTypes.CreateRequest, onCreateRequest);
  yield takeEvery(actionTypes.FetchRequest, onFetchRequest);
  yield takeEvery(actionTypes.UpdateRequest, onUpdateRequest);

}

export default function* attachmentInfoSaga() {
  yield all([fork(watchOnAttachmentInfo)]);
}