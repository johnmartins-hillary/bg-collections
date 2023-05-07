import styled from "styled-components";
import { device } from "./breakpoints";
import { Link } from "react-router-dom";

const Slides = styled.div`
	height: 40rem;
	width: 100%;
	background-blend-mode: multiply;
	background-color: #80808030;
	background-image: url(${(props) => props.bg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;

	@media ${device.tablet} {
		min-width: 250px;
		text-align: center;
		font-size: 20px;
	}
`;
const Container = styled.div`
	position: relative;
	margin: 4rem;
	line-height: 2rem;
	top: 8rem;
	letter-spacing: 0.2rem;
	font-size: 1.2rem;
	@media ${device.mobileL} {
		font-size: 16px;
	}
`;

const NavBar = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	align-items: center;
	@media ${device.tablet} {
		display: none;
	}
`;

const NavbarLink = styled(Link)`
	color: black;
	text-decoration: none;
	margin: 10px;
	&:hover {
		color: pink;
	}
`;

const SearchBar = styled.input`
	width: 30%;
	height: 2rem;
	border: 2px solid;
	background: transparent;
	border-radius: 20px;
	cursor: pointer;
`;
const SubLinks = styled.div`
	position: absolute;
	right: 1.5rem;
	bottom: 2rem;
	font-weight: bolder;
	@media ${device.tablet} {
		margin: 0 auto;
	}
`;
const CarouselContainer = styled.div`
	width: 100%;
	padding: 0;
`;

export {
	Slides,
	Container,
	NavBar,
	SearchBar,
	SubLinks,
	CarouselContainer,
	NavbarLink,
};
