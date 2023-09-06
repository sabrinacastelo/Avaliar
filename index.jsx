import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: #3e94e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-family: 'Roboto';
  color: white;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h4>Instituto Federal do Piauí</h4>
      <Title>CACOR</Title>
      <Subtitle>Centro de Avaliação de Disciplinas</Subtitle>
    </HeaderWrapper>
  );
}

export default Header;
