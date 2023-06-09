import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import { LogoLong } from "../components";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <div
          style={{
            height: "100px",
            marginLeft: "60px",
            position: "absolute",
            top: "30px",
          }}
        >
          <Link to="/landing">
            <LogoLong />
          </Link>
        </div>
        <h1 style={{ fontSize: "200px" }}>404</h1>
        <h3>Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
