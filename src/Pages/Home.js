import "aos/dist/aos.css";

import { useEffect } from "react";
import Aos from "aos";

import WelcomeView from "./sections/WelcomeView";
import StoryView from "./sections/StoryView";
import CommentView from "./sections/CommentView";
import FooterContent from "../components/FooterContent";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    if (Aos) {
      Aos.refresh();
    }
  }, []);

  return (
    <section className="home_container">
      <WelcomeView />
      <StoryView />
      <CommentView />
      <FooterContent />
    </section>
  );
};

export default Home;
