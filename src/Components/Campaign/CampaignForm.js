import React, { useState, useEffect, useContext } from "react";
import { server } from "../../utils";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
function CampaignForm({ onSubmit, editCampaign }) {
  const { userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [proofLetter, setProofLetter] = useState("");
  const [goal, setGoal] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [campaignImage, setCampaignImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //validations
  const [phoneError, setPhoneError] = useState(false);
  const [accountNumberError, setAccountNumberError] = useState(false);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9\b]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Phone number must be 10 digits and contain only numbers.");
    } else {
      setPhoneError(false);
    }
  };

  const validateAccountNumber = (accountNumber) => {
    const accountNumberRegex = /^[0-9\b]{8,16}$/;
    if (!accountNumberRegex.test(accountNumber)) {
      setAccountNumberError(
        "Account number must be between 8 to 16 digits and contain only numbers."
      );
    } else {
      setAccountNumberError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneError && !accountNumberError) {
      const campaign = {
        name,
        description,
        proofLetter,
        goal,
        bankDetails: {
          accountHolderName,
          bankName,
          accountNumber,
          swiftCode,
        },
        campaignImage,
        phoneNumber,
      };

      if (onSubmit) {
        onSubmit(campaign);
      } else {
        console.log("No submit function provided");
      }

      if (!editCampaign) {
        setName("");
        setDescription("");
        setProofLetter("");
        setGoal("");
        setAccountHolderName("");
        setBankName("");
        setAccountNumber("");
        setSwiftCode("");
        setCampaignImage("");
        setPhoneNumber("");
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      if (editCampaign) {
        fetch(server + `campaign/user/` + editCampaign, {
          method: "GET",
          credentials: "include",
        })
          .then((res) => {
            if (res.ok) {
              res.json().then((data) => {
                setName(data.name);
                setDescription(data.description);
                // setProofLetter(data.proof);
                setGoal(data.goal/100);
                setAccountHolderName(data.holder);
                setBankName(data.bankName);
                setAccountNumber(data.accNumber);
                setSwiftCode(data.swift);
                // setCampaignImage(data.img);
                setPhoneNumber(data.phone);
                setLoading(false);
              });
            } else {
              setRedirect("/campaigns");
            }
          })
          .catch((e) => console.log(e));
      }
    } else {
      setRedirect("/login");
    }
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  if (loading && editCampaign) {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 m-12 my-10 bg-gray-100 rounded-lg shadow-2xl "
    >
      <h2 className="mb-4 text-xl font-semibold text-center">
        {editCampaign ? "Edit Campaign" : "Create New Campaign"}
      </h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Campaign Name"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Campaign Description"
        />
      </div>

      {/* Proof Letter */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700">
          Proof Letter (Upload PDF)
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setProofLetter(e.target.files[0])}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Goal */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700">
          Goal Amount ($)
        </label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Goal Amount"
        />
      </div>

      {/* Bank Details */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-700">
          Bank Details
        </label>
        <div className="p-4 space-y-4 border-2 border-gray-300 rounded-lg">
          <div>
            <label className="block text-gray-700">Account Holder Name</label>
            <input
              type="text"
              value={accountHolderName}
              onChange={(e) => setAccountHolderName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Account Holder Name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Bank Name</label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Bank Name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Account Number</label>
            <input
              type="number"
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
                validateAccountNumber(e.target.value);
              }}
              className={`w-full p-2 border ${
                accountNumberError ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              placeholder="Account Number"
            />
            {accountNumberError && (
              <p className="text-red-500">{accountNumberError}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">SWIFT Code</label>
            <input
              type="number"
              value={swiftCode}
              onChange={(e) => setSwiftCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="SWIFT Code"
            />
          </div>
        </div>
      </div>

      {/* Campaign Image */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700">
          Campaign Image (Upload JPG/PNG)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCampaignImage(e.target.files[0])}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            validatePhoneNumber(e.target.value);
          }}
          className={`w-full p-2 border ${
            phoneError ? "border-red-500" : "border-gray-300"
          } rounded-lg`}
          placeholder="Phone Number"
        />
        {phoneError && <p className="text-red-500">{phoneError}</p>}
      </div>

      <button
        type="submit"
        className="p-2 text-white bg-blue-500 rounded-lg"
        disabled={phoneError || accountNumberError}
      >
        {editCampaign ? "Update Campaign" : "Create Campaign"}
      </button>
    </form>
  );
}

export default CampaignForm;
