import React from "react";
import styled from "styled-components";
import { GoRepo } from "react-icons/go";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";

const RepoCard = ({
  name,
  description,
  html_url,
  size,
  stargazers_count,
  language,
  forks_count,
}) => {
  return (
    <Wrapper>
      <h3>
        <a href={html_url}>
          <span>
            <GoRepo />
          </span>
          {name}
        </a>
      </h3>
      <p>{description}</p>
      <div>
        <div>
          <div>
            <p>{language} </p>
            <p>
              <span>
                <AiFillStar />
              </span>
              {stargazers_count}
            </p>
            <p>
              <span>
                <AiOutlineFork />
              </span>
              {forks_count}
            </p>
          </div>
          <p>{size}KB</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-white);
  padding: 20px;
  color: #24292e;
  display: table;
  a {
    display: flex;
    color: #24292e;
    span {
      margin-right: 5px;
    }
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
    line-height: 1.5rem;
  }
  div {
    display: table-footer-group;
    div {
      display: flex;
      p {
        display: flex;
        margin: 0 5px;
        span {
          margin: 0 5px;
        }
      }
    }
  }
`;

export default RepoCard;
