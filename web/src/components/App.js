import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import CardGenerator from "./CardGenerator";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/CardGenerator" component={CardGenerator} />
      </Switch>
    </>
  );
}

export default App;
