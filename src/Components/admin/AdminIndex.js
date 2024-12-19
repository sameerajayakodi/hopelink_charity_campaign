import React, { useEffect, useState } from "react";
import { server } from "../../utils";

function AdminIndex() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  function formatCount(a) {
    return a < 10 ? "0" + a : a;
  }
  useEffect(() => {
    fetch(server + "dashboard/admin", { method: "GET", credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-[#333]">Admin Dashboard</h1>{" "}
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#AF1B3F]">
          {" "}
          <h2 className="text-xl font-semibold text-[#333]">Total Campaigns</h2>
          <p className="text-2xl font-bold text-[#AF1B3F]">
            {formatCount(details.campaignCount)}
          </p>{" "}
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#AF1B3F]">
          <h2 className="text-xl font-semibold text-[#333]">Total Users</h2>
          <p className="text-2xl font-bold text-[#AF1B3F]">
            {" "}
            {formatCount(details.userCount)}
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#AF1B3F]">
          <h2 className="text-xl font-semibold text-[#333]">
            Recent Donations
          </h2>
          <ul className="mt-4">
            {details &&
              details.list.map((donation) => (
                <li className="text-sm text-[#555]">
                  {`${donation.name} donated $${donation.amount} to ${donation.campaign}`}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdminIndex;
