import React from "react";

export default function h({ donations }) {
  return (
    <div className="list_outer">
      <h1>Top Donation List</h1>
      <table className="tableouter">
        <thead>
          <tr>
            <th>Avetat</th>
            <th>Email</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr>
              <td>
                <div className="abc"></div>
              </td>
              <td>
                <div className="gmail">{donation.email}</div>
              </td>
              <td>
                <div className="amountA">${donation.amount}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
