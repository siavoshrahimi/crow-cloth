import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectDirectorySection} from "../../redux/directory/directorySelector";

import MenuItem from "../menuItem/menuItem";
import './directory.scss';

const Directory = ({sections}) =>{

        return(
            <div className="directory-menu">
                {sections.map(({id,...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}/>
                 ))}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySection
})

export default connect(mapStateToProps)(Directory);