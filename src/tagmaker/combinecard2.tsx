import react from "react";
import Divmaker from "./divmaker";
import Hrmaker from "./hrmaker";
import H2maker from "./h2maker";
import Pmaker from "./pmaker";
import { Maketext, card2title } from "../../static/lorem";

const Combine2: React.FC = () => {
  return (
    <Divmaker classname={"card2"}>
      <Divmaker classname={"card-container2"}>
        <Hrmaker classname={"card-line2"} />
        <H2maker classname={"card-title2"}>{card2title}</H2maker>
        <Pmaker classname={"card-text2"}>{Maketext}</Pmaker>
      </Divmaker>
    </Divmaker>
  );
};

export default Combine2;
