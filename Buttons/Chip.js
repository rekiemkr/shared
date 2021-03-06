import React, {useState} from 'react'
import "../../shared/SimpleButton.css"

function Chip(props){
    const [active,setActive] = useState(props.active)
    const [image] = useState(props.active === true?props.imageselect:props.imagenoselect)
	const clickHandler = (e) => {
        if(props.listener){
            if(active===false){
                props.listener([e,true])
            }
            else{
                props.listener([e,false])
            }
            setActive(!props.active)
        }
        if(props.handle){
            props.handle()
        }
	}
   let color = props.color || "purple"
   if(color === "var(--purple)") color = "purple";
   if(color === "var(--pink)") color = "pink";
   if(color === "var(--orange)") color = "orange";
   if(color === "var(--yellow)") color = "yellow";
   
   if(props.disable) color = "grey";
   const style = {
       
   }
   if(props.labelColor){style.color = props.labelColor}
   if(props.bgColor){style.backgroundColor = props.bgColor}

 	return( 
    	<div 
    		id={props.id}
            onClick={clickHandler}
            style={{cursor:"pointer", display:"flex", alignItems: props.align || "center", justifyContent: props.justify || "center", position:"relative",...props.style}}
		>
            <img id={props.id}  style={{position:"absolute",width:'100%'}} src={image} alt='background' ></img>
			{props.label}
		</div>
    )
}

export default Chip;