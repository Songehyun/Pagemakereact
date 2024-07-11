import { Inh2 } from "../interface/useunterface";

const H2maker: React.FC<Inh2> = ({ classname, children }) => {
  return <h2 className={classname}>{children}</h2>;
};

export default H2maker;
