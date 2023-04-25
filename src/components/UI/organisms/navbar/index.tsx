import React, {useContext, useState} from "react";
import styles from "./NavBar.module.css";
import {logo, user, socio} from "assets";
import {MenuItem} from "components/UI/atoms";
import UserContext, {UserContextType} from "context/UserContext";

export const NavBar = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;
	console.log(User);

	var dataAgent = require("assets/agentMenu.json");
	var dataAdmin = require("assets/adminMenu.json");

	const data = User?.permissions[0] === "admin" ? dataAdmin : dataAgent;

	const [item0, setItem0] = useState("active");
	const [item1, setItem1] = useState("unactive");
	const [item2, setItem2] = useState("unactive");
	const [item3, setItem3] = useState("unactive");
	const [item4, setItem4] = useState("unactive");
	const Items = [item0, item1, item2, item3, item4];

	var count = 0;

	function activeTab(tab: number) {
		setItem0("unactive");
		setItem1("unactive");
		setItem2("unactive");
		setItem3("unactive");
		setItem4("unactive");
		console.log(tab);
		switch (tab) {
			case 0:
				setItem0("active");
				break;
			case 1:
				setItem1("active");
				break;
			case 2:
				setItem2("active");
				break;
			case 3:
				setItem3("active");
				break;
			case 4:
				setItem4("active");
				break;
		}
	}

	return (
		<nav>
			<ul>
				<li className="mb-3">
					<img src={logo} alt="" className={styles.logoPhoto} />
				</li>
				{data.map((item: any, index: number) => {
					return (
						<li key={item.text} onClick={() => activeTab(item.pos)}>
							<MenuItem
								state={Items[count++]}
								text={item.text}
								route={item.route}
								icon={item.icon}
							/>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
