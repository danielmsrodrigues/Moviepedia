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
    color: ${(props) => props.theme.colors.text.primary};
    font-weight: bold;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const ErrorMsg = styled.p`
  text-align: center;
  font-size: 2rem;
`;
