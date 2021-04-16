import SearchBar from "../../components/SearchBar";
import Bransome from "../../logos/bransome4-white2.png";

const WelcomeView = () => {
  return (
    <article className="home_view_container1">
      <div className="view_1">
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
        <h1 data-aos="zoom-in">브랜드의 모든 것</h1>
        <img src={Bransome} data-aos="zoom-in" />
        <p data-aos="zoom-in">쉽고 빠르게 브랜드 정보를 찾아보세요</p>
        <SearchBar />
      </div>
    </article>
  );
};

export default WelcomeView;
