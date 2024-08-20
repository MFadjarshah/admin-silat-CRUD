import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { memberColumns, memberRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  //To display the data
  const [table, setTable] = useState([]);

  //Fetch data from API database using Axios
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      // .then((res) => console.log(res))
      .then((res) => setTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  // // DELETE function
  // const [data, setData] = useState(memberRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <Link to="/members/test" style={{ textDecoration: "none" }}>
  //             <div className="viewButton">View</div>
  //           </Link>
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/new" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Full Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {/* Display using map function */}
            {table.map((data, i) => (
              <tr key={i}>
                {/* <td>{data.ID}</td> */}
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
                <td>{data.fullName}</td>
                <td>{data.address}</td>
                <td>
                  <a className="btn btn-primary">Update</a>
                  {/* <Link to={`update/${data.ID}`} className="btn btn-primary">
                    Update
                  </Link> */}
                  <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div className="table">
    //   <div className="tableTitle">
    //     List of Member
    //     <Link to="/members/new" className="link">
    //       Add New
    //     </Link>
    //   </div>
    //   <DataGrid
    //     rows={data}
    //     columns={memberColumns.concat(actionColumn)}
    //     initialState={{
    //       pagination: {
    //         paginationModel: { page: 0, pageSize: 10 },
    //       },
    //     }}
    //     pageSizeOptions={[5, 10]}
    //     checkboxSelection
    //   />
    // </div>
  );
};

export default Table;
