import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Table from "../../components/table/Table";
import Table1 from "../../components/table1/Table1";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

const List = () => {
  // //To display the data
  // const [silat, setSilat] = useState([]);

  // //Fetch data from API database using Axios
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/")
  //     // .then((res) => console.log(res))
  //     .then((res) => setSilat(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Table1 />
      </div>
    </div>
  );
};

export default List;
