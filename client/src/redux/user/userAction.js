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

export const checkUserSession = () =>({
    type: UserActionType.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: UserActionType.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) =>({
    type: UserActionType.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = userCredential =>({
    type:UserActionType.SIGN_UP_START,
    payload:userCredential
});

export const signUpSuccess = ({user, additionalData}) =>({
    type:UserActionType.SIGN_UP_SUCCESS,
    payload:{user,additionalData}
});

export const signUpFailure = error =>({
    type:UserActionType.SIGN_UP_FAILURE,
    payload:error
});

