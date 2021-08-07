import React from "react";
import styled from "styled-components";
import { Info } from ".";
import Card from "./Card";
import Followers from "./Followers";
import Following from "./Following";
const User = () => {
  return (
    <section className="section">
      <Card />
      <Info />
      <Wrapper className="section-center">
        <Followers />
        <Following />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 4rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
