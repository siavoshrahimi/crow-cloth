import React,{useEffect,lazy, Suspense} from "react";
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from "../../redux/shop/shopAction";
import Spinner from "../../components/spinner/Spinner";


const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collectionOverviewContainer'));
const CollectionPageContainer = lazy(() => import("../collection/collectionContainer"));



const ShopPage = ({match,updateCollections}) =>{

    useEffect(() =>{
        updateCollections()
    },[updateCollections])

    return(
        <div className='shop-page'>
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
            </Suspense>
        </div>
)
}




const mapDispatchToProps = dispatch =>({
    updateCollections: () => dispatch(fetchCollectionsStart())
})




export default connect(null,mapDispatchToProps)(ShopPage);