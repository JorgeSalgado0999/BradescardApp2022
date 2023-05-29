import styled, {css} from "styled-components";

export interface PropsTxt {
	customType: string;
}
export const StyledInputText = styled.input.attrs({
	type: "text",
})`
	font-size: var(--p);
	background-color: var(--background-table);
	border: none;
	border-radius: 0.5rem;
	height: 4rem;
	margin-bottom: 1.9rem;
	padding: 0 0.5rem;
	&:focus {
		outline: 3px solid #3fa9f5;
	}
`;
export const StyledMaterialInput = styled.input.attrs<PropsTxt>({
	type: "text",
})`
	background-color: ${(props: PropsTxt) =>
		props.customType === "gray" ? "var(--background-table)" : "var(--white)"};
	color: var(--text);
	border: none;
	font-size: var(--p);
	border-radius: var(--br-1);
	width: 100%;
	min-height: 3rem;
	padding: 1rem 0.5rem;
	margin-bottom: 1.9rem;
	border-bottom: 1px solid var(--gray2);
	&:focus {
		outline: none;
		border-color: var(--color-secondary);
	}
`;

export interface Props {
	customType: string;
}

export const StyledInputSubmit = styled.input.attrs<Props>({
	type: "submit",
})`
	background-color: ${(props: Props) =>
		props.customType === "primary" ? "var(--color-main)" : "var(--white)"};
	color: ${(props: Props) =>
		props.customType === "primary" ? "var(--white)" : "var(--color-danger)"};

	font-size: 1.6rem;
	font-weight: bold;
	border: none;
	border-radius: 0.5rem;
	height: 4rem;
	width: 100%;
	margin-bottom: 1.9rem;
	cursor: pointer;
`;

export const StyledInputRadio = styled.input.attrs({
	type: "radio",
})`
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	margin: 0;
	appearance: none;
	background-color: #fff;
	margin: 0;
	font: inherit;
	color: currentColor;
	width: 1.15em;
	height: 1.15em;
	border: 0.15em solid currentColor;
	border-radius: 30%;
	transform: translateY(-0.075em);
	display: grid;
	place-content: center;

	&:before {
		content: "";
		width: 0.65em;
		height: 0.65em;
		border-radius: 50%;
		transform: scale(0);
		transition: 220ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--color-secondary);
	}

	&:checked &:before {
		transform: scale(1);
	}

	&:checked&:before {
		transform: scale(1);
	}
`;

export const StyledInputDate = styled.input.attrs({
	type: "date",
})`
	max-width: 15rem;
	height: 3rem;
	text-align: center;
	border: none;
	background-color: transparent;
	border-bottom: 2px solid #e3b924;

	font-size: var(--p2);
	font-weight: bold;
	color: var(--text);
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;
export const StyledInputTime = styled.input.attrs({
	type: "time",
})`
	min-width: 5rem;
	max-width: 15rem;
	height: 3rem;
	text-align: center;
	border: none;
	background-color: transparent;
	border-bottom: 2px solid #e3b924;

	font-size: var(--p2);
	font-weight: bold;
	color: var(--text);
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;
