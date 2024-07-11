interface Indiv {
  classvalue: string;
  children?: React.ReactNode;
}

const Divmaker: React.FC<Indiv> = ({ classvalue, children }) => {
  return <div className={classvalue}>{children}</div>;
};

export default Divmaker;
