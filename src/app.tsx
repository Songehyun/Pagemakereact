import react from "react";
import Imgmake from "./tagmaker/imgtagmaker";
import Divmaker from "./tagmaker/divmaker";

const App: React.FC = () => {
  return (
    <div>
      <Imgmake
        srcs={"../img/backimage.jfif"}
        alts={"메인이미지야"}
        classname={"test"}
      />
      <Divmaker classvalue={"card"}>
        <Divmaker classvalue={"card-container"}></Divmaker>
      </Divmaker>
    </div>
  );
};

export default App;
