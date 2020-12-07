import React, { useState, useEffect } from "react";
import Flex from "../../shared/Containers/Flex"
import Absolute from "../../shared/Containers/Absolute"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ButtonMultiState from '../../shared/Buttons/ButtonMultiState'
//import ImagePanel from "../../shared/Panels/ImagedPanel"
//import gameZone from "../../images/general/contajuego.png"
import copa from "../../images/Iconos/incopa.png"
import villavicencio from "../../images/Iconos/inescudovilla.png"
import incerebrodificil from "../../images/Iconos/incerebrodificil.png"
import incerebrofacil from "../../images/Iconos/incerebrofacil.png"
import key from "../../images/header/llaveheader.png"
import timer from "../../images/Iconos/inretry.png"
import door from "../../images/Iconos/inpuerta.png"
import containformacion from "../../images/general/containformacion.png"
import ImagedPanel from "../../shared/Panels/ImagedPanel";
import contasedeheader from "../../images/buttons/contasedeheader.png"
import MaskedAvatar from "../../shared/Hubs/MaskedAvatar"

function TableGame(props) {
    const [startTimer, setstartTimer] = useState(false)
    const [reiniciar, setReiniciar] = useState(false)
    let estado = "on"
    let horas = 0
    let minutos = 0
    let segundos = 0
    let hour = props.date.getHours()
    let minutes = props.date.getMinutes()
    let seconds = props.date.getSeconds()
    if(props.data){
        if(props.schedules[props.data.basic.name]){
            let horarios=[]
            props.schedules[props.data.basic.name].map((e)=>{
                horarios=e.split("-")
                let hi = parseInt(horarios[0])
                let hf = parseInt(horarios[1])
                if(hour>hi && hour<hf){
                    console.log("horas",hi,hf)
                    horas = hf-hour
                    minutos = 59-minutes
                    segundos = 59-seconds
                    estado="off"
                    return null  
                }
                return null  
            })
        }
    }
    useEffect(() => {
        console.log("useeffect estado portal")
        if(props.data){
            if(props.schedules[props.data.basic.name]){
                let horarios=[]
                props.schedules[props.data.basic.name].map((e)=>{
                    horarios=e.split("-")
                    let hi = parseInt(horarios[0])
                    let hf = parseInt(horarios[1])
                    if(hour>hi && hour<hf){
                        console.log("cambia estado")
                        //setStatePortal("off")
                        return null  
                    }else{
                        //setStatePortal("on") 
                        return null 
                    }
                    return null  
                })
            }
        }
        setTimeout(() => {
            setReiniciar(true)
            setstartTimer(true)
        }, 100);
    }, [props])
    //console.log("Estado de puerta",statePortal)
    return (
        <ImagedPanel
            image={containformacion}
            padding="0%"
            style={{ width: "280px", height: "290px" }}
            {...props}
        >
            <Flex direction="column" align="center" style={{ backgroundColor: "rgba(5,5,5,0.3)", borderRadius: "20px", width: "100%", padding: "10px", height: "100%" }}>
                <Flex align={"center"} style={{ width: "100%", height: '20%' }}>
                    <Flex align="center" style={{}}>
                        <img alt="cerebro" src={props.data.racha === true ? incerebrodificil : incerebrofacil} ></img>
                    </Flex>
                    <Flex style={{ margin: "10px 10px" }} align="center">
                        <h5 style={{ fontFamily: 'Source Serif Pro' }}>{"Sede "}  {props.data.basic.name || "CIUDAD"}</h5>
                    </Flex>
                </Flex>
                <Flex direction={"column"} align={"center"} style={{ width: "100%", height: '27.5%' }}>
                    <Flex style={{ width: "100%", height: '60%' }}>
                        <img style={{ height: '90%' }} alt="shell" src={props.escudos[props.data.basic.name] || villavicencio} ></img>
                    </Flex>
                    <Flex align='center' style={{ width: "100%", height: '30%' }}>
                        <h5 style={{ fontFamily: 'Source Serif Pro' }}>{props.data.basic.name || "Ciudad"}</h5>
                    </Flex>
                </Flex>
                <Flex style={{ justifyContent: "space-around", width: "100%", height: '27%' }} align="center">
                    <Flex direction={"column"} align={"center"} style={{ width: '100%', height: '100%' }}>
                        <Flex align='center' style={{ width: "30%", height: '70%' }}>
                            <Flex id={props.id} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "black", top: "10px"}} >
                                <MaskedAvatar
                                    id="sedeHeader"
                                    paddingTop={"25%"}
                                    avatar={props.sedes[props.data.basic.name]}
                                    styleImage={{ borderRadius: "50%" }}
                                    containerImage={contasedeheader}
                                    padding={"15px 5px"}
                                    listener={() => console.log('Clicked MarkedAvatar')}
                                    maskBorder={50}
                                />
                            </Flex>
                        </Flex>
                        <Flex align='center' style={{ width: "100%", height: '30%' }}>
                            <h5 style={{ fontFamily: 'Source Serif Pro' }}>X 2.0</h5>
                        </Flex>
                    </Flex>
                    <Flex direction='column' style={{ width: '100%', height: '100%' }}>
                        <Flex align='center' style={{ width: "100%", height: '70%' }}>
                            <img alt="placelogo" src={key} ></img>
                        </Flex>
                        <Flex align='center' style={{ width: "100%", height: '30%' }}>
                            <h5 style={{ fontFamily: 'Source Serif Pro' }}>{'20 /' + props.data.agent.currencies.keys_required.quantity }</h5>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex style={{ justifyContent: "space-around", width: "100%", height: '28%' }} align="center">
                    <Flex>
                        <CurrencyHorizontal
                            quantity={props.data.keysRequiredForOpen || 0}
                            image={copa}
                            //displayX={true}
                            id="counterCup"
                            direction="column"
                            fontSize="1em"
                        ></CurrencyHorizontal>
                    </Flex>
                    <Flex direction={"column"} align={"center"} >
                        <Flex>
                            <ButtonMultiState
                                id="btn2"
                                state={estado}
                                scale={1.2} //1.1
                                images={{ off: door, on: door }}
                                listeners={{
                                    off: () => { },
                                    on: () => { props.listener(5); },
                                }}
                                styles={{ off: { filter: "grayscale(100%)" } }}
                            >
                            </ButtonMultiState>
                        </Flex>
                    </Flex>
                    <div >
                        <CurrencyHorizontal
                            quantity={30}
                            image={timer}
                            //displayX={true}
                            id="counterArrows"
                            styleImage={{ width: "28px" }}
                            direction="column"
                            fontSize="1em"
                        ></CurrencyHorizontal>
                    </div>
                </Flex>

            </Flex>
        </ImagedPanel>
    )
}

export default TableGame;