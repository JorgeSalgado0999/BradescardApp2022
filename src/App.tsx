import {useContext, useState, type Dispatch} from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
/* custom imports */
import "./Global/css/flexboxgrid.css";
import "./Global/css/GlobalStyles.css";

import {UserProvider, UserType} from "context/UserContext";
import {Routing} from "./routes/Routing";
import {AlertsProvider} from "context/AlertsContext";

function App() {
	return (
		<UserProvider>
			<AlertsProvider>
				<BrowserRouter>
					<Routing />
				</BrowserRouter>
			</AlertsProvider>
		</UserProvider>
	);
}

export default App;
