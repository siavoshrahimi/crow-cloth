import React from "react";

import {GroupContainer,FormInputContainer,FormInputLabel} from "./formInput.styles";


const FormInput = ({label,...otherProps}) =>{
    return(
        <GroupContainer>
            <FormInputContainer {...otherProps}/>
            {
                label?
                    (<FormInputLabel className={`${otherProps.value.length ? 'shrink': ''}`}>
                        {label}
                    </FormInputLabel>)
                    :null
            }
        </GroupContainer>
    )
}

export default FormInput;