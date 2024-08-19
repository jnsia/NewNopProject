import { userData } from "../types/userData";

function UserInfoModal({
  selectedUser,
  closeModal,
}: {
  selectedUser: userData;
  closeModal: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-900 text-4xl"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="flex items-center space-x-6 mb-4">
          <img
            src={selectedUser.picture.large}
            alt={selectedUser.name.first}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-md"
          />
          <div>
            <p className="font-semibold text-xl text-gray-900">
              {selectedUser.name.first} {selectedUser.name.last}
            </p>
            <p className="text-gray-600 text-sm">{selectedUser.email}</p>
          </div>
        </div>
        <div className="flex justify-around">
          <p className="text-gray-800 text-sm">
            <span className="font-semibold">Phone:</span> {selectedUser.phone}
          </p>
          <p className="text-gray-800 text-sm">
            <span className="font-semibold">Cell:</span> {selectedUser.cell}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserInfoModal;
