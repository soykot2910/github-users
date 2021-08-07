import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import RepoCard from "./RepoCard";
const Repos = () => {
  const { repos } = useContext(GithubContext);

  return (
    <section className="section">
      <h2 className="repo-heading">All Repos</h2>
      <Wrapper className="section-center">
        {repos.map((item) => {
          return <RepoCard {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 2fr 2fr;
  }

  div {
    width: 100% !important;
  }
`;

export default Repos;
