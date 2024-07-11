const root = document.getElementById("root");
root.style.position = "absolute";
root.style.width = "1920px";
root.style.height = "1080px";
root.style.left = "0px";
root.style.top = "0px";
root.style.background = "#d6c395";

const imagemake = document.createElement("img");
imagemake.style.position = "absolute";
imagemake.style.width = "1956px";
imagemake.style.height = "1307px";
imagemake.style.left = "-7px";
imagemake.style.top = "-134px";
imagemake.style.mixBlendMode = "multiply";
imagemake.src = "/img/backimage.jfif";
imagemake.alt = "메인이미지야";
root.appendChild(imagemake);
const cardonemake = document.createElement("div");
cardonemake.style.position = "absolute";
cardonemake.style.width = "1044px";
cardonemake.style.height = "487px";
cardonemake.style.left = "178px";
cardonemake.style.top = "340px";
root.appendChild(cardonemake);

function makeelement(elementvalue) {
  result = document.createElement(`${elementvalue}`);
  return result;
}

let test = {
  car: 자동차,
  shop: 상점,
  make: 만들다,
};

for (let vlaue in test) {
  console.log(vlaue + ": " + test[vlaue]);
}

function makestyle(element, property, vlaue) {
  `${element}.style.${property} = "${vlaue}"`;
  `${element}.style.${property} = "${vlaue}"`;
  `${element}.style.${property} = "${vlaue}"`;
}

const a = makeelement("div");
