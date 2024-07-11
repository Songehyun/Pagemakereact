interface ImgMakerPros {
  srcs: string;
  alts: string;
}

const Imgmake: React.FC<ImgMakerPros> = ({ srcs, alts }) => {
  return <img src={srcs} alt={alts} />;
};

export default Imgmake;
