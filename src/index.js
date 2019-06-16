import nav from "./nav";
// import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
// import * as gsap from "gsap";

import buttonStyles from "./button.css";

const getFooter = () => import(/* webpackChunkName: "footer" */ "./footer");
const getGsap = () => import(/* webpackChunkName: "gsap" */ "gsap");
const getStyle = color => import(`./button-styles/${color}`);

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
button.addEventListener("click", () => {
  getFooter().then(defaultFooter => {
    document.body.appendChild(defaultFooter.footer);
  });

  getGsap().then(gsap => {
    console.log(gsap);
  });

  getStyle("blue").then(style => {
    console.log(`style`, style);
    button.style = style.default;
  });
});

document.body.appendChild(button);
document.body.appendChild(image);
