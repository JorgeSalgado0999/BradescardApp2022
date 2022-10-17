import React from "react";

interface Props {
	color: string;
	size: number;
}

export const IconAdd = (props: Props) => {
	return (
		<svg width={props.size} height={props.size} viewBox="0 0 32 24" fill="none">
			<path
				d="M23.333 23.333C22.9443 23.333 22.618 23.2013 22.354 22.938C22.09 22.674 21.958 22.3473 21.958 21.958V16.375H16.375C15.9863 16.375 15.66 16.243 15.396 15.979C15.132 15.715 15 15.3887 15 15C15 14.6113 15.132 14.285 15.396 14.021C15.66 13.757 15.9863 13.625 16.375 13.625H21.958V8.042C21.958 7.65267 22.09 7.326 22.354 7.062C22.618 6.79867 22.9443 6.667 23.333 6.667C23.7223 6.667 24.0487 6.79867 24.312 7.062C24.576 7.326 24.708 7.65267 24.708 8.042V13.625H30.292C30.6807 13.625 31.007 13.757 31.271 14.021C31.535 14.285 31.667 14.6113 31.667 15C31.667 15.3887 31.535 15.715 31.271 15.979C31.007 16.243 30.6807 16.375 30.292 16.375H24.708V21.958C24.708 22.3473 24.576 22.674 24.312 22.938C24.0487 23.2013 23.7223 23.333 23.333 23.333ZM1.375 16.375C0.986333 16.375 0.66 16.243 0.396 15.979C0.132 15.715 0 15.3887 0 15C0 14.6113 0.132 14.285 0.396 14.021C0.66 13.757 0.986333 13.625 1.375 13.625H10.833C11.2223 13.625 11.5487 13.757 11.812 14.021C12.076 14.285 12.208 14.6113 12.208 15C12.208 15.3887 12.076 15.715 11.812 15.979C11.5487 16.243 11.2223 16.375 10.833 16.375H1.375ZM1.375 9.583C0.986333 9.583 0.66 9.45133 0.396 9.188C0.132 8.924 0 8.59733 0 8.208C0 7.79133 0.132 7.45133 0.396 7.188C0.66 6.924 0.986333 6.792 1.375 6.792H17.792C18.1807 6.792 18.507 6.93067 18.771 7.208C19.035 7.486 19.167 7.81933 19.167 8.208C19.167 8.59733 19.035 8.924 18.771 9.188C18.507 9.45133 18.1807 9.583 17.792 9.583H1.375ZM1.375 2.792C0.986333 2.792 0.66 2.653 0.396 2.375C0.132 2.097 0 1.76367 0 1.375C0 0.986333 0.132 0.66 0.396 0.396C0.66 0.132 0.986333 0 1.375 0H17.792C18.1807 0 18.507 0.132 18.771 0.396C19.035 0.66 19.167 0.986333 19.167 1.375C19.167 1.79167 19.035 2.132 18.771 2.396C18.507 2.66 18.1807 2.792 17.792 2.792H1.375Z"
				fill={props.color}
			/>
		</svg>
	);
};