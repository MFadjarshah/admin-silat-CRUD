import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./edit.scss";

const Edit = () => {
  return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
        <Navbar />
        <div className="top">
          <h1>Edit</h1>
        </div>
      </div>
    </div>
  );
};

export default Edit;
