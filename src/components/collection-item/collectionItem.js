 import React from "react";
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cartAction";

import {CollectionItemContainer,BackgroundImage,NameContainer,PriceContainer,AddButton,CollectionFooterContainer} from "./collectionItem.styles";

 const CollectionItem = ({item,addItem}) =>{
    const {name,imageUrl,price} = item;
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);