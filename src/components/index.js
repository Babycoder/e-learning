import Navbar from "./Navbar";
import Hero from "./Hero";
import Companies from "./Companies";
import Courses from "./Courses";
import Achievement from "./Achievement";
import AchievementCard from "./AchievementCard";

const slickSettings = {
  dots: true,
  infinite: false,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
  ],
};

export { Hero, Navbar, Companies, Courses, Achievement, AchievementCard, slickSettings };
