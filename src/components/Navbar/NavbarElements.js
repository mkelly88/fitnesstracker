import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
 display: flex;
 background: rgb(219,218,218);
 background: linear-gradient(152deg, rgba(219,218,218,1) 0%, rgba(255,255,255,1) 95%);
 width: 100%;
 height: 60px;
 z-index:1;
 border-radius: 0px 0px 25px 25px;
 box-shadow: 2px 2px 10px #4d4d4d;
 margin-top: -8px;
`;

export const NavContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const NavLink = styled(LinkR)`
    padding-bottom: 20px;
    padding-left: 30px;
    display: flex;
    text-decoration: none;
    align-items: center;
    color: #4d4d4d;
    cursor: pointer;
    text-shadow: 1px 1px 3px #4d4d4d;
    font-family: 'Montserrat', sans-serif !important;

    &:hover {
        opacity: .3;
        transform: translateY(-4px);
    }
`;

export const NavOption = styled(LinkR)`
background: rgb(251,190,88);
background: linear-gradient(152deg, rgba(251,190,88,1) 41%, rgba(255,255,255,1) 100%);
white-space: nowrap;
outline: none;
border: none;
min-width: 100px;
max-width: 200px;
max-height: 20px;
cursor: pointer;
border-radius: 25px;
text-decoration: none;
transistion: 0.3s;
display: flex;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
justify-content: center;
align-items: center;
padding: 8px 0px;
color: #fff;
font-size: 10px;

&:hover {
    opacity: .3;
    transform: translateY(-4px);
}
`;

export const ButtonContainer = styled.div`
    padding-top: 17px;
    padding-right: 30px;
`;
