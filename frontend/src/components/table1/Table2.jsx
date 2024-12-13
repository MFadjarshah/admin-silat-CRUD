import "./table1.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { memberColumns, memberRows } from "./datatablesource";
import axios from "axios";
// import { useParams } from "react-router-dom"; // Import useParams to access route params
import { Link } from "react-router-dom";

const Table2 = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/members/2kad")
      // .then((res) => console.log(res))
      .then((res) => {
        setStudent(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        // setError(err);
        // setLoading(false);
      });
  }, []);

  // Define handleDelete
  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete("http://localhost:8081/members/" + id);
  //     // window.location.reload();
  //     setStudent(student.filter((item) => item.id !== id)); //Prevent Full Page Reload if use window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "zcNumber", headerName: "ZC Number", width: 140 },
    { field: "camp", headerName: "Camp", width: 100 },
    { field: "location", headerName: "Location", width: 140 },
    {
      field: "serialNumber",
      headerName: "Serial Number",
      type: "number",
      width: 140,
      renderCell: (params) => (
        <span>{params.row.serialNumber.toString()}</span> // Convert number to string to avoid commas
      ),
    },
    { field: "partNumber", headerName: "Part Number", width: 180 },
    { field: "type", headerName: "Type", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        let color;
        switch (params.value) {
          case "RED":
            color = "red";
            break;
          case "ORANGE":
            color = "orange";
            break;
          case "GREEN":
            color = "green";
            break;
          default:
            color = "black";
        }
        return <span style={{ color: color }}>{params.value}</span>;
      },
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 240,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
    // { field: "address", headerName: "Address", width: 400 },
    // actionColumn for VIEW and DELETE button
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div className="cellAction">
          <Link
            to={`/members/view/${params.row.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="viewButton">View</div>
          </Link>
          {/* <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div> */}
        </div>
      ),
    },
  ];

  return (
    <div className="table1">
      <div className="tableTitle">
        List of TIS
        <Link to="/members/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={student} // Use the fetched data here
        columns={columns} // Columns defined above
        pageSize={10} // Number of rows per page
        rowsPerPageOptions={[5, 10, 20]} // Page size options
        checkboxSelection // Optional: Allows selection of rows via checkboxes
      />
    </div>
  );
};

export default Table2;
