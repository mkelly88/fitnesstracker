import styled from "styled-components";

export const Section = styled.div`
background: rgb(219,218,218);
background: linear-gradient(152deg, rgba(219,218,218,1) 0%, rgba(255,255,255,1) 95%);
width: 100%;
height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
z-index:1;
border-radius: 25px 25px 25px 25px;
box-shadow: 2px 2px 10px #4d4d4d;
margin-top: none;
`;

export const Title = styled.div`
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
color: #4d4d4d;
padding-bottom: 0;
font-size: 30px;
margin-top: -30px;
text-shadow: 1px 1px 3px #61ff7b;
display: flex;
align-items: center;
justify-content: center;
`;

export const HeaderLabel = styled.div`
font-family: 'Montserrat', sans-serif;
disply:flex;
text-transform: uppercase;
font-size: 15px;
padding-bottom: 20px;
color: #4d4d4d;
text-shadow: 1px 1px 3px #4d4d4d;
padding-top: 20px;
`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 70%;
height: 20px;
padding: 12px 0px 12px 15px;
border: none;
outline: none;
color: #3c354e;
font-size: 1rem;
font-weight: bold;
&:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe0;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
}
&::placeholder {
  color: #b9abe099;
  font-weight: 100;
  font-size: 1rem;
}
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
background: rgb(255,118,243);
background: linear-gradient(152deg, rgba(255,118,243,1) 41%, rgba(255,255,255,1) 100%);
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
padding: 20px 40px;
color: #fff;
font-size: 14px;

&:hover {
    opacity: .3;
    transform: translateY(-4px);
}
`;

export const Select = styled.select`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 70%;
height: 30px;
padding: 5px 5px 5px 15px;
border: none;
outline: none;
color: #3c354e;
font-size: 1rem;
font-weight: bold;
&:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe0;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
}
&::placeholder {
  color: #b9abe099;
  font-weight: 100;
  font-size: 1rem;
}
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    margin-top: -40px;
`;