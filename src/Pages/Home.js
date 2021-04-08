import "aos/dist/aos.css";

import { useEffect } from "react";
import Aos from "aos";

import WelcomeView from "./sections/WelcomeView";
import StoryView from "./sections/StoryView";
import CommentView from "./sections/CommentView";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
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
    </section>
  );
};

export default Home;
