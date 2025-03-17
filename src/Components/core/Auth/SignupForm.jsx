import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Tab from "../../common/Tab";
import { setProgress } from "../../../slices/loadingBarSlice";

import OTPModal from "../../../modal/OTPModal"; //otpmodal

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [emailForOtp, setEmailForOtp] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      dispatch(setProgress(50));
      // Send OTP first
      const otpResponse = await fetch("http://localhost:8080/auth/ssendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const otpData = await otpResponse.text();
      dispatch(setProgress(100));

      if (otpResponse.ok) {
        toast.success("OTP sent to email!");
        setGeneratedOtp(otpData);
        setEmailForOtp(email);
        setOtpModalOpen(true); // Open OTP modal
      } else {
        toast.error(otpData || "Failed to send OTP");
      }
    } catch (error) {
      dispatch(setProgress(100));
      toast.error("Something went wrong while sending OTP");
    }
  };

  const handleOtpVerification = async (enteredOtp) => {
    if (enteredOtp !== generatedOtp) {
      toast.error("Incorrect OTP");
      return;
    }

    try {
      dispatch(setProgress(30));
      const signupData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        otp: enteredOtp,
      };

      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.text();
      dispatch(setProgress(100));

      if (response.ok) {
        toast.success(data || "Signup successful!");
        setOtpModalOpen(false);
        navigate("/login");
      } else {
        toast.error(data || "Signup failed");
      }
    } catch (error) {
      dispatch(setProgress(100));
      toast.error("Signup failed");
    }
  };

  const tabData = [
    { id: 1, tabName: "Student", type: ACCOUNT_TYPE.STUDENT },
    { id: 2, tabName: "Recruiter", type: ACCOUNT_TYPE.INSTRUCTOR },
  ];

  return (
    <div>
      {otpModalOpen && (
        <OTPModal
          email={emailForOtp}
          onClose={() => setOtpModalOpen(false)}
          onVerify={handleOtpVerification}
        />
      )}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>

        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="mb-1 text-[0.875rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
