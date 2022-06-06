import passportInfoReducer  from "./reducer"

import {IState} from "./types";

import passportInfoSaga from "./sagas"

export default passportInfoReducer;
export {passportInfoSaga};

export * from "./action";

export type {IState };