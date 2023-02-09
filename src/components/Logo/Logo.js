import { Log, LogAccent } from "./Logo.styled";

const Logo = ({ noOpen }) => {
  return (
    <nav>
      <Log to="/" onClick={noOpen}>
        pe<LogAccent>t</LogAccent>ly
      </Log>
    </nav>
  );
};

export default Logo;
