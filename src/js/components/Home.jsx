import React, { useState } from "react";

//create your first component
const Home = () => {

	const [colorActivo, setColorActivo] = useState("");

	return (
		<div className="semaforo">
			<div className="poste"></div>
			<div className="caja">
				<div className={`luz rojo ${colorActivo === "rojo" ? "active" : ""}`} onClick={() => colorActivo === "rojo" ? setColorActivo("") : setColorActivo("rojo")}></div>
				<div className={`luz amarillo ${colorActivo === "amarillo" ? "active" : ""}`} onClick={() => colorActivo === "amarillo" ? setColorActivo("") : setColorActivo("amarillo")}></div>
				<div className={`luz verde ${colorActivo === "verde" ? "active" : ""}`} onClick={() => colorActivo === "verde" ? setColorActivo("") : setColorActivo("verde")}></div>
			</div>
		</div>
	);
};

export default Home;