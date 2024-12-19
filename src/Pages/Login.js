import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import loginImage from "../assets/images/loginImage.jpg";
import { UserContext } from "../context/UserContext";
import { server } from "../utils";

const Login = () => {
  const { setUserInfo } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(server + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    })
      .then(async (res) => {
        const data = await res.json();

        if (res.ok) {
          setUserInfo(data);
          alert("Login successful");
          setRedirect(true);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col w-full h-screen overflow-hidden bg-white rounded-none shadow-2xl md:flex-row ">
        <div className="flex flex-col justify-center w-full p-6 md:w-1/3">
          <p className="mb-6 text-3xl font-bold text-center text-gray-800">
            Login to your Account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3 text-white transition-transform transform bg-red-600 rounded-md shadow-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 "
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden w-full md:block md:w-2/3">
          <img
            src={loginImage}
            alt="Login visual"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
