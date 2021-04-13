import "aos/dist/aos.css";

import { useEffect } from "react";
import Aos from "aos";

import WelcomeView from "./Main_Sections/WelcomeView";
import StoryView from "./Main_Sections/StoryView";
import CommentView from "./Main_Sections/CommentView";
import FooterContent from "../components/FooterContent";
import BrandCategoryView from "./Main_Sections/BrandCategoryView";
import Introduce from "./Main_Sections/IntroduceView";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // useEffect(() => {
  //   if (Aos) {
  //     Aos.refresh();
  //   }
  // }, []);

  return (
    <section className="home_container">
      <WelcomeView />
      <BrandCategoryView />
      <Introduce />
      <CommentView />
      <FooterContent />
    </section>
  );
};

export default Home;
