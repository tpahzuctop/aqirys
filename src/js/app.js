import * as allFunctions from './modules/functions.js';
allFunctions.isWebp();

const container = document.getElementById("myCarousel");
const options = {
    infinite: true,
    adaptiveHeight: true,
    axis: "x",
};

new Carousel(container, options);
