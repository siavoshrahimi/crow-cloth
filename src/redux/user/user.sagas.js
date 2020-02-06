import {takeLatest,put,all,call} from 'redux-saga/effects';

import UserActionType from "./userType";

import {googleProvider,auth,creatUserProfileDocument} from "../../firebase/firebase.utils";

import {signInFailure,signInSuccess} from "./userAction";

export function* getSnapshotFromUserAuth(userAuth) {
    try{
        const userRef = yield call(creatUserProfileDocument,userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id , ...userSnapshot.data()}))
    }catch (error) {
        yield put(signInFailure(error))
    }

}

export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
 yield takeLatest(
     UserActionType.GOOGLE_SIGN_IN_START,
     signInWithGoogle
 )
}

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);

    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionType.EMAIL_SIGN_IN_START,
        signInWithEmail
    )
}

export function* userSaga() {
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart)])
}