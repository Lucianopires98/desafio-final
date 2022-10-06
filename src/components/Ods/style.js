import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ArrowIcon = styled(ArrowLeftCircleFill)`
  width: 25px;
  cursor: pointer;
  padding-left: 1rem;
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

export const NavBarLink = styled(Link)`
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
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

export const Card = styled.div`
  background-image: url(${(props) => props.id});
  background-color: ${(props) => props.bgColor};
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: 90%;
  border: 1px solid red;
  width: calc(100%-8rem);
  height: 40vh;
  margin: 4rem;
`;
