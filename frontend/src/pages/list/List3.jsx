import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Table from "../../components/table/Table";
import Table3 from "../../components/table1/Table3";
import React from "react";

const List3 = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Table3 />
      </div>
    </div>
  );
};

export default List3;
