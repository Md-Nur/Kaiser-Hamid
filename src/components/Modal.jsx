import React from "react";
import { FaSearch } from "react-icons/fa";

const Modal = () => {
  return (
    
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <label className="input input-bordered flex items-center gap-2 m-5">
            <input type="text" className="grow" placeholder="Search" />
            <FaSearch />
          </label>
        </div>
      </dialog>
  );
};

export default Modal;
