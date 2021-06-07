import React, { useState } from "react";
import Drawer from "./assets/drawers.jpg";
import Avatar from "./assets/avatar-michelle.jpg";
import Share from "./assets/icon-share.svg";
import { IoMdShareAlt } from "react-icons/io";
import { SiFacebook, SiPinterest } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";

function App() {
  const [showToggle, setshowToggle] = useState(false);
  const [hoverToggle, setHoverToggle] = useState(false);

  const toggle = () => {
    if (showToggle) {
      return "hide";
    } else {
      return null;
    }
  };

  return (
    <article className="card">
      <div className="img-container">
        <img src={Drawer} alt="drawer" />
      </div>
      <div className="content">
        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p>
          Ever been in a room and felt like something was missing? Pehaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <footer className={toggle()}>
          <div className="author-content">
            <img src={Avatar} alt="avatar" className="avatar" />
            <div className="author">
              <h4>Michelle Appleton</h4>
              <h4>28 Jun 2020</h4>
            </div>
          </div>
          <img
            src={Share}
            className="share"
            alt="share"
            onClick={() => setshowToggle(true)}
          />
        </footer>
        <div className="footer" onClick={() => setHoverToggle(!hoverToggle)}>
          <div className="author-content">
            <img src={Avatar} alt="avatar" className="avatar" />
            <div className="author">
              <h4>Michelle Appleton</h4>
              <h4>28 Jun 2020</h4>
            </div>
          </div>
          <img
            src={Share}
            className="share"
            alt="share"
            onClick={() => setHoverToggle(true)}
          />
        </div>
      </div>
      <div className={`${showToggle ? "share-footer active" : "share-footer"}`}>
        <div>
          <h3>SHARE</h3>
          <SiFacebook className="share-icon" />
          <AiFillTwitterCircle className="share-icon" />
          <SiPinterest className="share-icon" />
        </div>
        <button className="sharebutton" onClick={() => setshowToggle(false)}>
          <IoMdShareAlt className="share-btn" />
        </button>
      </div>
      <div
        className={`${
          hoverToggle
            ? "share-hide share-footer-1"
            : "share-footer share-footer-1"
        }`}
      >
        <h3>SHARE</h3>
        <div>
          <SiFacebook className="share-icon" />
          <AiFillTwitterCircle className="share-icon" />
          <SiPinterest className="share-icon" />
        </div>
      </div>
    </article>
  );
}

export default App;
