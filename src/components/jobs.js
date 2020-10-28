import React from "react";
import "../App.css";
import JobResult from "./JobResult";
import Loading from "./Loading";
const Jobs = ({ jobsArr, handleSubmit, handleChnage, searchJob, loading }) => {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="d-flex justify-content-center">
            <input
              style={{ width: 400 }}
              className="form-control"
              placeholder="Search for jobs..."
              type="text"
              onChange={handleChnage}
              value={searchJob}
            />
            <button className="btn btn-dark ml-2" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Loading />
        </div>
      ) : (
        jobsArr.map((job) => <JobResult key={job.id} job={job} />)
      )}
    </>
  );
};

export default Jobs;
