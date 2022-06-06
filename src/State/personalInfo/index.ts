import personalInfoReducer  from "./reducer"


import {IState} from "./types";

import personalInfoSaga from "./sagas"

export default personalInfoReducer;

export {personalInfoSaga};


export * from "./action";

export type {IState };