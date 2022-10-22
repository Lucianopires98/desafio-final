import React, { useState } from "react";
import { data } from "./data.js";

import * as S from "./style";

const Ods = () => {
  const [selected, setSelected] = useState("");

  const selectedItem = (item) => {
    setSelected(selected === item.id ? "" : item.id);
    console.log(item.id);
  };

  const closeModal = (item) => {
    setSelected(selected === item.id ? item.id : "");
  };

  return (
    <>
      <S.Container>
        <S.BoxText>
          <S.BoxTitle>
            <h1>Os Objetivos de Desenvolvimento Sustentável no Brasil</h1>
          </S.BoxTitle>
          <p>
            Os Objetivos de Desenvolvimento Sustentável são um apelo global à
            ação para acabar com a pobreza, proteger o meio ambiente e o clima e
            garantir que as pessoas, em todos os lugares, possam desfrutar de
            paz e de prosperidade. Estes são os objetivos para os quais as
            Nações Unidas estão contribuindo a fim de que possamos atingir a
            Agenda 2030 no Brasil.
          </p>
        </S.BoxText>
      </S.Container>
      <S.BoxMap>
        {data.map((item) => (
          <>
            <S.Image
              src={item.image}
              alt=""
              onClick={() => selectedItem(item)}
            />
            {selected === item.id && (
              <S.BoxModal onClick={closeModal}>
                <S.BgModal bgColor={item.color}>
                  <S.CloseModal onClick={closeModal}>X</S.CloseModal>
                  <S.Card>
                    <S.BoxTextModal>
                      <p>Objetivo de Desenvolvimento Sustentável</p>
                      <span>{item.id}</span>
                      <h2>{item.title}</h2>
                      <p>{item.paragraph}</p>
                    </S.BoxTextModal>
                    <S.IconOds
                      src={`https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/images-only/png/SDG-${item.id}.png`}
                      alt=""
                    />
                  </S.Card>
                  <S.BlockParagraph>
                    <S.ParagraphObjective>{item.t1}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t2}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t3}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t4}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t5}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t6}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t7}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t8}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t9}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t10}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t11}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t12}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t13}</S.ParagraphObjective>
                    <S.ParagraphObjective>{item.t14}</S.ParagraphObjective>
                  </S.BlockParagraph>
                </S.BgModal>
              </S.BoxModal>
            )}
          </>
        ))}
      </S.BoxMap>
    </>
  );
};

export default Ods;
