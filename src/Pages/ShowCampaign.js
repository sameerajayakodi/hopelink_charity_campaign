<<<<<<< Updated upstream
import React, { useContext, useEffect, useState } from "react";
import "./ShowCampaign.css";
=======
import React from "react";
import  "./ShowCampaign.css";
>>>>>>> Stashed changes
import AlignItemsList from "../Components/List/List";

import CampainDetails from "../Components/List/CampainDetails";
import ReactionButton from "../Components/List/ReactionButton";

import { server } from "../utils";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function ShowCampain() {
  let Progress;
  Progress = 0.6;
  const [loading, setLoading] = useState("Loading...");
  const [details, setDetails] = useState(null);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [peoples, setPeoples] = useState(0);
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  useEffect(() => {
    fetch(server + "campaign/" + id)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setDetails(data);
          setPeoples(
            data.donations.reduce((uniqueNames, person) => {
              uniqueNames.add(person.email); // Add each person's name to the Set
              return uniqueNames;
            }, new Set()).size
          );
          setLoading(null);
          if (status) {
            if (status === "paid") alert("Donation Successful");
            else alert("Donation Failed");
          }
        }
        if (res.status === 404) {
          setLoading("Campaign not found");
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const makeDonation = async (e) => {
    e.preventDefault();
    if (amount < 1) {
      alert("Minimum donation amount is 1 dollar");
    } else {
      await fetch(server + "donation/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          amount,
          campaign: id,
        }),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          window.location.replace(res.url);
        })
        .catch((e) => console.log(e));
    }
  };

  if (loading) {
    return <h1 className="h-full w-full text-center p-10">{loading}</h1>;
  }
  return (
    <div className="cantainer">
      <div className="my-10 inner_OuterDiv h-200">
        <div className="inner_element innerLeft">
          <div className="left_elements left_top">
            <img src={server + "uploads/" + details.img} alt="" />
          </div>

          <div className="left_elements left_Bottom">
<<<<<<< Updated upstream
            <p>{`$${details.currentDonationSum} USD raised of $${details.goal} goal`}</p>
            <progress
              className="progress rounded"
              value={details.currentDonationSum / details.goal}
            />
=======
            <progress className="rounded progress" value={Progress} />
>>>>>>> Stashed changes

            <div className="progress_details">
              <p>
                We have Done it{" "}
                {(details.currentDonationSum / details.goal) * 100}% of It
              </p>
            </div>

            <div className="donatedCont">
              <div className="donatesicon"></div>
              {peoples} people just donated
            </div>
          </div>
        </div>
        <div className="mt-3 inner_element innerRight">
          <div className="Right-Up">
            <div className="CampName">{details.name}</div>
          </div>
          <div className="Right-Middle ">
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 456.081"
              >
                <path
                  fill="#F44336"
                  d="M253.648 83.482c130.392-219.055 509.908 65.493-.513 372.599-514.788-328.941-101.874-598.696.513-372.599z"
                />
                <path
                  fill="#C62828"
                  d="M344.488 10.579c146.331-39.079 316.84 185.128-65.02 429.134 282.18-224.165 190.925-403.563 65.02-429.134zM121.413.646c48.667-4.845 100.025 17.921 129.336 76.929 1.259 3.71 2.44 7.571 3.537 11.586 10.541 34.29.094 49.643-12.872 50.552-18.136 1.271-20.215-14.85-24.966-27.643C192.689 48.096 158.774 12.621 116.43 1.863c1.653-.435 3.314-.841 4.983-1.217z"
                />
                <path
                  fill="#FF847A"
                  d="M130.558 35.502C87.9 31.255 42.906 59.4 31.385 101.568c-7.868 25.593-.07 37.052 9.607 37.731 13.537.949 15.088-11.084 18.634-20.632 17.733-47.749 43.046-74.227 74.651-82.257a104.925 104.925 0 00-3.719-.908z"
                />
              </svg>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 274.872"
              >
                <path
                  fill-rule="nonzero"
                  d="M387.247 45.769c5.633-10.213 16.879-15.166 31.203-15.183l54.009-.005c23.733-.008 42.351 10.153 39.19 36.776L499.813 189.8c-1.731 21.562-12.081 38.996-35.981 38.067l-48.321.02c-14.878.667-24.696-8.088-30.289-20.681h-17.843c8.83 25.793-19.153 47.24-42.287 37.635-11.295 11.791-25.232 17.311-41.161 11.724-13.799 15.294-30.721 18.955-49.439 10.129-14.556 11.411-36.339 10.875-50.265-1.572-6.149-5.498-10.29-12.558-14.947-20.679l-26.424-46.473h-16.823c-3.189 16.907-13.154 29.566-33.782 29.281l-45.078.02c-26.154 3.983-34.801-20.443-37.084-41.678L.695 69.664c-1.994-13.582.383-23.35 6.093-30.204 6.191-7.432 16.353-10.716 25.803-10.716l56.973.04c9.738-.104 18.182 1.557 24.722 5.781l-.018.028c5.858 3.787 9.945 9.164 11.84 16.524h34.665c9.742-6.57 18.863-11.737 28.956-14.881 9.904-3.082 20.525-4.169 33.215-2.65 13.601-16.185 18.698-24.995 40.955-30.747 19.498-5.045 45.334-3.383 64.41 5.132 10.674 4.76 20.449 11.61 30.008 18.309 9.516 6.666 19.237 13.067 28.93 19.489z"
                />
                <path
                  fill="#FDD0BF"
                  fill-rule="nonzero"
                  d="M349.948 200.95l-61.7-111.291c-6.945-11.626-13.22-11.926-19.275-8.318-4.297 2.561-8.819 6.692-13.341 10.826-6.158 5.628-12.44 10.749-18.872 16.048-7.737 6.148-16.444 9.449-24.698 10.133-17.859 1.48-33.17-9.227-34.709-27.727a6.263 6.263 0 011.815-4.946l33.802-40.222c-18.517-.256-31.797 6.858-46.765 17.106a6.227 6.227 0 01-3.529 1.088l-35.488.016v121.844h19.12a6.275 6.275 0 015.584 3.412l28.27 49.302c4.14 7.22 7.794 13.471 12.398 17.587 8.886 7.943 23.505 8.839 33.241 1.775l-18.418-34.463a6.25 6.25 0 0111.027-5.883l20.021 37.462c13.911 7.071 25.446 5.26 35.998-6.266l-28.846-45.288a6.25 6.25 0 011.912-8.625 6.25 6.25 0 018.625 1.913l30.408 47.736c11.68 4.736 20.912.915 29.308-7.775l-27.549-51.858a6.272 6.272 0 0111.076-5.883l28.498 53.646c9.795 5.686 24.459.192 27.945-10.573 3.036-9.378-2.157-14.096-5.858-20.776z"
                />
                <path
                  fill="#FEDECF"
                  fill-rule="nonzero"
                  d="M342.944 188.817l-54.696-99.158c-6.945-11.626-13.22-11.926-19.275-8.318-4.297 2.561-8.819 6.692-13.341 10.826-6.158 5.628-12.44 10.749-18.872 16.048-7.737 6.148-16.444 9.449-24.698 10.133-17.859 1.48-33.17-9.227-34.709-27.727a6.263 6.263 0 011.815-4.946l25.038-31.458c-18.517-.257-31.797 6.858-46.765 17.106a6.227 6.227 0 01-3.529 1.088l-17.267.016 3.904 113.08h5.759a6.275 6.275 0 015.584 3.412l28.27 49.302c6.134 10.698 28.734 22.29 42.044 12.632l-14.823-27.733a6.25 6.25 0 0111.027-5.883l15.835 30.211c13.911 7.07 25.445 5.26 35.998-6.266l-24.66-38.037a6.25 6.25 0 011.912-8.625 6.25 6.25 0 018.625 1.913l26.314 40.644c11.681 4.736 20.912.914 29.308-7.775l-23.455-44.766a6.272 6.272 0 0111.076-5.883l21.494 41.512c9.795 5.686 24.458.192 27.945-10.572 3.036-9.378-2.157-14.096-5.858-20.776z"
                />
                <path
                  fill="#FDD0BF"
                  fill-rule="nonzero"
                  d="M223.049 52.868l-32.874 39.118c2.008 10.263 11.019 14.684 20.858 13.869 12.171-1.007 19.965-9.106 28.836-16.437 7.467-6.165 14.407-13.874 22.683-18.809 12.235-7.295 24.404-7.538 36.447 12.661l61.724 111.332h21.066l1.168-136.634-22.054-14.728c-14.799-9.872-30.311-22.838-47.589-27.375-21.057-5.534-50.843-5.539-67.866 10.351-7.474 8.896-14.931 17.766-22.399 26.652z"
                />
                <path
                  fill="#FEDECF"
                  fill-rule="nonzero"
                  d="M190.175 91.986c2.008 10.263 11.019 14.684 20.858 13.869 12.171-1.007 19.965-9.106 28.836-16.437 7.467-6.165 14.407-13.874 22.683-18.809 12.235-7.295 24.404-7.538 36.447 12.661l61.724 111.332h3.538l.828-96.813c7.083-26.438-5.997-66.157-63.694-76.806-40.676-7.517-67.552 19.036-111.22 71.003z"
                />
                <path
                  fill="#ED5575"
                  d="M393.472 63.701c-.254-15.563 8.397-22.907 24.978-22.931h53.161c20.21-.206 32.131 6.6 29.893 25.388l-11.875 122.843c-1.542 19.178-9.611 29.454-25.798 28.663h-48.247c-10.581.687-17.745-5.458-22.112-17.198V63.701z"
                />
                <path d="M442.328 156.294c6.498 0 11.767 5.269 11.767 11.769 0 6.498-5.269 11.767-11.767 11.767-6.501 0-11.769-5.269-11.769-11.767 0-6.5 5.268-11.769 11.769-11.769z" />
                <path
                  fill="#576D7A"
                  d="M10.849 68.475l9.318 115.442c2.763 26.983 12.454 35.676 26.402 33.132h45.066c17.531.565 24.838-10.976 25.367-30.543V58.639c-1.056-14.886-11.74-19.858-27.437-19.671H32.592c-15.733.579-24.958 8.257-21.743 29.507z"
                />
                <path d="M67.956 156.294c6.498 0 11.767 5.269 11.767 11.769 0 6.498-5.269 11.767-11.767 11.767-6.501 0-11.769-5.269-11.769-11.767 0-6.5 5.268-11.769 11.769-11.769z" />
              </svg>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 511.995"
              >
                <path
                  fill="#ECCA43"
                  fill-rule="nonzero"
                  d="M256 0c70.685 0 134.689 28.659 181.015 74.984C483.341 121.306 512 185.311 512 256c0 70.684-28.659 134.689-74.985 181.015-46.326 46.322-110.33 74.98-181.015 74.98-70.685 0-134.689-28.658-181.015-74.98C28.659 390.689 0 326.684 0 256c0-70.689 28.659-134.694 74.985-181.016C121.307 28.659 185.311 0 256 0z"
                />
                <ellipse
                  fill="#F7E259"
                  cx="256"
                  cy="255.998"
                  rx="250.992"
                  ry="250.991"
                />
                <path
                  fill="#F8D548"
                  d="M503.753 215.692A252.691 252.691 0 01506.989 256c0 138.614-112.371 250.988-250.989 250.988S5.007 394.614 5.007 256c0-21.858 2.801-43.056 8.051-63.271l246.435 183.476 244.26-160.513z"
                />
                <path
                  fill="#D7925B"
                  fill-rule="nonzero"
                  d="M256 58.922c54.414 0 103.688 22.061 139.353 57.725 35.664 35.661 57.725 84.935 57.725 139.349 0 54.414-22.061 103.688-57.725 139.352-35.665 35.664-84.939 57.726-139.353 57.726-54.414 0-103.688-22.062-139.349-57.726-35.664-35.664-57.725-84.938-57.725-139.352s22.061-103.688 57.725-139.349C152.312 80.983 201.586 58.922 256 58.922z"
                />
                <circle fill="#EDA140" cx="256.001" cy="255.997" r="192.069" />
                <path
                  fill="#C26A34"
                  fill-rule="nonzero"
                  d="M235.907 353.009c-2.782-.197-4.485-.479-6.531-.809l-11.454-1.643-7.07-1.186c-2.29-.407-4.58-.869-6.84-1.37a151.612 151.612 0 01-6.608-1.609l-2.692-.723V301.43l12.51 1.018 9.185.544 9.639.428 9.763.304 9.489.184 8.816.043c2.68 0 5.029-.094 7.037-.274 2.067-.184 3.925-.467 5.568-.839 1.494-.338 2.8-.783 3.908-1.318.95-.458 1.742-1.006 2.358-1.622a4.978 4.978 0 001.173-1.836c.296-.814.445-1.79.445-2.907v-2.923c0-2.333-.749-4.036-2.243-5.093a10.365 10.365 0 00-3.047-1.485c-1.117-.347-2.371-.514-3.749-.514h-12.909c-9.724 0-18.349-1.091-25.851-3.266-7.649-2.217-14.103-5.564-19.359-10.023-5.372-4.585-9.387-10.649-12.032-18.195-2.576-7.345-3.869-16.089-3.869-26.216v-8.038c0-9.377 1.434-17.633 4.289-24.76 2.906-7.246 7.28-13.285 13.106-18.096 4.22-3.475 8.209-6.321 12.947-8.547 4.001-1.879 8.487-3.287 14.021-4.211v-19.624h40.798v18.832c6.749.539 11.98 1.481 18.584 2.675l3.428.599c2.863.505 5.718 1.057 8.543 1.643 2.65.544 5.2 1.113 7.623 1.7l2.778.676v44.298l-3.938-.346a469.51 469.51 0 00-11.804-.882 676.586 676.586 0 00-13.247-.702 681.155 681.155 0 00-13.26-.453c-3.792-.09-7.807-.138-12.04-.138-2.225 0-4.288.078-6.172.227-1.973.154-3.77.381-5.371.672-1.451.261-2.744.664-3.848 1.182-.976.462-1.819 1.04-2.508 1.729-.578.578-1.032 1.322-1.331 2.2-.351 1.031-.531 2.29-.531 3.762v2.435c0 1.567.227 2.894.677 3.955a6.37 6.37 0 001.874 2.495c.89.724 2.089 1.289 3.574 1.683 1.661.436 3.694.663 6.082.663h16.076c5.906 0 11.385.578 16.414 1.716 5.085 1.156 9.673 2.902 13.747 5.222 8.18 4.661 14.347 11.008 18.482 19.025 2.037 3.946 3.578 8.188 4.601 12.707 1.019 4.498 1.536 9.224 1.536 14.159v8.037c0 7.931-.71 15.002-2.114 21.187-1.434 6.309-3.621 11.684-6.54 16.114-2.923 4.434-6.484 8.158-10.653 11.154-4.165 2.992-8.932 5.26-14.265 6.788l-1.366.381c-5.204 1.498-8.971 2.585-15.031 3.249v21.237h-40.798v-21.036z"
                />
                <path
                  fill="#F3DC6B"
                  fill-rule="nonzero"
                  d="M229.696 346.797c-2.782-.197-4.486-.479-6.532-.808l-11.453-1.644-7.071-1.186a165.05 165.05 0 01-6.839-1.369 153.505 153.505 0 01-6.609-1.609l-2.692-.724v-44.239l12.511 1.019 9.185.544 9.638.428 9.763.303 9.489.184 8.817.043c2.679 0 5.029-.094 7.036-.273 2.067-.185 3.925-.467 5.569-.84 1.494-.338 2.799-.783 3.907-1.318.951-.458 1.742-1.006 2.359-1.622a4.968 4.968 0 001.172-1.836c.296-.813.446-1.789.446-2.906v-2.924c0-2.332-.75-4.036-2.243-5.093a10.407 10.407 0 00-3.048-1.485c-1.117-.346-2.371-.514-3.749-.514h-12.909c-9.724 0-18.348-1.091-25.851-3.265-7.649-2.217-14.103-5.564-19.359-10.024-5.371-4.584-9.386-10.649-12.031-18.195-2.577-7.344-3.869-16.088-3.869-26.215v-8.038c0-9.378 1.433-17.634 4.288-24.76 2.906-7.246 7.281-13.286 13.106-18.096 4.22-3.476 8.209-6.322 12.947-8.548 4.002-1.878 8.487-3.287 14.022-4.211v-19.624h40.797v18.832c6.75.539 11.98 1.481 18.584 2.675l3.429.599c2.863.505 5.718 1.057 8.543 1.644 2.649.544 5.2 1.113 7.622 1.699l2.778.676v44.299l-3.937-.347a474.705 474.705 0 00-11.805-.882c-4.31-.269-8.732-.509-13.247-.701-4.716-.202-9.155-.36-13.26-.454-3.792-.09-7.806-.137-12.039-.137-2.226 0-4.289.077-6.172.227a53.554 53.554 0 00-5.372.672c-1.451.261-2.743.663-3.847 1.181-.976.462-1.819 1.04-2.508 1.729-.578.578-1.032 1.323-1.332 2.2-.351 1.032-.53 2.29-.53 3.762v2.436c0 1.566.227 2.893.676 3.954a6.373 6.373 0 001.875 2.496c.89.723 2.088 1.288 3.574 1.682 1.66.436 3.693.663 6.082.663h16.075c5.907 0 11.385.578 16.414 1.717 5.085 1.155 9.673 2.901 13.748 5.221 8.179 4.661 14.347 11.009 18.481 19.025 2.037 3.946 3.578 8.188 4.601 12.707 1.019 4.499 1.537 9.224 1.537 14.159v8.038c0 7.931-.711 15.001-2.114 21.186-1.434 6.309-3.621 11.685-6.541 16.115-2.923 4.434-6.484 8.157-10.653 11.153-4.164 2.992-8.932 5.261-14.265 6.789l-1.365.381c-5.205 1.498-8.971 2.585-15.032 3.248v21.238h-40.797v-21.037z"
                />
              </svg>
            </div>
          </div>
          <div className="donate_Form ">
            <div className="flex flex-col justify-center min-h-full px-6 py-2 form_outer formdiv flformdivex-1 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm form_inner">
                <h2 className="-mt-10 text-4xl font-bold leading-9 tracking-tight text-center text-gray-900 makedonate">
                  Make Your Donation
                </h2>
              </div>

<<<<<<< Updated upstream
              <div className="input_outer mt-5 w-50">
                <form onSubmit={makeDonation} className="space-y-2">
                  {!userInfo && (
                    <>
                      <div>
                        <label
                          htmlFor="email"
                          className="pl-2 block text-l font-medium leading-6 text-gray-900"
                        >
                          Your Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="  Enter Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-2 block w-full rounded-md border-0 py-3  outline-0 ring-1   placeholder:text-gray-400   sm:text-sm mb-4 sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="pl-2 block text-l font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="  Enter Your Email Address"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-2 block w-full rounded-md border-0 py-3  outline-0 ring-1   placeholder:text-gray-400   sm:text-sm mb-4 sm:leading-6"
                          />
                        </div>
                      </div>
                    </>
                  )}
=======
              <div className="mt-5 input_outer w-50">
                <form action="#" method="POST" className="space-y-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block pl-2 font-medium leading-6 text-gray-900 text-l"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="  Enter Your Email Address"
                        required
                        autoComplete="email"
                        className="block w-full py-3 pl-2 mb-4 border-0 rounded-md outline-0 ring-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
>>>>>>> Stashed changes

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="Amount"
                        className="block pl-2 font-medium leading-6 text-gray-900 text-l"
                      >
                        Donation Amount
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="Amount"
                        name="Amount"
                        type="number"
                        placeholder="  Enter Your Donation Amount in Dollar"
                        required
<<<<<<< Updated upstream
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="pl-2 block w-full rounded-md border-0 py-3 mb-5 placeh outline-0 ring-1   placeholder:text-gray-400   sm:text-sm mb-4 sm:leading-6"
=======
                        autoComplete="current-password"
                        className="block w-full py-3 pl-2 mb-4 mb-5 border-0 rounded-md placeh outline-0 ring-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
>>>>>>> Stashed changes
                      />
                    </div>
                  </div>

                  <div>
<<<<<<< Updated upstream
                    <div className="Donate_element mt-2 h-20">
                      <button type="submit">Donate Now</button>
=======
                    <div className="h-20 mt-2 Donate_element">
                      <button>Donate Now</button>
>>>>>>> Stashed changes
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="list">
        <CampainDetails details={details.description} />
        <ReactionButton />

        <AlignItemsList donations={details.donations} />
      </div>
    </div>
  );
}
