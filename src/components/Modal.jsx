import Button from "./Button";

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
    }`}
    >
        <div className="modal-container">
            <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded-md shadow-md">
                {/* modal content */}
                <h2 className="text-xl mb-4 mt-6 uppercase text-gray-50 font-semibold">Login Here</h2>
                <form className="px-4 space-y-6">
                    {/* email */}
                    <div>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email@example.com" 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 
                            text-base font-medium text-[#6B7280] outline-none focus:border-[6a64f1] 
                            focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Enter your password..." 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 
                            text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] 
                            focus:shadow-md"
                        />
                    </div>
                    <div>
                        <Button
                            label="Login"
                            className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 
                            px-8 text-base font-semibold cursor-pointer transition delay-200 ease-in-out 
                            text-white "
                        />
                    </div>
                </form>

                {/* modal close button */}
            
                <button 
                 onClick={onClose} 
                className="hover:bg-gray-400 text-gray-800 font-semibold px-8 py-2 rounded inline-flex
                     items-center bg-gray-300 mt-4 cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal