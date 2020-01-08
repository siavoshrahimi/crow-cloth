import React from "react";
import './collectionPreview.scss';
import CollectionItem from "../collection-item/collectionItem";

const CollectionPreview = ({title,items}) => {
    return(
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item,idx) => idx < 4).map(({id,...otherItems}) =>(
                    <CollectionItem key={id} {...otherItems} />
                ))}
            </div>
        </div>
    )
}
export default CollectionPreview;