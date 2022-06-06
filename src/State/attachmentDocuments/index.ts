import attachmentInfoReducer  from "./reducer"

import {IState,IFileAttachment} from "./types";

import attachmentInfoSaga from "./sagas"

export default attachmentInfoReducer;
export {attachmentInfoSaga};

export * from "./action";

export type {IState,IFileAttachment };