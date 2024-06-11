import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, confirm }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 min-w-[380px]">
            <div className="bg-white p-4 rounded-lg shadow-lg min-w-[380px]">
              <div className="modal-content">
                <h2 className="text-lg text-center font-semibold mb-2">
                  Delete Confirmation
                </h2>
                <p className="mb-4 text-center">
                  Are you sure you want to delete your account?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-red-500 text-white w-20 h-10 rounded-md select-none hover:bg-red-600"
                    onClick={confirm}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-gray-300 text-black w-20 h-10 rounded-md select-none hover:bg-gray-400"
                    onClick={hide}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
