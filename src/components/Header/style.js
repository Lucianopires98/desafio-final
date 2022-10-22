import styled from "styled-components";
import { Link } from "react-router-dom";
import { Home } from "@styled-icons/boxicons-solid/Home";
import { SunFill } from "@styled-icons/bootstrap/SunFill";
import { MoonStarsFill } from "@styled-icons/bootstrap/MoonStarsFill";

export const Container = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
`;

export const BlockLink = styled.div`
  display: flex;
  justify-content: center;
  width: 84%;
`;

export const NavBarLink = styled(Link)`
  cursor: pointer;
  transition: 0.5s;
  text-decoration: underline;
  display: flex;
  cursor: pointer;
  transition: 0.5s;
  color: #6b8096;

  a {
    margin: 0;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const HomeIcon = styled(Home)`
  width: 25px;
  cursor: pointer;
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

export const ThemeIconMoon = styled(MoonStarsFill)`
  width: 20px;
  color: ${(props) => props.colorText};
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThemeIconSun = styled(SunFill)`
  width: 20px;
  color: ${(props) => props.colorText};
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;
