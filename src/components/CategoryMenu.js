import { Link, Route } from "react-router-dom";
import ss from "../logos/categoryAll.jpg";
import sss from "../logos/categoryDrink.png";
import ssss from "../logos/categoryIT.jpg";
import sssss from "../logos/categoryCar.jpg";
const CategoryMenu = () => {
  return (
    <ul>
      <li className="category_best_btn">
        <img className="category_image" src={ss} />
        <Link className="category_best_btn" to="/best20/all">
          전체
        </Link>
      </li>
      <li className="category_best_btn">
        <img className="category_image" src={ssss}></img>
        <Link className="category_best_btn" to="/best20/elec">
          IT 및 미디어 브랜드
        </Link>
      </li>
      <li className="category_best_btn">
        <img className="category_image" src={sss}></img>
        <Link className="category_best_btn" to="/best20/coffee">
          음료 및 커피 브랜드
        </Link>
      </li>
      <li className="category_best_btn">
        <img className="category_image" src={sssss}></img>
        <Link className="category_best_btn" to="/best20/car">
          자동차 브랜드
        </Link>
      </li>
      <li className="category_best_btn">
        <img className="category_image" src={sss}></img>
        <Link className="category_best_btn" to="/best20/it">
          유통 및 의류
        </Link>
      </li>
    </ul>
  );
};

export default CategoryMenu;
