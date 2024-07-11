const root = document.getElementById("root");

document.body.style.overflowX = "hidden";
document.body.style.overflowY = "hidden";

function makeelement(elementvalue) {
  let result = document.createElement(elementvalue);
  return result;
}

// style.value = 스타일에 value라는 속성이 뭐지? style[vlaue] = 밸류는 변수 값이구나!
function makestyle(element, object) {
  for (let vlaue in object) {
    element.style[vlaue] = object[vlaue];
  }
}

function styleshort(element, object) {
  for (let value in object) {
    element[value] = object[value];
  }
}

let rootobject = {
  position: "absolute",
  width: "1920px",
  height: "1080px",
  left: "0px",
  top: "0px",
  background: "#d6c395",
};

let imageobject = {
  position: "absolute",
  width: "1956px",
  height: "1307px",
  left: "-7px",
  top: "-134px",
  mixBlendMode: "multiply",
};

let imageshort = {
  src: "/img/backimage.jfif",
  alt: "메인이미지야",
};

let cardoneobject = {
  position: "absolute",
  width: "1044px",
  height: "487px",
  left: "178px",
  top: "340px",
};

let cardoneContainerobject = {
  boxSizing: "border-box",
  position: "absolute",
  left: "0%",
  right: "0%",
  top: "0%",
  bottom: "0%",
  background:
    "linear-gradient(90deg, rgba(180, 165, 122, 0.3) 0%, rgba(214, 195, 149, 0.3) 100%)",
  boxShadow: "1px 4px 15.6px -5px #574c31",
  backdropFilter: "blur(29px)",
  borderRadius: "31px",
};

let cardonetextobject = {
  position: "absolute",
  left: "19.83%",
  right: "2.97%",
  top: "38.6%",
  bottom: "4.52%",
  fontFamily: '"Inter"',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  textAlign: "justify",
  color: "#23201a",
};

let cardonetextshort = {
  innerHTML:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,corporis quasi consequatur tempore voluptas explicabo dolorem sedquam cupiditate ipsa non magnam delectus distinctio, nemo ratione,eligendi maxime molestiae quae.Lorem ipsum dolor sit ametconsectetur adipisicing elit. Ex, corporis quasi consequatur tempore  voluptas explicabo dolorem sed quam cupiditate ipsa non magnam delectus distinctio, nemo ratione, eligendi maxime molestiaequae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,corporis quasi consequatur tempore voluptas explicabo dolorem sedquam cupiditate ipsa non magnam delectus distinctio, nemo ratioeligendi maxime molestiae quae.Lorem ipsum dolor sit aconsectetur adipisicing elit. Ex, corporis quasi consequatur temporevoluptas explicabo dolorem sed quam cupiditate ipsa non magnadelectus distinctio, nemo ratione, eligendi maxime molesti quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,corporis quasi consequatur tempore voluptas explicabo dolorem sedquam cupiditate ipsa non magnam delectus distinctio, nemo ratione, eligendi maxime molestiae quae.Lorem ipsum dolor sit ame  consectetur adipisicing elit. Ex, corporis quasi consequatur tempore voluptas explicabo dolorem sed quam cupiditate ipsa non magnam delectus distinctio, nemo ratione, eligendi maxime molestiaequae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,corporis quasi consequatur tempore voluptas explicabo dolorem sedquam cupiditate ipsa non magnam delectus distinctio, nemo ratione, eligendi maxime molestiae quae.Lorem ipsum dolor sit ame  consectetur adipisicing elit. Ex, corporis quasi consequatur tempore voluptas explicabo dolorem sed quam cupiditate ipsa non magnamdelectus distinctio, nemo ratione, eligendi maxime molestiae quae.",
};

let cardoneLineObject = {
  position: "absolute",
  left: "54.98%",
  right: "2.97%",
  top: "24.23%",
  bottom: "75.36%",
  background:
    "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
};

let cardoneTitleObject = {
  position: "absolute",
  left: "13.79%",
  right: "45.4%",
  top: "11.15%",
  bottom: "63.04%",
  fontFamily: '"Inter"',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "64px",
  lineHeight: "77px",
  textAlign: "justify",
  color: "#23201a",
};

let cardTwoObject = {
  position: "absolute",
  width: "1044px",
  height: "487px",
  left: "178px",
  top: "866px",
};

