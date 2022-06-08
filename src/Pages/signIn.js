import React from "react";
import { useState } from "react";
import "../style/style.css";
import axios from "axios";
import { BiErrorCircle } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SignIn = () => {
  const navigate = useNavigate()
  const timer = useRef()
    const [err, setErr] = useState(false);
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setSign({ ...sign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bank-firewall.herokuapp.com/api/login", {
        email: sign.email,
        password: sign.password,
      })
      .then((res) => {
        setSign({
          email: "",
          password: "",
        });
        setErr(false)
        navigate("/dash")

      })
      .catch((err) => {
        console.log(err);
        setErr(true);
        timer.current = window.setTimeout(() => {
          setErr(false);
        }, 4000);
      });
  };

  return (
    <div className="main">
      <div className="picc">
        <img src="yoyo.png" alt="" />
      </div>
      <div className="sign">
         {err ? (
          <div className={err ? "none" : "show"}>
            <p>
              <BiErrorCircle />
              An Error just occur
            </p>
          </div>
        ) : null}
        <div className="signn">
          <h2>Welcome Back!</h2>
          <hr />

          <form action="" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="title">Email Adress/UserName</label>
              <div className="inputt">
                <input
                  type="text"
                  name="email"
                  value={sign.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <div className="tit">
                <label htmlFor="title">Password</label>
                <span>Forget Password?</span>
              </div>
              <div className="inputt">
                <input
                  type="password"
                  name="password"
                  value={sign.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <span className="spann">
              You don't have an account: <a href="/signup">signUp</a>
            </span>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
