import React, {useContext} from "react";

import {
	PartnerRow,
	QuestionListPartnerRow,
	QuestionListRow,
} from "components/UI/molecules";
import styles from "./Table.module.css";
import {QuestionTableProps} from "models";

interface Props {
	questions: any[];
}

export const QuestionsListPartnerTable = (props: Props) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={`p4 highlight text-left`}>Id</th>
					<th className={`p4 highlight text-left`}>Categoría</th>
					<th className={`p4 highlight text-left`}>Pregunta</th>
					<th className={`p4 highlight text-left`}>Remota</th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{/* Starts map with users */}
				{props.questions.map((question, index) => (
					<QuestionListPartnerRow
						id={String(question.id)}
						category={question.question.questionsCategory.category}
						question={question.question.question}
						online={question.online}
						active={true}
						key={index}
					/>
				))}
				{/* Ends map with users */}
			</tbody>
		</table>
	);
};
