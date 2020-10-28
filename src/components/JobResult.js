import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const JobResult = ({ job }) => {
  return (
    <div>
      <div style={{ width: "1000px", margin: "20px auto" }} className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-white">
          <h4 className="card-title">
            {job.title} -
            <span className="text-muted font-weight-light">{job.location}</span>
          </h4>
          <img
            src={job.company_logo}
            width="130px"
            height="100px"
            alt=""
            className="p-4"
          />
        </div>
        <div>
          <div className="card-body">
            <h6 className="float-left ml-2 mr-4">
              {" "}
              {moment(job.created_at).format("LL")}
            </h6>
            <div className="d-flex">
              <span className="bg-info text-white p-1 span">{job.type}</span>
              <span className="bg-info text-white ml-3 p-1 span">
                {job.company}
              </span>
            </div>
            <div className="mt-1">
              <span style={{ marginLeft: "-155px" }} className="float-left">
                Please go and apply here:
              </span>

              <a style={{ marginLeft: "-168px" }} href={job.url}>
                {job.url}
              </a>
            </div>
          </div>
        </div>
        <Link to={`/jobs/${job.id}`}>
          <button className="btn btn-primary float-left mb-4 ml-4">
            View Job Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobResult;
