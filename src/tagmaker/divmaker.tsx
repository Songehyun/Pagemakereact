import { Indiv } from "../interface/useunterface";

const Divmaker: React.FC<Indiv> = ({ classname, children }) => {
  return <div className={classname}>{children}</div>;
};

export default Divmaker;
