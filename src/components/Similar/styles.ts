import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  padding: 0 4rem;
  color: ${(props) => props.theme.colors.text.primary};

  img {
    width: 10rem;
    border-radius: 1rem;
  }

  img:hover {
    filter: brightness(80%);
  }

  .swiper-slide {
    width: auto;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.theme.colors.text.primary};
    padding: 30px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;
