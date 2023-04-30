import {Domain} from "./../constants";
import React from "react";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = ({
	children,
	isAllowed,
	redirectTo = "/",
}: any) => {
	if (!isAllowed) {
		console.log("user not logged");

		let path = window.location.href.replace(Domain, "");
		console.log("href:", window.location.href);
		console.log("newPath: ", path);

		return <Navigate to={redirectTo} state={{path: path}} />;
	}

	return children ? children : <Outlet />;
};
