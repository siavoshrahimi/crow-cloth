import UserActionType from './userType'


export const googleSignInStart = () =>({
    type: UserActionType.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = user =>({
    type: UserActionType.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error =>({
    type: UserActionType.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = emailAndPassword =>({
    type: UserActionType.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
});

