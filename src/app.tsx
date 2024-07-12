import react from "react";
import Imgmake from "./tagmaker/imgmaker";
import Combine from "./tagmaker/combinecard";
import Combine2 from "./tagmaker/combinecard2";
import Divmaker from "./tagmaker/divmaker";
import Footer from "./tagmaker/footer";

const App: React.FC = () => {
  return (
    <div>
      <Imgmake
        srcs={"../img/backimage.jfif"}
        alts={"메인이미지야"}
        classname={"test"}
      />
      <Combine />
      <Combine2 />
      <Divmaker classname={"arrow"} />
      <Footer />
    </div>
  );
};

export default App;
