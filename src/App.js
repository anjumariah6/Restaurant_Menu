import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import SignedIn from "./pages/SignedIn";
import { auth } from "./pages/Firebase"

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
    }, []);

    return (
      <div className="App">
        <div>
          {authUser ? (
          <>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/login" exact component={SignedIn} />
              <Route path="/" exact component={Home} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/checkout" exact component={Checkout} />
              <Route path="/logout" exact component={Logout} />
            </Switch>
            <Footer />
          </Router>
          </>
        ) : (
            <div>
          <>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/" exact component={Home} />
              <Route path="/menu" exact component={Login} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Login} />
              <Route path="/checkout" exact component={Login} />
              <Route path="/logout" exact component={Login} />
            </Switch>
            <Footer />
          </Router>
          </>
          </div>
        )}
        </div></div>

    );
  }

export default App;
