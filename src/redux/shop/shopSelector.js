import { createSelector} from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]):[]
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections =>collections ? collections[collectionUrlParam] : null
    );

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

//to check if collection exist when rerender page to debug error occurs because of falsy value receive when component mount (!! turn value to boolean )
export const selectCollectionIsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)