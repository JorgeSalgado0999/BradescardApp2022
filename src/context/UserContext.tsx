import React, {createContext, useState, ReactNode, type Dispatch} from "react";

export type UserType = {
	id: number;
	name: string;
	role: string;
	permissions: string[];
} | null;

export type UserContextType = {
	User: UserType;
	SetUser: (value: UserType) => void;
};

interface Props {
	children: JSX.Element | JSX.Element[] | ReactNode;
}

//export const UserContext = createContext<userContextInterface | null>(null);

const Context = createContext({});

const INITIAL_USER: UserType = {
	id: 0,
	name: "",
	role: "",
	permissions: [""],
};

export const UserProvider = ({children}: Props) => {
	const [User, SetUser] = useState<UserType>(INITIAL_USER);

	return (
		<Context.Provider value={{User, SetUser}}>{children}</Context.Provider>
	);
};

export default Context;
