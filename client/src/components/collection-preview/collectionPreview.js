import React from "react";
import {withRouter} from 'react-router-dom'

import CollectionItem from "../collection-item/collectionItem";

import {CollectionPreviewContainer,CollectionPreviewTitle,PreviewContainer} from "./collectionPreview.styles";

const CollectionPreview = ({title,items,history,match}) => {
    return(
        <CollectionPreviewContainer>
            <CollectionPreviewTitle onClick={() =>history.push(`${match.path}/${title.toLowerCase()}`)}>
                {title.toUpperCase()}
            </CollectionPreviewTitle>
            <PreviewContainer>
                {items.filter((item,idx) => idx < 4).map(item =>(
                    <CollectionItem key={item.id} item={item} />
                ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}
export default withRouter(CollectionPreview);