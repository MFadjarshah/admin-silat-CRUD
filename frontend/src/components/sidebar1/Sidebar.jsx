import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img className="logo" src="/logoX-d.gif" alt="Logo X" />
          </div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span className="">Dashboard</span>
            </li>
          </Link>
          <p className="title">MANAGEMENT</p>
          <p className="title">+ LOCATION</p>
          <li
            onClick={() => onCampNameChange("1 KAD")}
            style={{ cursor: "pointer" }}
          >
            <MilitaryTechIcon className="icon" />
            <span className="">1 KAD</span>
          </li>
          {/* Other KAD options here */}
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
