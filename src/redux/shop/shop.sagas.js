import {takeLatest,call,put,all} from 'redux-saga/effects';

import ShopActionTypes from "./shopTypes";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFail,  fetchCollectionsSuccess} from "./shopAction";

export function* fetchCollectionAsync() {

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionMap))
    }catch (error) {
        yield put(fetchCollectionsFail(error.message))
    }

}

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}

export function* shopSaga() {
    yield all([call(fetchCollectionStart)])
}