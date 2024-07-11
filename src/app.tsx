import react from "react";
import Imgmake from "./imgtagmaker";

const App: React.FC = () => {
  return (
    <div>
      <Imgmake srcs={"../img/backimage.jfif"} alts={"메인이미지야"} />
    </div>
  );
};

export default App;
