import React from "react";

import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/collectionPreview";

class ShopPage extends React.Component{
    state={
        collections: SHOP_DATA
    }
    render() {
        return(
            <div>
                {this.state.collections.map(({id,...otherCollections}) =>(
                    <CollectionPreview key={id} {...otherCollections}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;