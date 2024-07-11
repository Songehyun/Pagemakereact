import { Indiv } from "../interface/useunterface";

const Divmaker: React.FC<Indiv> = ({ classvalue, children }) => {
  return <div className={classvalue}>{children}</div>;
};

export default Divmaker;
