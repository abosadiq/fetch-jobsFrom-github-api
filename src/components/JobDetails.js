import React, { useContext } from "react";
import { JobContext } from "../App";
import moment from "moment";
import ReactMarkdown from "react-markdown";
const JobDetails = ({ history, match }) => {
  const JobsArray = useContext(JobContext);
  const jobs = JobsArray.find((j) => j.id === match.params.id);
  console.log(JobsArray, "gghh");
  const goBcak = () => {
    history.push("/");
  };
  return (
    <div
      style={{
        width: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <button className="btn btn-link" onClick={goBcak}>
        {" "}
        GO Back
      </button>
      {/* <img src={jobs.company_logo} /> */}
      <div
        className="d-flex align-items-center justify-content-between "
        style={{ width: "70%" }}
      >
        <div>
          <p>{jobs.title}</p>
          <h6 className="float-left">
            {" "}
            {moment(jobs.created_at).format("LL")}
          </h6>
        </div>
        <img
          src={jobs.company_logo}
          width="100px"
          height="100px"
          className="mb-3"
          alt={jobs.company}
        />
      </div>
      <div>
        <ReactMarkdown
          style={{ textAlign: "right" }}
          source={jobs.description.replace(/(<([^>]+)>)/gi, "")}
        />
      </div>
    </div>
  );
};

export default JobDetails;
