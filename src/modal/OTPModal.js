import React, { useState } from "react";
import { toast } from "react-hot-toast";

const OTPModal = ({ email, onClose, onVerify }) => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = async () => {
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    try {
      await onVerify(otp); // Calls parent's verify function
    } catch (error) {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl mb-4 font-semibold">Verify OTP</h2>
        <p className="mb-2 text-gray-700">OTP sent to: {email}</p>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleVerify}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;
