import {user} from "assets";
import {handleMainPage} from "models/routes&permissions";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// import {getParams} from "auth/AuthFuncs";
import UserContext, {UserContextType} from "context/UserContext";

function handleSession() {
	// return new Promise((resolve, reject) => {
	// 	getParams()
	// 		.then((data: any) => {
	// 			resolve({
	// 				session: true,
	// 				role: data["custom:role"],
	// 				name: data["nickname"],
	// 			});
	// 		})
	// 		.catch((err: any) => {
	// 			reject({
	// 				session: false,
	// 				role: "none",
	// 			});
	// 		});
	// });
	console.log("handleSession");
}

export {handleSession};
