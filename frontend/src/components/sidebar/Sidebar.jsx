import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupsIcon from "@mui/icons-material/Groups";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
// import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  // const { camp } = useParams(); // Get the student ID from URL parameters

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <span className="logo">Silat Admin</span> */}
          <div className="logo">
            <img className="logo" src="/logoX-d.png" alt="Logo X" />
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
          {/* <Link to="/members" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span className="">Members</span>
            </li>
          </Link> */}
          <Link to="/members/1kad" style={{ textDecoration: "none" }}>
            <li>
              <MilitaryTechIcon className="icon" />
              <span className="">1 KAD</span>
            </li>
          </Link>
          <Link to="/members/2kad" style={{ textDecoration: "none" }}>
            <li>
              <MilitaryTechIcon className="icon" />
              <span className="">2 KAD</span>
            </li>
          </Link>
          <Link to="/members/3kad" style={{ textDecoration: "none" }}>
            <li>
              <MilitaryTechIcon className="icon" />
              <span className="">3 KAD</span>
            </li>
          </Link>
          <Link to="/members/4kad" style={{ textDecoration: "none" }}>
            <li>
              <MilitaryTechIcon className="icon" />
              <span className="">4 KAD</span>
            </li>
          </Link>
          <Link to="/members/19ramd" style={{ textDecoration: "none" }}>
            <li>
              <MilitaryTechIcon className="icon" />
              <span className="">19 RAMD</span>
            </li>
          </Link>
          {/* <Link to="/members/single" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentIndIcon className="icon" />
              <span className="">Profile</span>
            </li>
          </Link> */}
          {/* <p className="title">STATUS</p>
          <li>
            <MonetizationOnOutlinedIcon className="icon" />
            <span className="">Fee</span>
          </li>
          <li>
            <InventoryOutlinedIcon className="icon" />
            <span className="">Attandance</span>
          </li> */}
          <p className="title">SETTING</p>
          {/* <li>
            <ContactSupportOutlinedIcon className="icon" />
            <span className="">Contact Us</span>
          </li> */}
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span className="">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
