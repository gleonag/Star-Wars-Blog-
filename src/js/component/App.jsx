import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Personaje from "./Personaje.jsx";
import Navbar from "./Navbar.jsx";
import ContextProvider from "../funciones/ContextProvider.jsx";


const App = () => {
	return (
		<div>
			<ContextProvider>
			<Navbar/>
			
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Inicio></Inicio>}></Route>
						<Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
					</Routes>
				</BrowserRouter>
			
			</ContextProvider>
		</div>
	);
};

export default App;
