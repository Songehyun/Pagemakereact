import { Inp } from "../interface/useunterface";

const Pmaker: React.FC<Inp> = ({ classname, children }) => {
  return <h2 className={classname}>{children}</h2>;
};

export default Pmaker;
