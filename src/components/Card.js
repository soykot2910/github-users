import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { FcCalendar } from "react-icons/fc";
const Card = () => {
  const { githubUser } = useContext(GithubContext);
  const { avatar_url, login, html_url, name, location, created_at } =
    githubUser;
  let datStr = new Date(created_at).toDateString();

  console.log(datStr);

  return (
    <Wrapper className="section-center">
      <div>
        <img src={avatar_url} alt={name} />
        <h1>{name}</h1>
        <h2>
          <a href={html_url}>@{login}</a>
        </h2>
        <div>
          <p style={{ marginLeft: "3rem", marginRight: "3rem" }}>
            <GoLocation />
            <span style={{ marginLeft: "5px" }}> {location}</span>
          </p>
          <p>
            <FcCalendar />
            <span style={{ marginLeft: "5px" }}> Joined {datStr}</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 8px solid #2caeba;
    }
    h1 {
      font-size: 2.5rem;
      margin: 15px 0px;
    }
    h2 {
      font-size: 1.5rem;
      &:hover {
        text-decoration: underline;
      }
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        color: hsl(210, 22%, 49%);
        font-size: 1.1rem;
      }
      @media (max-width: 576px) {
        flex-direction: column;
        margin: 5px;
        p {
          margin: 2px;
        }
      }
    }
  }
`;
export default Card;
