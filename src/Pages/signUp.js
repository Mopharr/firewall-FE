import React from "react";
import "../style/style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { BiErrorCircle } from "react-icons/bi";

const SignUp = () => {
  const navigate = useNavigate()
   const timer = useRef();
   
   const [err, setErr] = useState(false);
  const [sign, setSign] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setSign({ ...sign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bank-firewall.herokuapp.com/api/register", {
        firstname: sign.firstName,
        lastname: sign.lastName,
        middlename: sign.middleName,
        email: sign.email,
        password: sign.password,
      })
      .then((res) => {
        setSign({
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          password: "",
        });
        setErr(false);
        navigate('signin')
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
          <h2>Welcome </h2>
          <hr />

          <form action="" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="title">First Name</label>
              <div className="inputt">
                <input
                  type="text"
                  name="firstName"
                  value={sign.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="title">Last Name</label>
              <div className="inputt">
                <input
                  type="text"
                  name="lastName"
                  value={sign.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="title">Middle Name</label>
              <div className="inputt">
                <input
                  type="text"
                  name="middleName"
                  value={sign.middleName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="title">Email</label>
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
              Have an account: <a href="/">Go back to login</a>
            </span>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
