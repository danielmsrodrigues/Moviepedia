import { Container } from "./styles";
import ThemeBtn from "../ThemeBtn";

const Header: React.FC = () => {
  return (
    <Container>
      Moviepedia
      <ThemeBtn />
    </Container>
  );
};

export default Header;
