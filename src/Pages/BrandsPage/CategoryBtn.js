import { Link } from "react-router-dom";

const CategoryBtn = ({ name, handleSetCategory, catogryActive }) => {
  return (
    <Link
      to={`/brand/${name}`}
      className={`catogry_btn ${catogryActive ? "categoryActive" : null}`}
      onClick={() => handleSetCategory(name)}
    >
      {name.toUpperCase()}
    </Link>
    // <article className="categories_container">
    //   {categoriesBtn.map((btn, idx) => {
    //     return (
    //       <button
    //         type="button"
    //         onClick={() => setCategoriesBtn(btn)}
    //         key={idx}
    //         className="brand_category"
    //       >
    //         {btn}
    //       </button>
    //     );
    //   })}
    // </article>
  );
};

export default CategoryBtn;
