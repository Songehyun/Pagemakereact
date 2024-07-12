import react from "react";
import Divmaker from "./divmaker";
import Hrmaker from "./hrmaker";
import H2maker from "./h2maker";
import Pmaker from "./pmaker";
import { Maketext, cardtitle } from "../../static/lorem";

const Combine: React.FC = () => {
  return (
    <Divmaker classname={"card"}>
      <Divmaker classname={"card-container"}>
        <Hrmaker classname={"card-line"} />
        <H2maker classname={"card-title"}>{cardtitle}</H2maker>
        <Pmaker classname={"card-text"}>{Maketext}</Pmaker>
      </Divmaker>
    </Divmaker>
  );
};

export default Combine;
