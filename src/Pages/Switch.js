import { Router, Route, Switch } from "react-router";
import Best20 from "./BestPage";
import Brand from "./BrandsPage";
import MainPage from "./MainPage";

const SwitchRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/brand" component={Brand} />
      <Route path="/best20" component={Best20} />
    </Switch>
  );
};

export default SwitchRoute;
//<Route path="/mypages" component={} />
