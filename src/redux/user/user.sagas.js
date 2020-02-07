import {takeLatest,put,all,call} from 'redux-saga/effects';

import UserActionType from "./userType";

import {googleProvider,auth,creatUserProfileDocument,getCurrentUser} from "../../firebase/firebase.utils";

import {signInFailure,signInSuccess,signOutSuccess,signOutFailure} from "./userAction";


//share functionality between sign in with pop up and email
export function* getSnapshotFromUserAuth(userAuth) {
    try{
        const userRef = yield call(creatUserProfileDocument,userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id , ...userSnapshot.data()}))
    }catch (error) {
        yield put(signInFailure(error))
    }

}

//sign in with google pop up
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

//sign in with email and password
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

//check for persistence
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return ;
        yield getSnapshotFromUserAuth(userAuth);
    }catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(
        UserActionType.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

//user sign out
export function* userSignOut() {
   try {
       yield auth.signOut();
       yield put(signOutSuccess())
   }catch (error) {
       yield put(signOutFailure(error))
   }

}

export function* onUserSignOut() {
    yield takeLatest(
        UserActionType.SIGN_OUT_START,
        userSignOut
    )
}

export function* userSaga() {
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onUserSignOut)])
}
