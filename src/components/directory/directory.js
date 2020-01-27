import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectDirectorySection} from "../../redux/directory/directorySelector";

import MenuItem from "../menuItem/menuItem";

import {DirectoryContainer} from "./directory.styles";

const Directory = ({sections}) =>{

        return(
            <DirectoryContainer>
                {sections.map(({id,...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}/>
                 ))}
            </DirectoryContainer>
        )
}

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySection
})

export default connect(mapStateToProps)(Directory);