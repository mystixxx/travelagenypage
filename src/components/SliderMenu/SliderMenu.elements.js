import styled from 'styled-components';

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { ImQuotesRight } from 'react-icons/im';


export const SliderMenuContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
max-width: 700px;
margin: 1rem auto;
font-family: Ubuntu, sans-serif;
border-radius: 10px;
position: relative;
box-sizing: border-box;
overflow: hidden;
padding: 10px;
font-weight: 200;
`

export const SliderMenuProfileWrapper = styled.div`
text-align: center;
padding: 1rem 0;
display: flex;
flex-direction: column;
&.current{
    transition: all 0.5s linear;
    position: relative;
    top:0;
    left:0;
    opacity: 1;
}
&.previous{
    position: absolute;
    top:0;
    left: -120%;
    transition: all 0.3s linear;
    opacity: 0;
}
&.future{
    position: absolute;
    top:0;
    left: 120%;
    transition: all 0.3s linear;
    opacity: 0;
}
`
export const SliderImage = styled.div`
border-radius: 50%;
width: 100px;
height: 100px;
background-image: url(${({ src }) => src});
background-repeat: no-repeat;
background-size: cover;
background-position: top;
box-shadow: 0px 0px 5px grey;
margin: auto;
`

export const SliderName = styled.h3`
font-weight: 600;
color: #FA7436;
text-transform: uppercase;
font-size: 18px;
letter-spacing: 2px;
padding: 0;
margin-bottom: 0.3rem;
margin-top: 0.3rem;
`

export const SliderOccupation = styled.h4`
font-size: 14px;
padding: 0;
margin:0;
color: #666;
letter-spacing: 0.7px;
font-family: sans-serif;
text-transform: capitalize;
`


export const SliderDescription = styled.p`
color: #949494;
font-size: 15px;
width: 80%;
margin: auto;
margin-top: 2rem;
font-family: sans-serif;
`


export const SliderMenuLeftSlider = styled(AiOutlineDoubleLeft)`
position: absolute;
left: 0;
top: 215px;
transform: translateY(-50%);
color: #999;
font-size: 22px;
transition: .3s ease;
&:hover{
    color: #FA7436;
    cursor: pointer;
}
z-index: 10;
`

export const SliderMenuRightSlider = styled(AiOutlineDoubleRight)`
position: absolute;
right: 0;
top: 215px;
transform: translateY(-50%);
color: #999;
font-size: 22px;
transition: .3s ease;
&:hover{
    color: #FA7436;
    cursor: pointer;
}
z-index: 10;
`

export const SliderMenuQuoteIcon = styled(ImQuotesRight)`
margin: auto;
display: block;
font-size: 2rem;
color: #FA7436;
margin-bottom: 2rem;
`

export const Wrapper = styled.div`
position: relative;
`