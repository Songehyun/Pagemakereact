import react from "react";
import Imgmake from "./tagmaker/imgtagmaker";

const App: React.FC = () => {
  return (
    <div>
      <Imgmake srcs={"../img/backimage.jfif"} alts={"메인이미지야"} />
    </div>
  );
};

export default App;
