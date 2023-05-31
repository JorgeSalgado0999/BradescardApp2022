import React, {useContext} from "react";

import {UserRow} from "components/UI/molecules";
import styles from "./Table.module.css";
import {UserRowProps} from "models";

interface UsersTableProps {
	data: UserRowProps[];
}

export const ReviewsTable = (props: UsersTableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={`p4 highlight text-left`}>Socio</th>
					<th className={`p4 highlight text-left`}>Tienda</th>
					<th className={`p4 highlight text-left`}>Agente</th>
					<th className={`p4 highlight text-left`}>Fecha</th>
					<th className={`p4 highlight text-left`}>Calificación</th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{/* Starts map with users */}
				{props.data.map((user, index) => (
					<UserRow
						key={user.id}
						id={user.id}
						slug={user.slug}
						name={user.name}
						state={user.state}
						manager={user.manager}
						email={user.email}
						phone={user.phone}
						active={true}
						businessName={user.businessName}
					/>
				))}
				{/* Ends map with users */}
			</tbody>
		</table>
	);
};
