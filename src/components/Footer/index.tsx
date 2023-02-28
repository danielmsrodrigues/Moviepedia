import { Container } from "./styles";
import { BiCameraMovie } from "react-icons/bi";

const Footer = () => {
  return (
    <Container>
      <p>MoviePedia</p>
      <BiCameraMovie />
      <p>A library of movies.</p>
    </Container>
  );
};

export default Footer;
