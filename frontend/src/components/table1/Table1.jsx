import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./table1.scss"; // Mengimport gaya SCSS

const BACKEND_URL = "https://glowing-umbrella-rq59r7495jj2pp9x-8081.app.github.dev";

// Konfigurasi Lajur Responsif
const baseColumns = [
  { field: "ID", headerName: "ID", flex: 0.5, minWidth: 60 },
  { field: "zcNumber", headerName: "ZC Number", flex: 1, minWidth: 110 },
  { field: "camp", headerName: "Camp", flex: 1, minWidth: 100 },
  { field: "location", headerName: "Location", flex: 1, minWidth: 110 },
  { field: "serialNumber", headerName: "Serial Number", flex: 1.2, minWidth: 120 },
  { field: "partNumber", headerName: "Part Number", flex: 1.2, minWidth: 120 },
  { field: "type", headerName: "Type", flex: 0.8, minWidth: 90 },
  { field: "status", headerName: "Status", flex: 0.9, minWidth: 100 },
];

const Table1 = () => {
  const [data, setData] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/members/1kad`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Ralat memuatkan data 1KAD:", err));
  }, []);

  // Padam Data
  const handleDelete = (id) => {
    if (window.confirm("Adakah anda pasti ingin memadam data ini secara kekal?")) {
      axios
        .delete(`${BACKEND_URL}/members/1kad/${id}`)
        .then(() => setData(data.filter((item) => (item.ID || item.id) !== id)))
        .catch((err) => console.error("Ralat memadam data:", err));
    }
  };

  // Lajur Action
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      minWidth: 130,
      renderCell: (params) => {
        const rowId = params.row.ID || params.row.id;
        return (
          <div className="cellAction">
            <Link to={`/members/view/1kad/${rowId}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(rowId)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        List of TIS
        <Link to="/members/new" className="link">
          Add New
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={baseColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        getRowId={(row) => row.ID || row.id}
        autoHeight
      />
    </div>
  );
};

export default Table1;