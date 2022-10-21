import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-top: 2rem;
`;

export const Box = styled.div`
  width: 40%;
`;

export const Paragraph = styled.p`
  text-align: left;
  width: 100%;
  font-size: 1.2rem;
  color: ${(props) => props.colorText};
`;

export const Image = styled.img`
  width: 100%;
`;

export const GithubIcon = styled(Github)`
  width: 25px;
  margin-right: 1rem;
  color: ${(props) => props.colorText};

  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  width: 25px;
  color: ${(props) => props.colorText};

  &:hover {
    transform: scale(1.1);
  }
`;
