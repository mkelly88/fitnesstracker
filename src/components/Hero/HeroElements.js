import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
    position: relative;
    width: 100vw:
    height: 500px;
    padding-top: 5px;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 500px;
`;

export const HeroText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px;
  z-index: 1;
  text-align: center;
  background: #fff;
  mix-blend-mode: screen;
  font-size: 110px;
  font-family: 'Montserrat', sans-serif;
`;



export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    gap: 30px;
    z-index: 999;

    @media screen and (max-width: 1049px) {
      display: flex;
      align-items: center;
    }
`;

