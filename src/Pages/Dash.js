import React from "react";
import "../style/dash.css";
import {
  AiOutlineUser,
  AiFillSetting,
  AiOutlineSearch,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { RiMailOpenFill, RiArrowLeftRightFill } from "react-icons/ri";

const Dash = () => {
  return (
    <div className="mainn">
      <div className="left">
        <div className="user">
          <div className="icon">
            <AiOutlineUser className="iconn" />
          </div>
          <span>Hello, Mophar</span>
        </div>

        <div className="secc">
          <ul>
            <li>
              {" "}
              <RiMailOpenFill className="iccon" />
              Dashboard
            </li>
            <li>
              <RiArrowLeftRightFill className="iccon" />
              Transactions
            </li>
            <li>
              <BsCreditCard2Back className="iccon" />
              Cards
            </li>
            <li>
              <AiFillSetting className="iccon" />
              Settings
            </li>
            <li>
              <BiLogOut className="iccon" />
              <a href="/">Log Out</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="topS">
          <AiOutlineSearch className="iin" />
          <input type="text" placeholder="search" />
        </div>
        <div className="balance">
          <h2>Your Balance: </h2>
          <div className="amt">
            <p>**********</p>
            <AiFillEyeInvisible />
          </div>
        </div>
        <div className="trans">
          <h2>Last Transaction</h2>

          <div className="table">
            <div className="name">
              <div className="immg">
                <img src="net.png" alt="netflix" />
              </div>
              <span>Netflix</span>
            </div>
            <div className="price">
              <p className="debit">-$30</p>
              <p className="bank">city bank</p>
            </div>
            <div className="date">
              <p>2-2-2022</p>
            </div>
          </div>
          <div className="table">
            <div className="name">
              <div className="immg">
                <img src="net.png" alt="netflix" />
              </div>
              <span>Netflix</span>
            </div>
            <div className="price">
              <p className="debit">-$30</p>
              <p className="bank">city bank</p>
            </div>
            <div className="date">
              <p>2-2-2022</p>
            </div>
          </div>
          <div className="table">
            <div className="name">
              <div className="immg">
                <img src="net.png" alt="netflix" />
              </div>
              <span>Netflix</span>
            </div>
            <div className="price">
              <p className="debit">-$30</p>
              <p className="bank">city bank</p>
            </div>
            <div className="date">
              <p>2-2-2022</p>
            </div>
          </div>
          <div className="table">
            <div className="name">
              <div className="immg">
                <img src="net.png" alt="netflix" />
              </div>
              <span>Netflix</span>
            </div>
            <div className="price">
              <p className="debit">-$30</p>
              <p className="bank">city bank</p>
            </div>
            <div className="date">
              <p>2-2-2022</p>
            </div>
          </div>
          <div className="table">
            <div className="name">
              <div className="immg">
                <img src="net.png" alt="netflix" />
              </div>
              <span>Netflix</span>
            </div>
            <div className="price">
              <p className="debit">-$30</p>
              <p className="bank">city bank</p>
            </div>
            <div className="date">
              <p>2-2-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
