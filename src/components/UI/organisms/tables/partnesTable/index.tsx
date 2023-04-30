import React, {useContext} from "react";

import {PartnerRow} from "components/UI/molecules";
import styles from "./Table.module.css";
import {PartnerRowProps} from "models";

interface UsersTableProps {
	partners: PartnerRowProps[];
}

export const PartnersTable = (props: UsersTableProps) => {
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
				{/* Starts map with users */}
				{props.partners.map((partner, index) => (
					<PartnerRow
						key={partner.id}
						id={partner.id}
						slug={partner.slug}
						name={partner.name}
						state={partner.state}
						manager={partner.manager}
						email={partner.email}
						phone={partner.phone}
						active={partner.active}
						businessName={partner.businessName}
					/>
				))}
				{/* Ends map with users */}
			</tbody>
		</table>
	);
};
