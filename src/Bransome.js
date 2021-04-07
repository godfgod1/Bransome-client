import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import SwitchRoute from "./Pages/Switch";
function Bransome() {
  return (
    <Router>
      <div>
        <Navigation />
        <SwitchRoute />
      </div>
    </Router>
  );
}
export default Bransome;
