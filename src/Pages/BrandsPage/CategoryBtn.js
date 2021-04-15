const CategoryBtn = ({ categoriesBtn, filterBrand }) => {
  return (
    <article className="categories_container">
      {categoriesBtn.map((btn, idx) => {
        return (
          <button
            type="button"
            onClick={() => filterBrand(btn)}
            key={idx}
            className="brand_category"
          >
            {btn}
          </button>
        );
      })}
    </article>
  );
};

export default CategoryBtn;
