import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as ManageRequestsTypes from "./types";
import * as ManageRequestsActions from "./actions";
import * as ManageRequestsActionsTypes from "./types";
import * as api from "./api";
import { createNewApp,updateNewAppStatus } from "../../Services/newApp";
function* ManageRequest({type,payload}:ManageRequestsTypes.ManageRequestsCREATE) {
    try {
      let res: ManageRequestsTypes.IRequests[] = yield call(api.GetUserApplicationsByUserId, payload);
      //console.log("saga",res)
     yield put(ManageRequestsActions.RequestSuccess(res));
    }
     catch (error) 
     {

    }
  }
  
  function* watchOnManageRequest() {
    yield takeEvery(ManageRequestsActionsTypes.CreateRequest, ManageRequest);
  }
  
  function* ManageRequestAdmin({type}:ManageRequestsTypes.ManageRequestsCREATEAdmin) {
    try {
      let res: ManageRequestsTypes.IRequests[] = yield call(api.GetUserApplicationsAdmin);
     yield put(ManageRequestsActions.RequestSuccess(res));
    }
     catch (error) 
     {

    }
  }
  
  function* watchOnManageRequestAdmin() {
    yield takeEvery(ManageRequestsActionsTypes.CreateRequestAdmin, ManageRequestAdmin);
  }
  
  
  function* ManageRequestAdminOutwardApplications({type}:ManageRequestsTypes.ManageRequestsAdminOutwardApplications) {
    try {
      let res: ManageRequestsTypes.IRequests[] = yield call(api.GetUserApplicationsAdminOutward);
     yield put(ManageRequestsActions.RequestSuccess(res));
    }
     catch (error) 
     {

    }
  }
  
  function* watchOnManageRequestAdminOutwardApplications() {
    yield takeEvery(ManageRequestsActionsTypes.CreateRequestAdminOutwardApplications, ManageRequestAdminOutwardApplications);
  }

  function* ManageRequestAdminInwardSearch({type}:ManageRequestsTypes.ManageRequestsAdminInwardSearch) {
    try {
      let res: ManageRequestsTypes.IRequests[] = yield call(api.GetUserApplicationsAdmin);
     yield put(ManageRequestsActions.RequestSuccess(res));
    }
     catch (error) 
     {

    }
  }
  
  function* watchOnManageRequestAdminInwardSearch() {
    yield takeEvery(ManageRequestsActionsTypes.CreateRequestAdminInwardSearch, ManageRequestAdminInwardSearch);
  }

  function* SelectedRequest({type,payload}:ManageRequestsTypes.ManageSelectedRequest) {
    try {
      yield put(ManageRequestsActions.SelectedRequest(payload));
    } catch (error) {
  

    }
  }
  
  
  function* watchOnSelectedRequest() {
    yield takeEvery(ManageRequestsActionsTypes.SelectedRequest, SelectedRequest);
  }
  

function* onApplicationStatusRequst({ type,PAYLOAD }: ManageRequestsTypes.ApplicationStatusUpdateRequstType) {
  try {
    let res: ManageRequestsTypes.IApplicationStatusUpdateRequst = yield call(updateNewAppStatus, PAYLOAD);
   
    yield put(ManageRequestsActions.ApplicationStatusUpdate(res));
  } 
  catch (error) {

  }
}


function* watchonApplicationStatusRequst() {
  yield takeEvery(ManageRequestsTypes.ApplicationStatusRequst, onApplicationStatusRequst);

}



function* onClearAppRequest({ type }: ManageRequestsTypes.ClearRequstActionType) {
  try {
    yield put(ManageRequestsActions.ClearRequest());
  } catch (error) {
  }
}



function* watchonClearAppRequest() {
  yield takeEvery(ManageRequestsTypes.ClearRequst, onClearAppRequest);

}
  export default function* ManageRequests() {
    yield all([fork(watchOnManageRequest),fork(watchOnManageRequest),fork(watchonClearAppRequest),fork(watchOnManageRequestAdmin),fork(watchonApplicationStatusRequst),fork(watchOnManageRequestAdminOutwardApplications),fork(watchOnManageRequestAdminInwardSearch)]);
  }