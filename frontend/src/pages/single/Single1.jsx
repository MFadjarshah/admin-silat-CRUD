// In Single1.jsx
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Single1() {
  const { id } = useParams(); // Get the ID from the route
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the specific item by ID (this can be from an API or passed as props)
    fetch(`/api/tis/${id}`) // Assuming you have an API endpoint to get the item by ID
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>TIS Details for ID {id}</h1>
      <p>ZC Number: {data.ZCNumber}</p>
      <p>Camp: {data.Camp}</p>
      <p>Location: {data.Location}</p>
      <p>Serial Number: {data.SerialNumber}</p>
      <p>Part Number: {data.PartNumber}</p>
      <p>Type: {data.Type}</p>
      <p>
        Status:{" "}
        <span style={{ color: data.Status === "RED" ? "red" : "black" }}>
          {data.Status}
        </span>
      </p>
    </div>
  );
}

export default Single1;
