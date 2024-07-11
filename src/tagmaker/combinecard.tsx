import react from "react";
import Divmaker from "./divmaker";
import Hrmaker from "./hrmaker";
import H2maker from "./h2maker";

const Combine: React.FC = () => {
  return (
    <Divmaker classname={"card"}>
      <Divmaker classname={"card-container"}>
        <Hrmaker classname={"card-line"} />
        <H2maker classname={"card-title"}>INDENTATION</H2maker>
      </Divmaker>
    </Divmaker>
  );
};

export default Combine;
