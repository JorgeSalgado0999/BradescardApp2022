import styled, {css} from "styled-components";

export const StyledInputText = styled.input.attrs({
	type: "text",
})`
	background-color: var(--background-table);
	border: none;
	border-radius: 0.5rem;
	height: 4rem;
	margin-bottom: 1.9rem;
	&:focus {
		outline: 3px solid #3fa9f5;
	}
`;

export const StyledInputSubmit = styled.input.attrs({
	type: "submit",
})`
	background-color: var(--color-secondary);
	color: var(--white);
	font-size: 1.6rem;
	font-weight: bold;
	border: none;
	border-radius: 0.5rem;
	height: 4rem;
	margin-bottom: 1.9rem;
`;
