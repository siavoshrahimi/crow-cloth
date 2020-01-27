import React from "react";

import CollectionItem from "../collection-item/collectionItem";

import {CollectionPreviewContainer,CollectionPreviewTitle,PreviewContainer} from "./collectionPreview.styles";

const CollectionPreview = ({title,items}) => {
    return(
        <CollectionPreviewContainer>
            <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
            <PreviewContainer>
                {items.filter((item,idx) => idx < 4).map(item =>(
                    <CollectionItem key={item.id} item={item} />
                ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}
export default CollectionPreview;