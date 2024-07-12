import react from "react";
import Divmaker from "./divmaker";
import Hrmaker from "./hrmaker";

const Footer: React.FC = () => {
  return (
    <Divmaker classname={"vertical"}>
      <Divmaker classname={"vertical-dot"} />
      <Hrmaker classname={"vertical-line"} />
    </Divmaker>
  );
};

export default Footer;
