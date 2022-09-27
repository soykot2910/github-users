import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import RepoCard from "./RepoCard";
import { useEffect } from "react";
const Repos = () => {
  const { repos } = useContext(GithubContext);
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState("forks");

  const getTopRepos = (type) => {
    const LIMIT = 8;
    const map = {
      stars: "stargazers_count",
      forks: "forks_count",
      size: "size",
    };
    const sortProperty = map[type];
    const sorted = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);

    setTopRepos(sorted);
  };

  useEffect(() => {
    getTopRepos(sortType);
  }, [sortType, repos]);

  return (
    <section className="section-center">
      <div className="repo-heading">
        <h3 className="">Top Repos</h3>
        <p>by</p>
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="forks">forks</option>
          <option value="size">size</option>
          <option value="stars">stars</option>
        </select>
      </div>
      <Wrapper className="section-center">
        {topRepos?.map((item) => {
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
