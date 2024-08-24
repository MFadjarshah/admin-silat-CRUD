import "./table1.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { memberColumns, memberRows } from "./datatablesource";
import axios from "axios";
import { Link } from "react-router-dom";

const Table1 = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/members")
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
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8081/members/" + id);
      // window.location.reload();
      setStudent(student.filter((item) => item.id !== id)); //Prevent Full Page Reload if use window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "firstName", headerName: "First name", width: 140 },
    { field: "lastName", headerName: "Last name", width: 140 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 50,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 150,
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
    { field: "address", headerName: "Address", width: 400 },
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
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="table1">
      <div className="tableTitle">
        List of Member
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

export default Table1;
