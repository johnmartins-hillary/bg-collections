import styled from "styled-components";
import { device } from './breakpoints'
import {Link} from 'react-router-dom'


const BlackBtn = styled.button`
	background-color: black;
	padding: 10px 20px;
	color: white;
	border-radius: 30px;
	width:10rem;
	cursor:pointer;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const Button = styled.button`
	background: transparent;
	padding: 10px 20px;
	border-radius:8px;
	cursor:pointer;

`
const Reposition = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
align-items: center;


@media ${device.tablet}{
text-align: center;
padding:0;
max-width:100%;
}
`
const PaddedContainer = styled.div`
	padding: 4rem 4rem 10rem;
	display: grid;
	grid-template-columns: repeat(4, 2fr);
	grid-template-rows: repeat(auto, 1fr);
	place-items: center;
	
	@media ${device.tablet}{
	display: flex;
	flex-direction: column;
	}
`
const WhiteArrow = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	background-color: white;
 color:black;
	position: relative;
	right: -7rem;
	display: flex;
	justify-content: center;
	align-items:center;
	@media ${device.tablet}{
	right:-1rem;
	}
`
const ColorContainer = styled.div`
	display: flex;
	flex-grow: 10;
	justify-content: space-between;
	width: 8rem;
	height: 3rem;
	align-items: center;
`

const ColorCodes = styled.div`
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	background-color: ${(props) => props.color};

	:hover {
		border: 3px solid black;
	}
`;
const CenterText = styled.h1`
	text-align: center;
	padding:5rem 0 0;
	@media ${device.tablet}{
	font-size: 20px;

	}
`
const FooterContainer = styled.div`
width: 100%;
box-sizing: border-box;
background-color:  #DADEE4;
margin-top: 10rem;
display:grid;
grid-template-columns: repeat(5,1fr);
place-items: center;
align-items: center;
gap:1rem;
justify-content: center;
align-content: center;
@media ${device.tablet}{
width:100%;
grid-template-columns: repeat(1,300px);
text-align: center;
padding:0 1rem;
}
`
const FooterDivs = styled.div`
 color:black;
		width:100%;

`
const WhiteText = styled.p`
 color:white;
	font-size: 20px;
	font-weight:bolder;
`
const BlackText = styled.p`
 color:black;
`
const FooterInput= styled.input`
height:2rem;
background: white;
border:none;
margin-bottom:20px;
padding:0 1rem;
box-sizing: border-box;

`
const FooterButton = styled.button`
height:2rem;
box-sizing: border-box;
border:none;
background: white;
:hover{
cursor: pointer;
}
`
const StyledLink = styled(Link)`
color:black;
text-decoration:none;
cursor:pointer;
&:hover,&:active{
color:grey;
text-decoration:underline;
}

`
export {
	BlackBtn,
	Button,
	Reposition,
	WhiteArrow,
	PaddedContainer,
	ColorCodes,
	ColorContainer,
	CenterText,
 FooterContainer,
 FooterDivs,
 WhiteText,
 BlackText,
	FooterInput,
	FooterButton,
StyledLink
};
