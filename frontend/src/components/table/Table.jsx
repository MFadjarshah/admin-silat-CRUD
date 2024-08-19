import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { memberColumns, memberRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Table = () => {
  // DELETE function
  const [data, setData] = useState(memberRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/members/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="table">
      <div className="tableTitle">
        List of Member
        <Link to="/members/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={memberColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