let cardContainerTwoObject = {
  boxSizing: "border-box",
  position: "absolute",
  left: "0%",
  right: "0%",
  top: "0%",
  bottom: "0%",
  background:
    "linear-gradient(90deg, rgba(180, 165, 122, 0.3) 0%, rgba(214, 195, 149, 0.3) 100%)",
  boxShadow: "1px 4px 15.6px -5px #574c31",
  backdropFilter: "blur(29px)",
  borderRadius: "31px",
};

let cardTextTwoObject = {
  position: "absolute",
  left: "19.83%",
  right: "2.97%",
  top: "38.6%",
  bottom: "4.52%",
  fontFamily: '"Inter"',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  textAlign: "justify",
  color: "#23201a",
};

let cardTextTwoshort = {
  innerHTML:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,corporis quasi consequatur tempore voluptas explicabo dolorem sed quam cupiditate ipsa non magnam delectus distinctio, nemo ratione,eligendi maxime molestia",
};

let cardTitleTwoObject = {
  position: "absolute",
  left: "13.79%",
  right: "52.87%",
  top: "11.15%",
  bottom: "63.04%",
  fontFamily: '"Inter"',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "64px",
  lineHeight: "77px",
  textAlign: "justify",
  color: "#23201a",
};

let cardTitleTwoshort = {
  innerHTML: "EXCLUSIVE",
};

let cardLineTwoObject = {
  position: "absolute",
  left: "54.98%",
  right: "2.97%",
  top: "24.23%",
  bottom: "75.36%",
  background:
    "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
};

let verticalObject = {
  position: "absolute",
  width: "10px",
  height: "532px",
  left: "1699px",
  top: "311px",
};

let verticalDotObject = {
  position: "absolute",
  width: "10px",
  height: "10px",
  left: "1699px",
  top: "833px",
  background: "#977240",
  borderRadius: "5px",
};

let verticalLineObject = {
  position: "absolute",
  left: "88.85%",
  right: "-11.72%",
  top: "28.8%",
  bottom: "71.02%",
  background:
    "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
  transform: "rotate(90deg)",
};

makestyle(root, rootobject);

const img = makeelement("img");
makestyle(img, imageobject);
styleshort(img, imageshort);
root.appendChild(img);

const cardone = makeelement("div");
makestyle(cardone, cardoneobject);
root.appendChild(cardone);

const cardonecontainer = makeelement("div");
makestyle(cardonecontainer, cardoneContainerobject);
cardone.appendChild(cardonecontainer);

const cardonetext = makeelement("p");
makestyle(cardonetext, cardonetextobject);
styleshort(cardonetext, cardonetextshort);
cardone.appendChild(cardonetext);

const cardoneLine = makeelement("hr");
makestyle(cardoneLine, cardoneLineObject);
cardone.appendChild(cardoneLine);

const cardoneTitle = makeelement("h2");
makestyle(cardoneTitle, cardoneTitleObject);
cardone.appendChild(cardoneTitle);

const cardTwo = makeelement("div");
makestyle(cardTwo, cardTwoObject);
root.appendChild(cardTwo);

const cardContainerTwo = makeelement("div");
makestyle(cardContainerTwo, cardContainerTwoObject);
cardTwo.appendChild(cardContainerTwo);

const cardTextTwo = makeelement("p");
makestyle(cardTextTwo, cardTextTwoObject);
styleshort(cardTextTwo, cardTextTwoshort);
cardTwo.appendChild(cardTextTwo);

const cardTitleTwo = makeelement("h2");
makestyle(cardTitleTwo, cardTitleTwoObject);
styleshort(cardTitleTwo, cardTitleTwoshort);
cardTwo.appendChild(cardTitleTwo);

const cardLineTwo = makeelement("hr");
makestyle(cardLineTwo, cardLineTwoObject);
cardTwo.appendChild(cardLineTwo);

const vertical = makeelement("div");
makestyle(vertical, verticalObject);
root.appendChild(vertical);

const verticalLine = makeelement("hr");
makestyle(verticalLine, verticalLineObject);
vertical.appendChild(verticalLine);

const verticalDot = makeelement("div");
makestyle(verticalDot, verticalDotObject);
vertical.appendChild(verticalDot);
