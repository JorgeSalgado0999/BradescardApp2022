import React, {useContext} from "react";

import {StoreRow} from "components/UI/molecules";
import styles from "./Table.module.css";
import {StoreRowProps} from "models";

interface storesTableProps {
	stores: StoreRowProps[];
}

export const StoresTable = (props: storesTableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={`p4 highlight text-left`}>Nombre Agencia</th>
					<th className={`p4 highlight text-left`}>Razón Social</th>
					<th className={`p4 highlight text-left`}>Gerente General</th>
					<th className={`p4 highlight text-left`}>Teléfono</th>
					<th className={`p4 highlight text-left`}>Correo</th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{/* Starts map with stores */}
				{props.stores.map((store, index) => (
					<StoreRow
						key={store.id}
						id={store.id}
						slug={store.slug}
						name={store.name}
						state={store.state}
						manager={store.manager}
						email={store.email}
						phone={store.phone}
						active={store.active}
						businessName={store.businessName}
					/>
				))}
				{/* Ends map with stores */}
			</tbody>
		</table>
	);
};
