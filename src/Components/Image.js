import React from 'react'
import './Image.css'

const Image =(props)=>{
    return(
        
            <img src={props.url} style={{display:"block",maxWidth:"100%"}} alt="img" /> 
    
    )
}

export default Image