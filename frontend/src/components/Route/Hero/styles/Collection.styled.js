import styled from "styled-components";
import { device } from "./breakpoints";


const CollectionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 50px 20px;
	flex-direction: row;
  width:100%;
	@media ${device.tablet} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
	}
`;

const CardContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	text-align: center;
	position: relative;

	@media ${device.tablet} {
		align-items: center;
	}
`;
const TxtPosition = styled.div`
	display: flex;
	line-height: 0.5rem;
	justify-content: space-between;
	position: relative;
	top: -5rem;
	align-items: center;
	padding: 0 10px;
	width: 12rem;

	@media ${device.tablet} {
		text-align: center;
  place-items: center;
	}
`;
const BestsellerText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${device.tablet} {
		flex-direction: column;
	}
`;
const SearchIcon = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 10px;
	top: 10px;
	height: 2rem;
	width: 2rem;
	border-radius: 50%;
	background-color: white;
`;

const FeaturedGrid =styled.div`
width:100%;
	display:grid;
 grid-template-columns:repeat(3,25rem);
	grid-template-rows:repeat(2,1fr);
justify-content:center;
align-content:center;
/* padding:0 5rem; */
gap:2rem;
box-sizing:border-box;
@media ${device.tablet}{

display:flex;
flex-direction:column;
width:100%;
padding:0 7rem;
justify-content:center;
align-items:center;

}

`
const FeaturedItem = styled.div`
	position:relative;
 text-align:center;
	display:flex;
	justify-content:center;
	align-items:center;
	@media ${device.tablet}{
 width:70%;	
	}
`
const FeaturedText = styled.p`
	position:absolute;
	text-align:center;
	color:black;
	bottom:0rem;
	background:white;
	padding:10px 20px;
	
`
const ShopDiv = styled.div`
display:flex;
margin:10rem 0;
justify-content:space-evenly;
width:100%;
padding:0 3rem;
box-sizing:border-box;

@media ${device.tablet}{

text-align:center;
flex-direction:column-reverse;
padding:0;
justify-content:center;
align-items:center;
width:100%;

}
`
export {
	CollectionContainer,
	CardContainer,
	TxtPosition,
	BestsellerText,
	SearchIcon,
	FeaturedGrid,
	FeaturedItem,
	FeaturedText,
	ShopDiv
};
