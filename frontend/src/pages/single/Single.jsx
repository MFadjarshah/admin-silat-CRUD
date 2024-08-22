import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Revchart from "../../components/revchart/Revchart";
import Chart from "../../components/chart/Chart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { memberColumns, memberRows } from "../../datatablesource";
import axios from "axios";

const Single = () => {
  const { id } = useParams();
  const [data, setData] = useState([memberRows.id]);

  // Fetch the single's data from the server
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="topContainer">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.firstName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+012 3456 789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">17-1, Jalan Villa Kesuma 2</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Malaysia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <Revchart aspect={2 / 1} title="User Payment" />
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
