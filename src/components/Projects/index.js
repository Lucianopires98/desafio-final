import StarWars from "../../images/project1.jpg";
import Lol from "../../images/project2.jfif";
import Finn from "../../images/project3.jfif";
import Error from "../../images/project4.jfif";
import Mir4 from "../../images/project5.jfif";
import Amigao from "../../images/project6.jfif";

import * as S from "./style";

const Projects = () => {
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.NavBarLink to="/">
          <S.ArrowIcon />
        </S.NavBarLink>
        <S.Header>
          <h1>Meus Projetos</h1>
        </S.Header>
      </S.ContainerHeader>
      <S.ContainerImage>
        <a
          href="https://lucianopires98.github.io/Starwars/"
          target="_blank"
          rel="noreferrer"
        >
          <S.BoxImage>
            <S.Image src={StarWars} alt="StarWars" />
          </S.BoxImage>
        </a>
        <a
          href="https://lucianopires98.github.io/landing-page-lol/"
          target="_blank"
          rel="noreferrer"
        >
          <S.BoxImage>
            <S.Image src={Lol} alt="Tela loguin lol" />
          </S.BoxImage>
        </a>
        <a
          href="https://lucianopires98.github.io/finn/"
          target="_blank"
          rel="noreferrer"
        >
          <S.BoxImage>
            <S.Image src={Finn} alt="project Finn" />
          </S.BoxImage>
        </a>
        <a
          href="https://lucianopires98.github.io/404/"
          target="_blank"
          rel="noreferrer"
        >
          <S.BoxImage>
            <S.Image src={Error} alt="Project Error404" />
          </S.BoxImage>
        </a>
        <a
          href="https://lucianopires98.github.io/mir4/"
          target="_blank"
          rel="noreferrer"
        >
          <S.BoxImage>
            <S.Image src={Mir4} alt="Project Mir4" />
          </S.BoxImage>
        </a>
        <a
          href="https://lucianopires98.github.io/amigao/"
          target="_blank"
          rel="noreferrer"
        >
          <S.BoxImage>
            <S.Image src={Amigao} alt="Project Amigão" />
          </S.BoxImage>
        </a>
      </S.ContainerImage>
    </S.Container>
  );
};

export default Projects;
