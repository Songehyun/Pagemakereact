interface ImgMakerPros {
  srcs: string;
  alts: string;
  calssname: string;
}

const Imgmake: React.FC<ImgMakerPros> = ({ srcs, alts, calssname }) => {
  return <img src={srcs} alt={alts} className={calssname} />;
};

export default Imgmake;
