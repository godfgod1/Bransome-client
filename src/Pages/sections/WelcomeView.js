import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../css/welcomeview.css";
const WelcomeView = () => {
  return (
    <article className="home_view_container1">
      <div className="view_1">
        <h1 data-aos="zoom-in">브랜드의 모든 것</h1>
        <h2 data-aos="zoom-in">브랜썸.</h2>
        <h3 data-aos="zoom-in">쉽고 빠르게 영감을 얻어가세요.</h3>
        <div className="search" data-aos="fade-up">
          <input type="search"></input>
          <FontAwesomeIcon icon={faSearch} className="search_icon" />
        </div>
      </div>
    </article>
  );
};

export default WelcomeView;
