import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Table from "../../components/table/Table";
import Table1 from "../../components/table1/Table1";
import React from "react";

const List = () => {
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
