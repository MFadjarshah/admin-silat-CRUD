import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Revchart from "../../components/revchart/Revchart";
import Chart from "../../components/chart/Chart";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { memberColumns, memberRows } from "../../datatablesource";
import axios from "axios";

const Single = () => {
  const [student, setStudent] = useState(""); // Initialize with null (data might not be immediately available)
  const { id } = useParams(); // Get the student ID from URL parameters

  // Fetch the single's data from the server
  useEffect(() => {
    axios
      .get("http://localhost:8081/members/view/" + id)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/members/view/" + id)
  //     .then((res) => {
  //       console.log("Fetched data:", res.data); // Debugging log
  //       setStudent(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching student data:", err);
  //     });
  // }, [id]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="topContainer">
            <Link to="/members/edit/:id" className="link">
              <div className="editButton">Edit</div>
            </Link>
            {/* <Link
              to={`/members/edit/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="editButton">Edit</div>
            </Link> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{student.firstName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">{student.age}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">012-3456789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{student.address}</span>
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
