// import "./new.scss";
// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const New = () => {
//   const [file, setFile] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [age, setAge] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Use axios lib to past the data
//     axios
//       .post("http://localhost:8081/members/new", {
//         firstName,
//         lastName,
//         age,
//         phone,
//         address,
//       })
//       .then((res) => {
//         console.log(res);
//         // Navigate back to members
//         navigate("/members");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>Add New Member</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form action="" onSubmit={handleSubmit}>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div>
//               <div className="formInput">
//                 <label htmlFor="">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter First Name"
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </div>
//               <div className="formInput">
//                 <label htmlFor="">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Last Name"
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div className="formInput">
//                 <label htmlFor="">Age</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Age"
//                   onChange={(e) => setAge(e.target.value)}
//                 />
//               </div>
//               <div className="formInput">
//                 <label htmlFor="">Phone</label>
//                 <input
//                   type="text"
//                   placeholder="012-3456789"
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <div className="formInput">
//                 <label htmlFor="">Address</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Address"
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </div>
//               <button>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./new.scss";

const BACKEND_URL = "https://glowing-umbrella-rq59r7495jj2pp9x-8081.app.github.dev";

const New = () => {
  // 1. State untuk menyimpan nilai borang
  const [formData, setFormData] = useState({
    zcNumber: "",
    camp: "",
    location: "",
    serialNumber: "",
    partNumber: "",
    type: "",
    status: "",
  });

  const navigate = useNavigate();

  // 2. Fungsi apabila pengguna menaip dalam input
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 3. Fungsi apabila butang Send/Submit ditekan
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/members/new`, formData);
      alert("Data berjaya disimpan!");
      // Selepas berjaya simpan, lencongkan pengguna kembali ke page 1KAD
      navigate("/members/1kad");
    } catch (err) {
      console.error("Ralat semasa hantar data:", err);
      alert("Gagal menyimpan data. Sila semak semula.");
    }
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
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>ZC Number</label>
                <input
                  type="text"
                  name="zcNumber"
                  placeholder="Contoh: ZC-1002"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Camp</label>
                <input
                  type="text"
                  name="camp"
                  placeholder="Contoh: Kem Terendak"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Contoh: Block A"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Serial Number</label>
                <input
                  type="text"
                  name="serialNumber"
                  placeholder="Contoh: SN-88219"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Part Number</label>
                <input
                  type="text"
                  name="partNumber"
                  placeholder="Contoh: PN-4412"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  placeholder="Contoh: Hardware"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  name="status"
                  placeholder="Contoh: Active"
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;