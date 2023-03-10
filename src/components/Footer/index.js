import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer(props) {
  return (
    <FooterContainer>
      <Link to="/">Netflix movie</Link>
      <p>Thịnh Nguyễn</p>
    </FooterContainer>
  );
}

export default React.memo(Footer);

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.99) 100%,
    transparent
  );
`;
