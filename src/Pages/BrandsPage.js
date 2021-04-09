import react from "react";
import {
  NavLink as Link,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import netflix from "../images/test.netflix.png";

const Brand = () => {
  return (
    <div>
      <h1>Brands</h1>
      <Link to="/brandinfo" exact className="Brand-logo">
        <img id="logo" src={netflix} />
      </Link>
    </div>
  );
};

export default Brand;
