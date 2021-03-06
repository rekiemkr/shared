//id, image, listener
import React from 'react'
import anime from "../Utils/anime"

export default (props) => {
    
    render(){
    	return( 
	    	<div id={props.id} className={props.debug ? "OpacityButton testBox" ; "OpacityButton"}
	    		style={{cursor:"pointer",position:"relative"}}
	    	>	
	    		<img alt="icon" 
	    			src={props.image} 
	    			style={{
	    				display:"block",
	    				margin:"auto",
	    				maxWidth:"100%",
	    			}}
	    		/>
	    	
	      	</div>
	    )
    }
}

