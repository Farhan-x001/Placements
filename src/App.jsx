import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Cabin from "./pages/cabin/Cabin";
import Startups from "./pages/startups/Startups";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar /> 
      <div>
        
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/cabin">{currentUser ? <Cabin /> : <Login />}</Route>
          <Route path="/startups">{currentUser ? <Startups /> : <Login />}</Route>
          <Route path="/posts">
            <Homepage />
          </Route>
          <Route path="/register">
            {currentUser ? <Homepage /> : <Register />}
          </Route>
          <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
