import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import "./home.scss";
// import Attchart from "../../components/attchart/Attchart";
import Revchart from "../../components/revchart/Revchart";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="total" />
          <Widget type="record" />
          <Widget type="red" />
        </div>
        <div className="charts">
          <Featured />
          <Revchart className="title" title="RESULT" aspect={2 / 1} />
        </div>
        <div className="charts">
          {/* <Attchart /> */}
          {/* <Chart /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
