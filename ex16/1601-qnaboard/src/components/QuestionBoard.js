import React, { useState } from "react";

function QuestionBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="container mx-auto p-4">
      <div className="card w-full bg-base-100 shadow-xl p-6 mb-6">
        <div className="overflow-x-auto">
          <table className="table mb-4">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>질문</th>
                <th>작성일</th>
                <th>답변수</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="join m-auto ">
          <button
            className="join-item btn"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            «
          </button>
          <button className="join-item btn">Page {currentPage}</button>
          <button
            className="join-item btn"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionBoard;
