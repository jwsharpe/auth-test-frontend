import React from "react";
import { IP } from "../index.js";

const Login = () => {
  const login = async good => {
    let mainBody = {};

    if (good) {
      mainBody = {
        email: "email@email.com"
      };
    }

    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };

    const res = await fetch(IP + "/users/login", content);
    const json = await res.json();
    if (json.name) {
      console.log(json);
    } else {
      console.log("failed");
    }
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          login(true);
        }}
      >
        login succeed
      </button>
      <button
        onClick={() => {
          login(false);
        }}
      >
        login fail
      </button>
    </div>
  );
};

export default Login;
