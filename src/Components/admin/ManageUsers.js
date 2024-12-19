import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditUserModal from "./EditUserModal";
import { server } from "../../utils";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(server + "user/all", { method: "GET", credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleSaveUser = async (updatedUser) => {
    await fetch(server + "user/update/" + updatedUser.id, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: updatedUser.role,
        email: updatedUser.email,
      }),
    })
      .then((res) => {
        setUsers(
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
        setIsEditModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteUser = (userId, status) => {
    setUserToDelete({ userId, status });
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (userToDelete) {
      await fetch(server + "user/block/" + userToDelete.userId, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: userToDelete.status === "active" ? "blocked" : "active",
        }),
      })
        .then((res) => {
          setUsers(
            users.map((user) =>
              user.id == userToDelete.userId
                ? {
                    ...user,
                    status:
                      userToDelete.status === "active" ? "blocked" : "active",
                  }
                : user
            )
          );
          setIsDeleteModalOpen(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">Manage Users</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-red-600 bg-red-100 ">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Email
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Role
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEditUser(user)}
                  className="px-4 py-2 mr-2 font-semibold text-red-600 bg-white border border-red-600 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id, user.status)}
                  className={
                    "px-4 py-2 font-semibold text-white rounded" +
                    (user.status === "active" ? " bg-red-600" : " bg-green-600")
                  }
                >
                  {user.status === "active" ? "Block" : "Unblock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={selectedUser}
          onSave={handleSaveUser}
        />
      )}

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        user={userToDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => handleConfirmDelete()}
      />
    </div>
  );
};

export default ManageUsers;
