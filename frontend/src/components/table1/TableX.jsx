// In List.jsx (or wherever your table is located)
import { useNavigate } from "react-router-dom";
import React from "react";

function List({ data }) {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/members/single/${id}`); // Redirect to /single/{id}
  };

  return (
    <table>
      <thead>
        <tr>{/* Table Headers */}</tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.ZCNumber}</td>
            <td>{item.Camp}</td>
            <td>{item.Location}</td>
            <td>{item.SerialNumber}</td>
            <td>{item.PartNumber}</td>
            <td>{item.Type}</td>
            <td style={{ color: item.Status === "RED" ? "red" : "black" }}>
              {item.Status}
            </td>
            <td>
              <button onClick={() => handleViewClick(item.id)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
