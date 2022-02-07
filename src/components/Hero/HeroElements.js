import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 10px #4d4d4d;
  padding-top: 10px;
  border-radius: 25px;
  background: rgb(219,218,218);
  background: linear-gradient(152deg, rgba(219,218,218,1) 0%, rgba(255,255,255,1) 95%);
  margin-top: 10px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 625px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
      }

      @media screen and (max-width: 1050px) {
        grid-template-columns: 1fr;
        grid-template-rows: 250px;
      }

      @media screen and (max-width: 1050px) {
        grid-template-columns: 1fr;
        grid-template-rows: 600px;
      }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding-bottom: 150px;
  padding-left: 50px;
  color: #4d4d4d;
  font-family: 'Montserrat', sans-serif;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: 100px;
    text-shadow: 1px 1px 10px #4d4d4d;
  }

  @media screen and (max-width: 1090px) {
    padding-bottom: 0px;
    padding-top: 50px;
  }

  @media screen and (max-width: 1048px) {
    display: flex;
    align-items: center;
    h1 {
      font-size: 75px;
    }
  }

`;

export const ColumnRight = styled.div`
  padding-bottom: 200px;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: space-between;



  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }


    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      padding: 0;
      margin: 0;
    };

`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding-top: 100px;

    @media screen and (max-width: 1049px) {
      display: flex;
      align-items: center;
    }
`;

