import React from "react";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-800">Confirm Block</h2>
        <p className="mt-4 text-sm text-gray-600">
          Are you sure you want to Block this User or Item? This action cannot
          be undone.
        </p>
        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={
              "px-4 py-2 font-semibold text-white rounded" +
              (user.status === "active"
                ? " bg-red-600 hover:bg-red-700"
                : " bg-green-600 hover:bg-green-700")
            }
          >
            {user.status === "active" ? "Block" : "Unblock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
