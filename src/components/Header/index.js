import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <S.NavBarLink to="/">
        <S.HomeIcon color={"#6b8096"} />
      </S.NavBarLink>
      <S.BlockLink>
        <S.Menu>
          <S.List>
            <S.NavBarLink to="/projects">Projetos</S.NavBarLink>
            <S.NavBarLink to="/ods">ODS</S.NavBarLink>
          </S.List>
        </S.Menu>
      </S.BlockLink>
    </S.Container>
  );
};

export default Header;
