import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import OnlineExp from "./components/Experience/OnlineExp/OnlineExp";
import OfflineExp from "./components/Experience/OfflineExp/OfflineExp";
import Checkout from "./components/Checkout/Checkout";
import { useEffect } from "react";
import { auth } from "./components/Header/Firebase";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useStateValue } from './components/Header/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/OnlineExp" component={OnlineExp} />
          <Route exact path="/OfflineExp" component={OfflineExp} />
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/admin">
            <h1>This is the hosting page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
