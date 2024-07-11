import { Inhr } from "../interface/useunterface";

const Hrmaker: React.FC<Inhr> = ({ classvalue }) => {
  return <hr className={classvalue} />;
};

export default Hrmaker;
