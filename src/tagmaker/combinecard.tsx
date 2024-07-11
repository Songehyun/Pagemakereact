import react from "react";
import Divmaker from "./divmaker";

const Combine: React.FC = () => {
  return (
    <Divmaker classvalue={"card"}>
      <Divmaker classvalue={"card-container"}></Divmaker>
    </Divmaker>
  );
};

export default Combine;
