import React from "react";
import "./leftSide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMagnifyingGlass,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

function LeftSide() {
  return (
    <div className="LeftSide">
      <div className="head">
        <div className="first">
          <ul>
            <li className="Big">Friend request</li>
            <li>
              <a href="#">See All</a>
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <li>
              <img className="imgBig" src="./images/img1.png" alt="" />
            </li>
            <li className="secondDiv">
              <div>Haroon</div>
              <div>
                <img className="img" src="./images/img1.png" alt="" />
                <p>Mutual Friend</p>
              </div>
            </li>
            <li>3w</li>
          </ul>
        </div>
        <div className="third">
          <button className="btn blue">Confirm</button>
          <button className="btn grey">Delete</button>
        </div>
      </div>
      <div className="center">
        <div className="first">
          <div className="Big" style={{ color: "#6D6F73" }}>
            Contact
          </div>
          <ul>
            <li>
              <FontAwesomeIcon style={{ color: "#6D6F73" }} icon={faVideo} />
            </li>
            <li>
              <FontAwesomeIcon
                style={{ color: "#6D6F73" }}
                icon={faMagnifyingGlass}
              />
            </li>
            <li>
              <FontAwesomeIcon style={{ color: "#6D6F73" }} icon={faEllipsis} />
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot">
        <h3>Group conversation</h3>
        <div>
          <img className="img" src="./images/img1.png" alt="" />
          <p>Create New Group</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
