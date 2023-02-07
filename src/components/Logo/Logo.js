
import { Log,LogAccent} from "./Logo.styled";

const Logo = (notOpen) => { 
    return (
     <nav>
      <Log to="/" onClick={notOpen}>
       pe<LogAccent>t</LogAccent>ly
      </Log>
     </nav>
    );
}

export default Logo;