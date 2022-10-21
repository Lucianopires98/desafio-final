import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";
import { SunFill } from "@styled-icons/bootstrap/SunFill";

export const Container = styled.div`
  display: flex;
`;

export const BlockLink = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NavBarLink = styled(Link)`
  cursor: pointer;
  transition: 0.5s;
  text-decoration: underline;
  display: flex;
  cursor: pointer;
  transition: 0.5s;
  color: #6b8096;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ArrowIcon = styled(ArrowLeftCircleFill)`
  width: 25px;
  cursor: pointer;
  padding-left: 1rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ThemeIcon = styled(SunFill)`
  width: 20px;
  color: ${(props) => props.colorText};
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;
