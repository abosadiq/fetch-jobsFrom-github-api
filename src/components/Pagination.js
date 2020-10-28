import React from "react";

const Pagination = ({ jobsPerPage, totalJobs, paginate, loading }) => {
  const pageNumber = [];
  for (let idx = 1; idx <= Math.ceil(totalJobs / jobsPerPage); idx++) {
    pageNumber.push(idx);
  }
  return (
    <nav className="d-flex justify-content-center">
      {!loading && (
        <ul className="pagination">
          {pageNumber.map((num) => (
            <li key={num} className="page-item">
              <button onClick={() => paginate(num)} className="page-link">
                {num}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
