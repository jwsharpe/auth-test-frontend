import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./paths/Login";
import Public from "./paths/Public";
import { IP } from "./index.js";

function App() {
  const _fetchUsers = async () => {
    const res = await fetch(IP + "/users");
    const json = await res.json();
    console.log(json);
  };

  useEffect(() => {
    _fetchUsers();
  }, []);

  return (
    <div className=" h-screen w-screen bg-gray-700 flex justify-center items-center text-white font-bold text-2xl">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Public />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
