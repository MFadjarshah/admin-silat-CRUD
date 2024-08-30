import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./edit.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8081" + id, { name });
  };

  return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div className="top">
            <div className="topContainer">
              <h1 className="title">Update Information</h1>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Link to="/members/view/:id" className="link">
              <div className="updateButton">Update</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
