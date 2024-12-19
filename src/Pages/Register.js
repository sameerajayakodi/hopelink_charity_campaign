import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import registerImage from "../assets/images/registerImage.jpg";
import { server } from "../utils";

const Register = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(server + "auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        password,
        confirmPassword,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        alert(data.message);
        if (res.status === 201) setRedirect(true);
      })
      .catch((error) => console.log(error));
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen  to-90%">
      <div className="flex flex-col w-full h-screen overflow-hidden bg-white rounded-none shadow-2xl md:flex-row">
        <div className="hidden w-full md:block md:w-2/3">
          <img
            src={registerImage}
            alt="Register visual"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-center w-full h-full p-6 md:w-1/3">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <div className="mb-4">
                <label className="block text-base font-semibold text-gray-800">
                  First Name
                </label>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-base font-semibold text-gray-800">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-800">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <div className="mb-4">
                <label className="block text-base font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-base font-semibold text-gray-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Create an Account
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
