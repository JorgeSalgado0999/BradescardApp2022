import styled, {css} from "styled-components";

export const StyledTextArea = styled.textarea`
	width: 10em;
	height: 3rem;
	padding: 1rem;
	font-size: var(--p3);
	background-color: var(--white);
	border: 1px solid var(--background-table);
	border-radius: 0.5rem;
	margin-bottom: 1.9rem;
	transition: all 0.5s;
	color: var(--text);
	resize: none;
	&:focus {
		outline: 3px solid #3fa9f5;
		width: 15em;
		height: 10rem;
	}
`;
