import { useState } from "react";
import { userData } from "../types/userData";
import UserInfoModal from "./UserInfoModal";
import SkeletonUserList from "../skeletons/SkeletonUserList";

function UserList({
  users,
  isLoading,
}: {
  users: userData[];
  isLoading: boolean;
}) {
  const [selectedUser, setSelectedUser] = useState<userData | null>(null);

  if (isLoading) return <SkeletonUserList itemsPerPage={12} />;

  const openModal = (user: userData) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      {users.length === 0 ? (
        <div className="bg-blue-100 text-blue-700 border border-blue-300 rounded-md p-4 mx-auto max-w-md text-center mb-4">
          일치하는 이름의 사용자가 없습니다.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {users.map((user) => (
            <div
              key={user.email}
              className="bg-white p-4 rounded border hover:border-blue-100 hover:bg-gray-100 cursor-pointer"
              onClick={() => openModal(user)}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.picture.large}
                  alt={user.name.first}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <p className="font-bold text-md">
                  {user.name.first} {user.name.last}
                </p>
              </div>
            </div>
          ))}
          {selectedUser && (
            <UserInfoModal
              selectedUser={selectedUser}
              closeModal={closeModal}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default UserList;
