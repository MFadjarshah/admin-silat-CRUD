import "./widget.scss";
import React from "react";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

const Widget = ({ type }) => {
  let data;

  // Temporary values
  const amount1 = 100; // Total of TIS
  const amount2 = 5; // Total of TIS Recorded
  const amount3 = 1; // Red Status

  switch (type) {
    case "total":
      data = {
        title: "TOTAL OF TIS",
        // isTotal: true,
        amount: amount1,
        link: "View all TIS",
        icon: (
          <FormatListBulletedIcon
            className="icon"
            style={{
              // color: "crimson",
              // backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    case "record":
      data = {
        title: "TOTAL OF TIS RECORDED",
        // isTotal: false,
        amount: amount2,
        link: "View all TIS",
        icon: (
          <FormatListNumberedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "red":
      data = {
        title: "RED STATUS",
        // isTotal: false,
        // isMoney: true,
        amount: amount3,
        link: "See details",
        icon: (
          <ErrorOutlineIcon
            className="icon"
            style={{
              // backgroundColor: "rgba(128, 0, 128, 0.2)",
              // color: "purple",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.amount}
          {/* {data.isTotal && ""} {amount1} */}
          {/* {data.is && ""} {amount2} */}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
