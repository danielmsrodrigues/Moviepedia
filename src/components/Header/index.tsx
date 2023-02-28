import { Container, LightSwitch } from "./styles";
import { Link } from "react-router-dom";
import { HeaderWrapper, Logo } from "./styles";
import ThemeBtn from "../ThemeBtn";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p>Moviepedia</p>
          </Link>
        </Logo>
        <LightSwitch>
          <ThemeBtn />
        </LightSwitch>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
