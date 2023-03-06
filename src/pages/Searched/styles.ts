import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 11rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    transition: all 0.3s;
  }

  img:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 1.1rem;
    text-align: center;
  }
`;
