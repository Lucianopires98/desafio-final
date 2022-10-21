import SobreImg from "../../images/sobre.png";
import * as S from "./style";

const About = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Paragraph>
          Eu sou Luciano, tenho 24 anos, comecei a estudar programação em 2022.
          Tenho gostado muito de estudar front-End e estou estudando as
          seguintes tecnologias: HTML5, CSS3, JAVASCRIPT, GIT, Styled-components
          e ReactJS.
        </S.Paragraph>
        <div>
          <a
            href="https://github.com/Lucianopires98"
            target="_blank"
            rel="noreferrer"
          >
            <S.GithubIcon color={"#6b8096"} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucianopires98/"
            target="_blank"
            rel="noreferrer"
          >
            <S.LinkedinIcon color={"#6b8096"} />
          </a>
        </div>
      </S.Box>
      <S.Box>
        <S.Image src={SobreImg} alt="sobre" />
      </S.Box>
    </S.Container>
  );
};

export default About;
