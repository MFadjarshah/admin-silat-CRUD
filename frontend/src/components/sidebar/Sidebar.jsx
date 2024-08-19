import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Silat Admin</span>
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
          <Link to="/members" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span className="">Members</span>
            </li>
          </Link>
          <Link to="/members/single" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentIndIcon className="icon" />
              <span className="">Profile</span>
            </li>
          </Link>
          <p className="title">STATUS</p>
          <li>
            <MonetizationOnOutlinedIcon className="icon" />
            <span className="">Fee</span>
          </li>
          <li>
            <InventoryOutlinedIcon className="icon" />
            <span className="">Attandance</span>
          </li>
          <p className="title">SETTING</p>
          <li>
            <ContactSupportOutlinedIcon className="icon" />
            <span className="">Contact Us</span>
          </li>
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
