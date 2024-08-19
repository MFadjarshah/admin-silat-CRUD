import "./attchart.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Attchart = () => {
  return (
    <div className="attchart">
      <div className="top">
        <p className="title">Attandance Status</p>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text="80%" strokeWidth={5} />
        </div>
        <p className="title">Last week attandence record</p>
        <p className="amount">80/100</p>
        <p className="desc"></p>
      </div>
    </div>
  );
};

export default Attchart;
