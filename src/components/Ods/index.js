import Ods1 from "../../images/1.svg";
import Ods2 from "../../images/2.svg";
import Ods3 from "../../images/3.svg";
import Ods4 from "../../images/4.svg";
import Ods5 from "../../images/5.svg";
import Ods6 from "../../images/6.svg";
import Ods7 from "../../images/7.svg";
import Ods8 from "../../images/8.svg";
import Ods9 from "../../images/9.svg";
import Ods10 from "../../images/10.svg";
import Ods11 from "../../images/11.svg";
import Ods12 from "../../images/12.svg";
import Ods13 from "../../images/13.svg";
import Ods14 from "../../images/14.svg";
import Ods15 from "../../images/15.svg";
import Ods16 from "../../images/16.svg";
import Ods17 from "../../images/17.svg";

import * as S from "./style";

const Ods = () => {
  return (
    <S.Container>
      <S.BoxText>
        <S.BoxTitle>
          <S.NavBarLink to="/">
            <S.ArrowIcon />
          </S.NavBarLink>
          <h1>Os Objetivos de Desenvolvimento Sustentável no Brasil</h1>
        </S.BoxTitle>
        <p>
          Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação
          para acabar com a pobreza, proteger o meio ambiente e o clima e
          garantir que as pessoas, em todos os lugares, possam desfrutar de paz
          e de prosperidade. Estes são os objetivos para os quais as Nações
          Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030
          no Brasil.
        </p>
        <S.BoxImage>
          <S.Image src={Ods1} alt="Ods 1" />
          <S.Image src={Ods2} alt="Ods 2" />
          <S.Image src={Ods3} alt="Ods 3" />
          <S.Image src={Ods4} alt="Ods 4" />
          <S.Image src={Ods5} alt="Ods 5" />
          <S.Image src={Ods6} alt="Ods 6" />
          <S.Image src={Ods7} alt="Ods 7" />
          <S.Image src={Ods8} alt="Ods 8" />
          <S.Image src={Ods9} alt="Ods 9" />
          <S.Image src={Ods10} alt="Ods 10" />
          <S.Image src={Ods11} alt="Ods 11" />
          <S.Image src={Ods12} alt="Ods 12" />
          <S.Image src={Ods13} alt="Ods 13" />
          <S.Image src={Ods14} alt="Ods 14" />
          <S.Image src={Ods15} alt="Ods 15" />
          <S.Image src={Ods16} alt="Ods 16" />
          <S.Image src={Ods17} alt="Ods 17" />
        </S.BoxImage>
      </S.BoxText>
    </S.Container>
  );
};

export default Ods;
