import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";

import {NavBar} from "components/UI/organisms/navbar";
import {
	Home,
	Login,
	Register,
	Admin,
	Agent,
	CheckList,
	Questions,
} from "components/pages";
import {Main} from "components/templates";
import {ProtectedRoute} from "./ProtectedRoute";

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
				<Route path="agent" element={<Main />}>
					<Route path="" element={<Agent />} />
					<Route path="checklist" element={<CheckList />} />
					<Route path="questions/:page" element={<Questions />} />
					<Route path="upload" element={<Questions />} />
					<Route path="history" element={<Questions />} />
				</Route>
			</Route>

			<Route path="/*" element={<h1>404</h1>} />
		</Routes>
	);
};
