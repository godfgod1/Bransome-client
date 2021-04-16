import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterContent from "./components/FooterContent";
import Navigation from "./components/Navigation";

import Best20 from "./Pages/BestPage/BestPage";
import BrandPages from "./Pages/BrandsPage/BrandsPage";
import Home from "./Pages/Home";
import BrandInfo from "./Pages/Sub_Sections/BrandInfo";
import MyPage from "./Pages/Sub_Sections/MyPage";
function Bransome() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/brand" component={BrandPages} />
        <Route path="/best20" component={Best20} />
        <Route path="/brandinfo" component={BrandInfo} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
}
export default Bransome;
