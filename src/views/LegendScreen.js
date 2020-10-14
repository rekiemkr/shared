import React from 'react'
import ButtonImageWithLabel from  '../shared/Buttons/ButtonImageWithLabel'
import logosantoto from "../images/general/logosantoto.png";
import button from "../images/buttons/btnprincipal.png";
import imageTitle from "../images/general/bienvenido.png";


function LegendScreen(props) {
    return (
        <div id="legendScreen" style={{height: "100vh",display:"flex",alignItems:"center", justifyContent:"center"}}>
            <div style={{margin: "auto",display:"flex",alignItems:"center", justifyContent:"space-around",flexDirection:"column",maxWidth: "400px",...props.styles}}>
                <div style={{padding:"30px"}}>
                    <img alt={"logo"} src={logosantoto} style={{width:"100%",padding:"5px"}}></img>
                </div >
                {props.title && 
                    props.title
                }
                <div>
                    <img alt={"logo"} src={imageTitle} style={{width:"100%",padding:"10px"}}></img>
                </div> 
                {props.legend || <p style={{textAlign:"center",padding:"25px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
                <div style={{display:"flex",justifyContent:"center", margin:"0 auto",width:props.widthButton || "auto p"}}>
                    <ButtonImageWithLabel
                        id={props.buttonId || "firstbutton"}
                        image={props.buttonImage || button}
                        label={props.buttonLabel || <label style={{fontWeight:"900",fontSize: "25px"}}>INGRESAR</label>}
                        listener={() =>{
                            props.listener(2)
                        }}
                        
                    >
                    </ButtonImageWithLabel>
                </div>
            </div> 
        </div>
    )
}

export default LegendScreen;