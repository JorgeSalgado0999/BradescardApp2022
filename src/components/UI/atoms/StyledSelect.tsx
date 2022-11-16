import styled, {css} from "styled-components";
export const StyledSelect = styled.select.attrs({
	type: "date",
})`
	 /* Reset */
  appearance: none;
  border: 0;
  outline: 0;
  font-family: inherit;
	font-size: var(--p3);

  /* Personalize */
  width: auto;
	height: 3rem;
  padding: 0.3em 0.7em;
	padding-right: 2.5em;
	margin-bottom: 1.9rem;

  background: url("https://firebasestorage.googleapis.com/v0/b/happycoast.appspot.com/o/arrowdown.svg?alt=media&token=665fca61-4cda-471b-9717-70c2612ca0e4")
      no-repeat right 0.8em center / 1em,
    var(--white);
  color: var(--text);
  border-radius: var(--border-radious-two);
  /*box-shadow: 0 0 0.em 0 rgba(0, 0, 0, 0.2);*/
  cursor: pointer;
	

  /* <option> colors */
  option {
    color: var(--text);
    background-color: var(--white);
		font-family: Arial;
		font-size: var(--p3);
  }

  /* Remove focus outline */
  &:focus {
		outline: 3px solid #3fa9f5;
	}

  /* Remove IE arrow */
  &::-ms-expand {
    display: none;
  }
}

`;
