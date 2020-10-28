import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Jobs from "./components/jobs";
import JobDetails from "./components/JobDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagination from "./components/Pagination";
export const JobContext = React.createContext();
const App = () => {
  const [jobsArr, setJobsArr] = useState([]);
  const [searchJob, setSearchJob] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDescription(searchJob);
    setSearchJob("");
  };
  const handleChnage = (e) => {
    setSearchJob(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}`
      );
      setJobsArr(res.data);
      setLoading(false);
    };

    getData();
  }, [description]);
  const indexOfLastPage = currentPage * jobsPerPage;
  const indexOfFirstPage = indexOfLastPage - jobsPerPage;
  const cuerrentJobs = jobsArr.slice(indexOfFirstPage, indexOfLastPage);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <JobContext.Provider value={jobsArr}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Jobs
                  jobsArr={cuerrentJobs}
                  handleSubmit={handleSubmit}
                  handleChnage={handleChnage}
                  searchJob={searchJob}
                  loading={loading}
                />
              )}
            />
            <Route path="/jobs/:id" component={JobDetails} />
          </Switch>
        </Router>
        <Pagination
          jobsPerPage={jobsPerPage}
          totalJobs={jobsArr.length}
          paginate={paginate}
          loading={loading}
        />
      </JobContext.Provider>
    </div>
  );
};

export default App;
