import nav from "./nav";
// import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const getFooter = () => import("./footer");

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
button.addEventListener("click", () => {
  getFooter().then(defaultFooter => {
    document.body.appendChild(defaultFooter.footer);
  });
});

document.body.appendChild(button);
document.body.appendChild(image);