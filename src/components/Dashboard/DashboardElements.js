import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Section = styled.div`
background: rgb(219,218,218);
background: linear-gradient(152deg, rgba(219,218,218,1) 0%, rgba(255,255,255,1) 95%);
width: 100%;
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
z-index:1;
border-radius: 25px 25px 25px 25px;
box-shadow: 2px 2px 10px #4d4d4d;
margin-top: none;
`;

export const ListContainer = styled.div`
    padding: 50px;
`;

export const Container = styled.div`
background: rgb(219,218,218);
background: linear-gradient(152deg, rgba(219,218,218,1) 0%, rgba(255,255,255,1) 95%);
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index:1;
border-radius: 25px 25px 25px 25px;
box-shadow: 2px 2px 10px #4d4d4d;
margin-top: none;
`;

export const Name = styled.div`
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
font-size: 23px;
color: #4d4d4d;
padding-bottom: 5px;
padding-top: 5px;
`;

export const Title = styled.div`
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
    color: #4d4d4d;
    margin-top: -150px;
    font-size: 50px;
    text-shadow: 1px 1px 3px #61ff7b;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Description = styled.div`
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
font-size: 18px;
color: #4d4d4d;
padding-bottom: 5px;
`;

export const Date = styled.div`
font-family: 'Montserrat', sans-serif;
color: #4d4d4d;
`;

export const Duration = styled.div`
font-family: 'Montserrat', sans-serif;
font-size: 28px;
color: #4d4d4d;
padding-bottom: 5px;
`;

export const List = styled.div`
    display: flex;
    align-items: center;
`;

export const Edit = styled(Link)`
background: rgb(44,154,168);
background: linear-gradient(152deg, rgba(44,154,168,1) 0%, rgba(255,255,255,1) 100%);
white-space: nowrap;
outline: none;
border: none;
cursor: pointer;
border-radius: 25px;
text-decoration: none;
transistion: 0.3s;
display: flex;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
justify-content: center;
align-items: center;
padding: 2px 8px;
color: #fff;
font-size: 14px;

&:hover {
    opacity: .3;
    transform: translateY(-4px);
}
`;

export const Delete = styled.a`
background: rgb(255,118,243);
background: linear-gradient(152deg, rgba(255,118,243,1) 41%, rgba(255,255,255,1) 100%);
white-space: nowrap;
outline: none;
border: none;
cursor: pointer;
border-radius: 25px;
text-decoration: none;
transistion: 0.3s;
display: flex;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
justify-content: center;
align-items: center;
padding: 2px 8px;
color: #fff;
font-size: 14px;

&:hover {
    opacity: .3;
    transform: translateY(-4px);
}
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 20px;
`;

export const Button = styled(Link)`
background: rgb(184,97,255);
background: linear-gradient(152deg, rgba(184,97,255,1) 35%, rgba(255,255,255,1) 100%);
white-space: nowrap;
outline: none;
border: none;
cursor: pointer;
min-width: 100px;
max-width: 200px;
max-height: 20px;
border-radius: 25px;
text-decoration: none;
transistion: 0.3s;
display: flex;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
justify-content: center;
align-items: center;
padding: 15px 20px;
color: #fff;
font-size: 14px;

&:hover {
    opacity: .3;
    transform: translateY(-4px);
}
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;