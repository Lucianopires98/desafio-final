import styled from "styled-components";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";
import { Link } from "react-router-dom";

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
  width: 300px;
  margin: 2rem 1rem;
  -webkit-box-shadow: 12px 12px 11px 0px #545454;
  box-shadow: 12px 12px 11px 0px #545454;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ArrowIcon = styled(ArrowLeftCircleFill)`
  width: 25px;
  cursor: pointer;
  padding-left: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerHeader = styled.div`
  display: flex;
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
