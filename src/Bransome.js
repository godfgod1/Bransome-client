import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterContent from "./components/FooterContent";
import Navigation from "./components/Navigation";

import Best20 from "./Pages/BestPage";
import Brand from "./Pages/BrandsPage";
import Home from "./Pages/Home";
 import BrandInfo from "./components/BrandInfo";

function Bransome() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/brand" component={Brand} />
        <Route path="/best20" component={Best20} />

        {/* 브랜드인포 테스트 */}
        <Route path="/brandinfo" component={BrandInfo} />
      </Switch>
    </Router>
  );
}
export default Bransome;
