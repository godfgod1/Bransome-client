import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <h3>대충</h3>
      <ul className="nav_links">
        <Link to="/brand">
          <li>brands</li>
        </Link>
        <Link to="/best20">
          <li>best20</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
