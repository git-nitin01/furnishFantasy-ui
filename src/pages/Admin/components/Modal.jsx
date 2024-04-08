import React from "react";

const Modal = ({ isOpen, onClose, title, children, onEdit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-md w-96">
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        {children}
        <div className="flex justify-end mt-4">
          {onEdit && (
            <button
              onClick={onEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
