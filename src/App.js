import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "grommet";
import Header from "./components/Header";
import About from "./components/About";
import GeneticsLayout from "./components/GeneticsLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Box margin="medium">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/genetics">
              <GeneticsLayout />
            </Route>
            <Route path="/">
              <p> Testing Landing </p>
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

export default App;
