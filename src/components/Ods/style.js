import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BoxText = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const BoxTitle = styled.div`
  display: flex;

  h1 {
    margin-left: 2rem;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Image = styled.img`
  width: 150px;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BoxMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BoxModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BgModal = styled.div`
  position: absolute;
  width: 80%;
  height: 80vh;
  background-color: ${(props) => props.bgColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
`;

export const CloseModal = styled.span`
  position: fixed;
  right: 0;
  top: 0;
  padding: 1rem;
  cursor: pointer;
`;

export const BoxTextModal = styled.div`
  color: #fff;
  width: 400px;

  span {
    font-size: 30px;
  }
`;

export const IconOds = styled.img`
  width: 150px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 75vh;
`;

export const BlockParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  color: #fff;
`;

export const ParagraphObjective = styled.p`
  width: 60vw;
`;
