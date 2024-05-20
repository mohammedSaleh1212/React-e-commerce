// aosSetup.js
import AOS from "aos";
import "aos/dist/aos.css";

const initAOS = () => {
  AOS.init({
    disable: "phone",
    duration: 700,
    easing: "ease-out-cubic",
  });
};

export default initAOS;

