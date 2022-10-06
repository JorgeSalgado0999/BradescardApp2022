import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";

import {NavBar} from "components/UI/organisms/navbar";
import {Home, Login, Register, Admin, Agent} from "components/pages";
import {ProtectedRoute} from "./components/ProtectedRoute";

import UserContext, {
	UserContextType,
	UserProvider,
	UserType,
} from "context/UserContext";

export const Routing = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	return (
		<Routes>
			{/* public urls */}
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			{/* admin urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={!!User && User.permissions.includes("admin")}
					/>
				}
			>
				<Route path="/admin/" element={<Admin />} />
				<Route path="/admin/properties" element={<Register />} />
			</Route>

			{/* agent urls */}
			<Route element={<ProtectedRoute isAllowed={!!User} />}>
				<Route path="/agent/" element={<Agent />} />
				<Route path="/agent/properties" element={<Register />} />
			</Route>
		</Routes>
	);
};
