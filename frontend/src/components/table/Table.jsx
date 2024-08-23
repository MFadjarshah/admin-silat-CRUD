import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { memberColumns, memberRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  // DELETE function
  const [data, setData] = useState(memberRows);

  // Fetch data from API database using Axios
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    // setData(data.filter((item) => item.id !== id));
    try {
      await axios.delete("http://localhost:8081/members/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/members/${params.id}`}
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
        );
      },
    },
  ];

  return (
    <div className="table">
      <div className="tableTitle">
        List of Member
        {/* <Link to="/members/new" className="link"> */}
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

// import "./table.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { memberColumns, memberRows } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const Table = () => {
//   const [data, setData] = useState([]);

//   // Fetch data when the component mounts
//   useEffect(() => {
//     const loadData = async () => {
//       const members = await memberRows();
//       setData(members);
//     };

//     loadData();
//   }, []);

//   // DELETE function
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/members/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="table">
//       <div className="tableTitle">
//         List of Member
//         <Link to="/members/new" className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         rows={data}
//         columns={memberColumns.concat(actionColumn)}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 10 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Table;
