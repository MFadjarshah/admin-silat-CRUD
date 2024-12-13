import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Table from "../../components/table/Table";
import Table2 from "../../components/table1/Table2";
import React from "react";

const List2 = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Table2 />
      </div>
    </div>
  );
};

export default List2;
