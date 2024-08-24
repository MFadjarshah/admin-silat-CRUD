import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const New = () => {
  const [file, setFile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use axios lib to past the data
    axios
      .post("http://localhost:8081/members/new", {
        firstName,
        lastName,
        age,
        phone,
        address,
      })
      .then((res) => {
        console.log(res);
        // Navigate back to members
        navigate("/members");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Member</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form action="" onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Age</label>
                <input
                  type="text"
                  placeholder="Enter Age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="012-3456789"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
