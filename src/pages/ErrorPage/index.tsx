import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Message } from "./styles";

const ErrorPage = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (countdown === 1) {
        window.location.href = "/";
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [countdown]);

  return (
    <Container>
      <Message>
        <p>404 - Page not found.</p>
        <p>
          You will be redirected to the Moviepedia <Link to="/">home page</Link>{" "}
          in {countdown} seconds.
        </p>
      </Message>
    </Container>
  );
};

export default ErrorPage;
