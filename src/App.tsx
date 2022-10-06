import {useContext, useState, type Dispatch} from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
/* custom imports */
import "./Global/css/flexboxgrid.css";
import "./Global/css/GlobalStyles.css";

import {UserProvider, UserType} from "context/UserContext";
import {Routing} from "./Routing";

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
