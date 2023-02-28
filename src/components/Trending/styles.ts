import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;

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
    color: #fff;
    padding: 30px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 1rem 0;
  font-size: 1.7rem;
`;
