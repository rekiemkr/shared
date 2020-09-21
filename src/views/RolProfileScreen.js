import React, {useState} from 'react'
import ButtonMultiState from  '../shared/Buttons/ButtonMultiState'
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";
import circ40 from "../shared/ExampleImages/Circ-40.png"
import circ20 from "../shared/ExampleImages/Circ-20.png"
import circ80 from "../shared/ExampleImages/Circ-80.png"
import rec600 from "../shared/ExampleImages/rec-600.png"
import circ200 from "../shared/ExampleImages/Circ-200.png"
import ButtonCerrar from '../shared/ExampleImages/Buttons/cerrarVentana.png';
import Flex from "../shared/Containers/Flex"
import ProgressBar from "../shared/Indicators/ProgressBar";
import ButtonImage from "../shared/Buttons/ButtonImage"
import ButtonImageWithLabel from "../shared/Buttons/ButtonImageWithLabel"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import ChipController from "../shared/Controllers/ChipContoller"
import CaraInnos from "../shared/ExampleImages/Generic/caraInnos.png"
import Dios from "../shared/ExampleImages/Hubs/dios.png"
import PanelCloseTitleAndSubtitle from "../shared/Panels/PanelCloseTitleAndSubtitle"



function ProfileScreen(props) {
    const [state1, setState1] = useState("off");
    const handleClick=(i)=> {
        console.log('Click ON =>', i);
    }
    return (
        <Flex align="center" direction="column" style={{marginTop:"10%",marginLeft:"10%",marginRight:"10%"}}>
            {/* <Header></Header> */}
            <Flex align="center" style={{margin:"30px", width:"100%"}} justify="space-around">
                <Flex
                    direction="column"
                    align="center"
                >
                    <h4 style={{margin:"1px 20px"}}>{props.title || "Profesora"}</h4>
                    <MaskedAvatar
                        id="colaborador1"
                        avatar={CaraInnos}
                        containerImage={Dios}
                        padding={12}
                        listener={() => console.log('Clicked MarkedAvatar')}
                        maskBorder={100}
                        style={{margin:"10px"}}
                    />
                    </Flex>
                <Flex
                    direction="column"
                    align="center"
                    style={{width:"60%"}}
                >
                    <p>{props.descriptionRol || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
                    <ButtonImageWithLabel
                            id={"siguiente"}
                            image={ImageTest}
                            label={"Siguiente >"}
                            listener={() =>{
                                console.log("boton siguiente")
                            }}
                        >
                    </ButtonImageWithLabel>
                    
                </Flex>
            </Flex>
            <Flex align="center" style={{margin:"30px"}}>
                <PanelCloseTitleAndSubtitle
					id="pwbc6"
					image={rec600}
					imageRight={circ200}
					imageClose={""}
					buttons={[{ id: 'btn1', image: circ80, label: <h1>Hola</h1> }, { id: 'btn2', image:circ80, label: <h1>Hola2</h1> }, { id: 'btn3', image: circ80, label: <h1>Hola3</h1> }]}
					onClick={(id) => handleClick(id)}
					showSubtitle={true}
					title={''}
					subtitle={'Seleccion multiple'}
					debug={true}
                    listenerClose={() => console.log('Closed')}
                    children = {
                        <ButtonImageWithLabel
                            id={"inicio"}
                            image={ImageTest}
                            label={"Inicio"}
                            listener={() =>{
                                console.log("boton siguiente")
                            }}
                        >
                        </ButtonImageWithLabel>
                    }
				>
				</PanelCloseTitleAndSubtitle>
            </Flex>
        </Flex>
    )
}



function Header(props){
	return(
        <div style={{width:"100%",height:"auto",backgroundColor:"rgba(5,5,5,0.3)"}}>
            <Flex justify="space-around" align="center">
                <Flex 
                    direction="column" 
                    margin="5%"
                    style={{width:"auto",margin:"10px 30px"}}
                >
                    <h6 style={{margin:"0 auto"}}>Titulo titulo</h6>
                    <ProgressBar
                            percentage="30"
                            // image={Bar}
                            padding={'3%'}
                            styleContainer={{width:"100px",border:"1px solid black",borderRadius:"10px",height:"10px"}}
                    >
                    </ProgressBar>
                    <CurrencyHorizontal
                        quantity={30}
                        image={circ20}
                        displayX={true}
                        id="counterbar"
                    ></CurrencyHorizontal>
                </Flex>
                <img src={ImageTest} width="40px" height="40px"></img>
                <h3 style={{margin:"auto 0"}}>20 X 1.2</h3>
                <ButtonImage
					id="btn1"
					image={circ40}
					listener={(id) => { console.log("clicked", id) }}
					scale={1.1} //1.1
					style={{ margin: 10 }} // {}
				/>
            </Flex>
        </div>
	)
}

export default ProfileScreen;