import React from "react";
import {connect } from 'react-redux';

import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shopSelector";

import CollectionPreview from "../collection-preview/collectionPreview";

import {CollectionOverviewContainer} from "./collectionOverview.styles";

const CollectionOverview = ({collections})=>{
    return(
        <CollectionOverviewContainer>
            {collections.map(({id,...otherCollections}) =>(
                <CollectionPreview key={id} {...otherCollections}/>
            ))}
        </CollectionOverviewContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);