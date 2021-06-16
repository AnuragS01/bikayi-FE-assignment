import React from "react";

function Table({ winners }) {
  return (
    <table className="table table-success table-striped t-2">
      <thead>
        <tr>
          <th>Year</th>
          <th>Category</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
        {winners.map((item, index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{item.category}</td>
            <td>
              {item.laureates?.map((winner) => (
                <span key={winner.id}>
                  {winner.firstname} {winner.surname},
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
