import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Personaje from "./Personaje.jsx";
import Navbar from "./Navbar.jsx";

const App = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Inicio></Inicio>}></Route>
					<Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
				</Routes>
			</BrowserRouter>

		</div>
	);
};

export default App;
