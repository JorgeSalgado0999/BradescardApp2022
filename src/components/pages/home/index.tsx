import {AuthAPI} from "apis/APIAuth";
import React, {useContext, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import UserContext, {UserContextType} from "context/UserContext";
import {handleMainPage} from "models/routes&permissions";
import {permissions} from "utils";

export const Home = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const {User, SetUser} = useContext(UserContext) as UserContextType;
	let path = "";

	function decideRoute(role: string): string {
		let mainPage = handleMainPage(role).replace("/", "");
		console.log("rol del usuario", role);

		if (location.state != null) {
			path = location?.state.path;
			console.log("trae path", path);
			let arr = path.split("/"); //la posicion 0 esta vacia
			arr = arr.filter((item) => item != "#");

			console.log("url arr:", arr);
			console.log("mainpage dado el rol:", mainPage);

			//validamos si puede ir a la otra ruta o lo mandamos a la principal de su rol
			if (permissions[role].includes(arr[1])) {
				console.log("tiene acceso..");
				mainPage = path.replace("/#", "");
			}
		}
		console.log("mainPage", mainPage);
		return mainPage;
	}

	useEffect(() => {
		// document.title = "validando sesion...";
		AuthAPI.verfifyUser()
			.then((response) => {
				console.log(response);
				SetUser({
					id: response.user.id,
					name: response.user.nickname,
					role: response.user.role,
					permissions: [response.user.role],
				});
				let newPath = decideRoute(response.user.role);
				navigate(newPath);
			})
			.catch((error) => {
				console.log(error);
				navigate("/login");
			});
	}, []);

	return <div></div>;
};
