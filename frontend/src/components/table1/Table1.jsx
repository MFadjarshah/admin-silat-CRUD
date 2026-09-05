import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://glowing-umbrella-rq59r7495jj2pp9x-8081.app.github.dev";

// Lajur disesuaikan dengan struktur MySQL anda (ID, ZC Number, Camp, dll.)
const baseColumns = [
  { field: "ID", headerName: "ID", width: 70 },
  { field: "zcNumber", headerName: "ZC Number", width: 130 },
  { field: "camp", headerName: "Camp", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  { field: "serialNumber", headerName: "Serial Number", width: 150 },
  { field: "partNumber", headerName: "Part Number", width: 150 },
  { field: "type", headerName: "Type", width: 120 },
  { field: "status", headerName: "Status", width: 120 },
];

const Table1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/members/1kad`)
      .then((res) => {
        console.log("Data 1KAD berjaya dimuatkan:", res.data);
        setData(res.data);
      })
      .catch((err) => console.error("Ralat memuatkan data 1KAD:", err));
  }, []);

  // Fungsi padam (DELETE)
  const handleDelete = (id) => {
    if (window.confirm("Adakah anda pasti ingin memadam data ini?")) {
      axios
        .delete(`${BACKEND_URL}/members/${id}`)
        .then(() => {
          setData(data.filter((item) => (item.ID || item.id) !== id));
        })
        .catch((err) => console.error("Ralat memadam data:", err));
    }
  };

  // Menambah lajur "Actions" di bahagian paling kanan
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        const rowId = params.row.ID || params.row.id;
        return (
          <div className="cellAction" style={{ display: "flex", gap: "15px" }}>
            <Link to={`/members/view/1kad/${rowId}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(rowId)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable" style={{ padding: "20px" }}>
      {/* Header: Tajuk & Butang Add New */}
      <div
        className="datatableTitle"
        style={{
          width: "100%",
          fontSize: "24px",
          color: "gray",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        List of TIS
        <Link
          to="/members/new"
          className="link"
          style={{
            textDecoration: "none",
            color: "green",
            fontSize: "16px",
            fontWeight: "400",
            border: "1px solid green",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add New
        </Link>
      </div>

      {/* DataGrid Table */}
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={baseColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          getRowId={(row) => row.ID || row.id}
        />
      </div>
    </div>
  );
};

export default Table1;