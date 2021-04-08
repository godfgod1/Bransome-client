import SearchBar from "../../components/SearchBar";
import WorkList from "../../components/WorkList";

const WelcomeView = () => {
  return (
    <article className="home_view_container1">
      <div className="view_1">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1 data-aos="zoom-in">브랜드의 모든 것</h1>
        <h2 data-aos="zoom-in">브랜썸.</h2>
        <p data-aos="zoom-in">쉽고 빠르게 영감을 얻어가세요.</p>
        <SearchBar />
        <WorkList />
      </div>
    </article>
  );
};

export default WelcomeView;
