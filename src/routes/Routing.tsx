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
	History,
	Partners,
	Users,
	CreateUser,
	CreatePartner,
} from "components/pages";
import {Main} from "components/templates";
import {ProtectedRoute} from "./ProtectedRoute";

import UserContext, {
	UserContextType,
	UserProvider,
	UserType,
} from "context/UserContext";
import {
	CreateQuestion,
	CreateStore,
	PartnerQuestions,
	QuestionsList,
	Stores,
} from "components/pages/admin";

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
						isAllowed={User && User.permissions.includes("admin")}
					/>
				}
			>
				<Route path="admin" element={<Main />}>
					<Route path="" element={<Admin />} />
					<Route path="users" element={<Users />} />
					<Route path="users/create" element={<CreateUser />} />
					<Route path="partners" element={<Partners />} />
					<Route path="partners/create" element={<CreatePartner />} />
					<Route
						path="partners/:partnerId/questions"
						element={<PartnerQuestions />}
					/>
					<Route path="partners/stores/:partnerId" element={<Stores />} />
					<Route
						path="partners/stores/:partnerId/create"
						element={<CreateStore />}
					/>
					<Route path="history" element={<History />} />
					<Route path="questions" element={<QuestionsList />} />
					<Route path="questions/create" element={<CreateQuestion />} />
				</Route>
			</Route>

			{/* agent urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={User && User.permissions.includes("agent")}
					/>
				}
			>
				<Route path="agent" element={<Main />}>
					<Route path="" element={<Agent />} />
					<Route path="checklist" element={<CheckList />} />
					<Route path="questions/" element={<Questions />} />
					<Route path="history" element={<History />} />
				</Route>
			</Route>

			<Route path="/*" element={<h1>404</h1>} />
		</Routes>
	);
};
