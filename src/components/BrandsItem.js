import "../css/brandsItembox.css";

const BrandItem = ({ item }) => {
  return (
    <li className="brands_add_item_box">
      <img className="brand_logo" src={item.logoimg} />
      <button className="brand_delete_btn">-</button>
    </li>
  );
};

export default BrandItem;
