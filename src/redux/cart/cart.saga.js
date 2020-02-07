import {call,put,all,takeLatest} from 'redux-saga/effects';

import UserActionType from '../user/userType';
import {clearCart} from "./cartAction";

//clear cart
export function* clearCartOnSignOut() {
    yield put(clearCart())
}


export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionType.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
    )
}

export function* cartSaga() {
    yield all([call(onSignOutSuccess)])
}
