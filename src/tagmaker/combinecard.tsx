import react from "react";
import Divmaker from "./divmaker";
import Hrmaker from "./hrmaker";
import H2maker from "./h2maker";
import Pmaker from "./pmaker";

const Combine: React.FC = () => {
  return (
    <Divmaker classname={"card"}>
      <Divmaker classname={"card-container"}>
        <Hrmaker classname={"card-line"} />
        <H2maker classname={"card-title"}>INDENTATION</H2maker>
        <Pmaker classname={"card-text"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, corporis
          quasi consequatur tempore voluptas explicabo dolorem sed quam
          cupiditate ipsa non magnam delectus distinctio, nemo ratione, eligendi
          maxime molestiae quae.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, corporis quasi consequatur tempore voluptas
          explicabo dolorem sed quam cupiditate ipsa non magnam delectus
          distinctio, nemo ratione, eligendi maxime molestiae quae.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ex, corporis quasi
          consequatur tempore voluptas explicabo dolorem sed quam cupiditate
          ipsa non magnam delectus distinctio, nemo ratione, eligendi maxime
          molestiae quae.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ex, corporis quasi consequatur tempore voluptas explicabo
          dolorem sed quam cupiditate ipsa non magnam delectus distinctio, nemo
          ratione, eligendi maxime molestiae quae.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex, corporis quasi consequatur tempore
          voluptas explicabo dolorem sed quam cupiditate ipsa non magnam
          delectus distinctio, nemo ratione, eligendi maxime molestiae
          quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          corporis quasi consequatur tempore voluptas explicabo dolorem sed quam
          cupiditate ipsa non magnam delectus distinctio, nemo ratione, eligendi
          maxime molestiae quae.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, corporis quasi consequatur tempore voluptas
          explicabo dolorem sed quam cupiditate ipsa non magnam delectus
          distinctio, nemo ratione, eligendi maxime molestiae quae.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ex, corporis quasi
          consequatur tempore voluptas explicabo dolorem sed quam cupiditate
          ipsa non magnam delectus distinctio, nemo ratione, eligendi maxime
          molestiae quae.
        </Pmaker>
      </Divmaker>
    </Divmaker>
  );
};

export default Combine;
