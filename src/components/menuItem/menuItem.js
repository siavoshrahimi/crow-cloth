import React from "react";

import {withRouter} from 'react-router-dom';

import {MenuItemContainer,BackgroundImageContainer,SubtitleContainer,TitleContainer,ContainContainer} from "./menuItem.styles";

const MenuItem = ({title,imageUrl,size,linkUrl,history,match}) => {
    return(
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
            <ContainContainer className='content'>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubtitleContainer>shop now</SubtitleContainer>
            </ContainContainer>
        </MenuItemContainer>
    )

}
export default withRouter(MenuItem);