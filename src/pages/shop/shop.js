import React,{useEffect} from "react";
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from "../../redux/shop/shopAction";


import CollectionOverviewContainer from '../../components/collection-overview/collectionOverviewContainer';
import CollectionPageContainer from "../collection/collectionContainer";




const ShopPage = ({match,updateCollections}) =>{

    useEffect(() =>{
        updateCollections()
    },[updateCollections])

    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    )
}




const mapDispatchToProps = dispatch =>({
    updateCollections: () => dispatch(fetchCollectionsStart())
})




export default connect(null,mapDispatchToProps)(ShopPage);