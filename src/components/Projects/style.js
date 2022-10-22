import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxImage = styled.div`
  width: 280px;
  margin: 2rem 1rem;
  -webkit-box-shadow: 12px 12px 11px 0px #545454;
  box-shadow: 12px 12px 11px 0px #545454;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerHeader = styled.div`
  display: flex;
`;
