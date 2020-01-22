import React from "react";
import {connect } from 'react-redux';

import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shopSelector";

import CollectionPreview from "../collection-preview/collectionPreview";

import './collectionOverview.scss';

const CollectionOverview = ({collections})=>{
    return(
        <div className='collections-overview'>
            {collections.map(({id,...otherCollections}) =>(
                <CollectionPreview key={id} {...otherCollections}/>
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);