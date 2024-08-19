import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import "./home.scss";
import Attchart from "../../components/attchart/Attchart";
import Revchart from "../../components/revchart/Revchart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="member" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Revchart title="Total Income" aspect={2/1} />
        </div>
        <div className="charts">
          <Attchart />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
