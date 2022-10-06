import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.Menu>
        <S.List>
          <S.NavBarLink to="/projects">Projetos</S.NavBarLink>
          <S.NavBarLink to="/ods">ODS</S.NavBarLink>
          <S.ThemeIcon />
        </S.List>
      </S.Menu>
    </>
  );
};

export default Header;
