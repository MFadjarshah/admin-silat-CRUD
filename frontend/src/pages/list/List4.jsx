import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Table from "../../components/table/Table";
import Table4 from "../../components/table1/Table4";
import React from "react";

const List4 = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Table4 />
      </div>
    </div>
  );
};

export default List4;
