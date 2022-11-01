import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Personaje from "./Personaje.jsx";
import Navbar from "./Navbar.jsx";


const App = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="position-relative m-4"> {/* formato de las tarjetas en la pagina ppal*/ }
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Inicio></Inicio>}></Route>
						<Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default App;
