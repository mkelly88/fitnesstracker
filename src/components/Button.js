import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Button1 = styled(LinkR)`
background: rgb(44,154,168);
background: linear-gradient(152deg, rgba(44,154,168,1) 0%, rgba(255,255,255,1) 100%);
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
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover {
        opacity: .3;
        transform: translateY(-4px);
    }
`;

export const Button2 = styled(LinkR)`
background: rgb(189,115,242);
background: linear-gradient(152deg, rgba(189,115,242,1) 0%, rgba(255,255,255,1) 100%);
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    border-radius: 25px;
    text-decoration: none;
    transistion: 0.3s;
    display: flex;
    padding-left: 10px;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover {
        opacity: .3 !important;
        transform: translateY(-4px);
    }
`;