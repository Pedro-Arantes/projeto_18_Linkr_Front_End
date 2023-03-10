import styled from "styled-components";

export const AuthorizationPage = styled.div`
	display: grid;
	grid-template-columns: 65% 35%;
	grid-template-rows: 100%;
	height: 100vh;
	@media (max-width: 614px) {
		display:flex;
		flex-direction:column;
	}
`;
export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #151515;
	padding: 0 0 5% 10%;
	h1,
	h2 {
		font-weight: 700;
		color: #fff;
	}
	h1 {
		/* font-family: 'Passion One'; */
		font-size: 106px;
		line-height: 117px;
		letter-spacing: 0.05em;
	}
	h2 {
		/* font-family: "Oswald"; */
		font-size: 43px;
		line-height: 64px;
	}
	@media (max-width: 614px) {
		h1 {
			font-size: 76px;
		}
		h2 {
			font-size: 23px;
			line-height: 34px;
			text-align: center;
		}
	}
`;
export const AuthBar = styled.div`
	background: #333333;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	h1 {
		/* font-family: 'Lato'; */
		font-size: 20px;
		line-height: 24px;
		text-decoration: underline;
		color: #fff;
		cursor: pointer;
	}
	@media (max-width: 614px) {
		padding-top:20px;
		padding-bottom:20px;
		height: 100vh;
	}
`;