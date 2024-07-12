import react from "react";
import Divmaker from "./divmaker";
import Hrmaker from "./hrmaker";
import H2maker from "./h2maker";
import Pmaker from "./pmaker";

const Combine2: React.FC = () => {
  return (
    <Divmaker classname={"card2"}>
      <Divmaker classname={"card-container2"}>
        <Hrmaker classname={"card-line2"} />
        <H2maker classname={"card-title2"}>EXCLUSIVE</H2maker>
        <Pmaker classname={"card-text2"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, corporis
          quasi consequatur tempore voluptas explicabo dolorem sed quam
          cupiditate ipsa non magnam delectus distinctio, nemo ratione, eligendi
          maxime molestiae quae.
        </Pmaker>
      </Divmaker>
    </Divmaker>
  );
};

export default Combine2;
