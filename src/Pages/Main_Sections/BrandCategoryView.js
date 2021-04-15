import { Link } from "react-router-dom";
import CategoryCarousel from "../../components/CategoryCarousel";

const BrandCategoryView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section id="best_view_container">
      <header>
        <h1>요새 뜨는 핫한 브랜드는 뭐가 있을까?</h1>
      </header>
      <article>
        <div className="category-container">
          <CategoryCarousel />
        </div>
      </article>
    </section>
  );
};

export default BrandCategoryView;
