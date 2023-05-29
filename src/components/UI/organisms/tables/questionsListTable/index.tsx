import React, {useContext} from "react";

import {PartnerRow, QuestionListRow} from "components/UI/molecules";
import styles from "./Table.module.css";
import {QuestionTableProps} from "models";

interface UsersTableProps {
	questions: QuestionTableProps[];
}

export const QuestionsListTable = (props: UsersTableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={`p4 highlight text-left`}>Id</th>
					<th className={`p4 highlight text-left`}>Riesgo</th>
					<th className={`p4 highlight text-left`}>Categoría</th>
					<th className={`p4 highlight text-left`}>Pregunta</th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{/* Starts map with users */}
				{props.questions.map((question, index) => (
					<QuestionListRow
						id={String(question.id)}
						riskLevel={question.riskLevel}
						category={question.category}
						question={question.question}
						active={true}
					/>
				))}
				{/* Ends map with users */}
			</tbody>
		</table>
	);
};
