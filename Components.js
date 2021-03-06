
import React,{useState} from "react";
import Panels from "./ComponentPages/Panels"
import Hubs from "./ComponentPages/Hubs"
import Indicators from "./ComponentPages/Indicators"
import Buttons from "./ComponentPages/Buttons"
import Labels from "./ComponentPages/Labels"
import SimpleForm from "./Forms/SimpleForm"
import ImageTest from "./ExampleImages/Buttons/boton.png";

//import "ComponentName" from "./{Capeta/}Component"
import Loading from "./Loading";

//test images
import circ100 from "./ExampleImages/Circ-100.png"
import circ200 from "./ExampleImages/Circ-200.png"
import circ300 from "./ExampleImages/Circ-300.png"
import circ20 from "./ExampleImages/Circ-20.png"
import circ40 from "./ExampleImages/Circ-40.png"
import circ60 from "./ExampleImages/Circ-60.png"
import circ80 from "./ExampleImages/Circ-80.png"

import rec200 from "./ExampleImages/rec-200.png"
import rec400 from "./ExampleImages/rec-400.png"
import rec600 from "./ExampleImages/rec-600.png"
import rec20 from "./ExampleImages/rec-20.png"
import rec40 from "./ExampleImages/rec-40.png"
import rec60 from "./ExampleImages/rec-60.png"
import rec80 from "./ExampleImages/rec-80.png"

import sq200 from "./ExampleImages/square-200.png"
import sq400 from "./ExampleImages/square-400.png"
import sq20 from "./ExampleImages/square-20.png"
import sq40 from "./ExampleImages/square-40.png"
import sq60 from "./ExampleImages/square-60.png"
import sq80 from "./ExampleImages/square-80.png"
import AvatarContainer from "./ExampleImages/avcont.png"
import Avatar from "./ExampleImages/avatar.png"

import Colaborador from "./ExampleImages/Hubs/tituloColaborador.png"
import starGray from "./ExampleImages/Buttons/estrellaGris.png"
import starGold from "./ExampleImages/Buttons/estrellaDoradaTemplos.png"
import Dios from "./ExampleImages/Hubs/dios.png"
import CaraInnos from "./ExampleImages/Generic/caraInnos.png"
import Images from "./ComponentPages/Images";

const images = {
	circ20: circ20,circ40: circ40,circ60: circ60,circ80: circ80,
	circ100: circ100,circ200: circ200,circ300: circ300,
	rec20: rec20,rec40: rec40,rec60: rec60,rec80: rec80,
	rec200: rec200,rec400: rec400,rec600: rec600,
	sq20: sq20,sq40: sq40,sq60: sq60,sq80: sq80,
	sq200: sq200,sq400: sq400,
	Colaborador,
	Avatar,
	AvatarContainer,
	Dios,
	CaraInnos,
	starGray:starGray, 
	starGold:starGold,
}

export default (props) =>{
	const [compType, setCompType] = useState("Indicators");

	return(
		<div className="Components">
			<h1>{compType}</h1>
			<But text="Textos" listener={setCompType}/>
			<But text="Botones" listener={setCompType}/> 
			<But text="Indicators" listener={setCompType}/>
			<But text="Loaders" listener={setCompType}/> 
			<But text="Panels" listener={setCompType}/>
			<But text="Hubs" listener={setCompType}/>   
			<But text="Labels" listener={setCompType}/>
			<But text="Images" listener={setCompType}/>
			<But text="Forms" listener={setCompType}/>
			<hr/>
			{compType === "Textos" &&
				<div>
					<h1>Título H1</h1>
					<h2>Título H2</h2>
					<h3>Título H3</h3>
					<h4>Título H4</h4>
					<p>Párrafo</p>
					<p className="p1">Párrafo</p>
					<label>Label prueba tílde</label>
					<label className="label1">Label2 prueba tílde</label>
				</div>
			}
			
			{compType === "Botones" &&
				<Buttons images={images}/>
			}

			{compType === "Indicators" &&
				<Indicators images={images}/>
				
			}

			{compType === "Loaders" &&
				<div>
					<Loading id="load_component" color="var(--red)"/>
				</div>
			}

			{compType === "Panels" &&
				<Panels images={images}/>
			}
			{
				compType === "Hubs" &&
				<Hubs images={images}/>
			}
			{compType === "Labels" &&
				<Labels images={images}/>
			}
			{compType === "Images" &&
				<Images images={images}/>
			}
			{compType === "Forms" &&
				<SimpleForm 
					title={<h3 style={{textAlign:"center"}}>Hola soy un titulo</h3>} 
					stylesInput={{borderRadius:"50px",border:"1px solid black"}}		
					inputs={
						[{id:"name", type:"text", placeholder:"Nombre", name:"name"},
						{id:"email", type:"text", placeholder:"Correo", name:"email"},]
					} 
					button={{id:"button",label:<label>Ingresar</label>, image:ImageTest,}}
					idForm={"formstart"}
					styles={{width:"40%",height:"300px",padding:"10px",border:"1px solid black"}}

				/>
			}
		</div>
	)
}


function But(props){
	return(
		<div 
			style={{margin:2,backgroundColor: "blue", color:"white", cursor: "pointer", width:100, padding: 10, textAlign:"center", display:"inline-block"}}
			onClick={()=>{props.listener(props.text)}}>
			{props.text === true ? "OFF" : props.text === false ? "ON" : props.text}
		</div>
	)
}