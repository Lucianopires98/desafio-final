import styled from "styled-components";
import { Link } from "react-router-dom";
import { DarkTheme } from "@styled-icons/fluentui-system-regular/DarkTheme";

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

export const NavBarLink = styled(Link)`
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: 0.5s;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThemeIcon = styled(DarkTheme)`
  width: 20px;
  color: #242c40;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
