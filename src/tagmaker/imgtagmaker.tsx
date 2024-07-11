interface ImgMakerPros {
  srcs: string;
  alts: string;
  classname: string;
}

const Imgmake: React.FC<ImgMakerPros> = ({ srcs, alts, classname }) => {
  return <img src={srcs} alt={alts} className={classname} />;
};

export default Imgmake;
