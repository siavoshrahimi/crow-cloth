import {takeLatest,put,all,call} from 'redux-saga/effects';

import UserActionType from "./userType";

import {googleProvider,auth,creatUserProfileDocument,getCurrentUser} from "../../firebase/firebase.utils";

import {signInFailure,signInSuccess,signOutSuccess,signOutFailure,signUpFailure,signUpSuccess} from "./userAction";


//share functionality between sign in with pop up and email
export function* getSnapshotFromUserAuth(userAuth,additionalData) {
    try{
        const userRef = yield call(creatUserProfileDocument,userAuth,additionalData);
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
       yield put(signOutSuccess());
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

//user sign up
export function* signUp({payload:{email,password,displayName}}) {
    try {
        const{user} =yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user,additionalData:{displayName}}));
    }catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart() {
    yield takeLatest(
        UserActionType.SIGN_UP_START,
        signUp
    )
}

//sign in after sign up
export function* signInAfterSignUp({payload:{user,additionalData}}) {
    yield getSnapshotFromUserAuth(user,additionalData)
}

export function* onSignUpSuccess() {
    yield takeLatest(
        UserActionType.SIGN_UP_SUCCESS,
        signInAfterSignUp
    )
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}
