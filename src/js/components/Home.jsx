import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState(null); 
	
		const handleLightClick = (color) => {
			setActiveLight(color);
		};
	
	return (
		<>
		<div className="semaforo p-3">
			<div className="hanger mx-auto"> </div>
			<div className="square justify-content-center mx-auto py-2 d-flex align-items-center">
				<div className={`light red ${activeLight === 'red' ? 'shadow-active' : ''}`} onClick={() => handleLightClick('red')}> </div>
				<div className={`light yellow ${activeLight ==='yellow' ? 'shadow-active' : ''}`} onClick={() => handleLightClick('yellow')}></div>
				<div className={`light green ${activeLight ==='green' ? 'shadow-active':''}`} onClick={() => handleLightClick('green')}></div>
					
			</div>
		</div>
		</>
	);
};

export default Home;