import React from "react";
import styles from "./Checkbox.module.css";

interface Props {
	label: string;
	checked: boolean;
	function: () => void;
	type: string;
}

export const Checkbox = (props: Props) => {
	if (props.type === "before") {
		return (
			<label className={`${styles.formControl}`}>
				{props.label}
				<input
					type="checkbox"
					name="checkbox"
					onChange={props.function}
					checked={props.checked}
				/>
			</label>
		);
	}

	return (
		<label className={`${styles.formControl}`}>
			<input
				type="checkbox"
				name="checkbox"
				onChange={props.function}
				checked={props.checked}
			/>
			{props.label}
		</label>
	);
};
