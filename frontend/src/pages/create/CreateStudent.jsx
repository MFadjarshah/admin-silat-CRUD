import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // Use axios library to past the data
    axios
      .post("http://localhost:8081/create", {
        firstName,
        lastName,
        age,
        address,
      })
      .then((res) => {
        console.log(res);
        //   Navigate back to home
        navigate("/members");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
