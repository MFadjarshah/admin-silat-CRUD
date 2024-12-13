import "./featured.scss";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Table } from "@mui/joy";
import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        {/* <h1 className="title">PERCENTAGE</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={5} text="5%" strokeWidth={5} />
        </div>
        <p className="title">Percentage of Recorded TIS</p>
        <p className="amount">5</p>
        <p className="desc">
          Simulation data to show how the monitoring portal is working.
        </p> */}
        <h1 className="title">LEAD TIME</h1>
      </div>
      <div className="bottom">
        <div className="titleBottom">DET-Cooler</div>
        <div style={{ fontSize: "14px" }}>(10 Months)</div>
        <Table aria-label="basic table" sx={{ outline: "1px solid black" }}>
          <thead>
            <tr>
              {/* <th style={{ width: "40%" }}>Lead Time</th> */}
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#FF0000",
                  textAlign: "center",
                }}
              >
                RED
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#FFA500",
                  textAlign: "center",
                }}
              >
                ORANGE
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#82ca9d",
                  textAlign: "center",
                }}
              >
                GREEN
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>&lt;10 months</td>
              <td>10 to 16 months</td>
              <td>&gt;16 months</td>
            </tr>
          </tbody>
        </Table>
        <div className="titleBottom">Others</div>
        <div style={{ fontSize: "14px" }}>(5 Months)</div>
        <Table aria-label="basic table" sx={{ outline: "1px solid black" }}>
          <thead>
            <tr>
              {/* <th style={{ width: "40%" }}>Lead Time</th> */}
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#FF0000",
                  textAlign: "center",
                }}
              >
                RED
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#FFA500",
                  textAlign: "center",
                }}
              >
                ORANGE
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#82ca9d",
                  textAlign: "center",
                }}
              >
                GREEN
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>&lt;5 months</td>
              <td>5 to 11 months</td>
              <td>&gt;11 months</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Featured;
