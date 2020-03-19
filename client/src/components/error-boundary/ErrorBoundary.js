import React,{Component} from "react";

import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from "./ErrorBoundary.style";

class ErrorBoundary extends Component{
    state={hasErrored:false}
    static getDerivedStateFromError(error){
        return{ hasErrored: true}
    }
    componentDidCatch(error,info){
        console.log(error)
    }

    render(){
       return  this.state.hasErrored ?
           (<ErrorImageOverlay>
               <ErrorImageContainer imageUrl={'https://i.imgur.com/yW2W9SC.png'}/>
               <ErrorImageText>Sorry this page is broken</ErrorImageText>
           </ErrorImageOverlay>)
           : this.props.children
    }
}

export default ErrorBoundary;