import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const RegisterForm = ({
  formValues,
  handleChange,
  passwordType,
  showPassword,
  error,
  handleSubmit,
  loading,
}) => {
  return (
    <form className="mt-10">
      <div className="th-form-wrapper">
      <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="Name"
            value={formValues.Name}
            onChange={handleChange}
            autoComplete="off"
            id="name"
            placeholder="Enter Your Full Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            name="Email"
            value={formValues.Email}
            onChange={handleChange}
            autoComplete="off"
            id="email"
            placeholder="Enter your Email Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={passwordType}
              name="Password"
              value={formValues.Password}
              onChange={handleChange}
              id="password"
              placeholder="Password"
              required
            />
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onClick={showPassword}
            >
              {passwordType === "password" ? (
                <Tippy content="Show Password">
                  <i>
                    <FaRegEyeSlash />
                  </i>
                </Tippy>
              ) : (
                <Tippy content="Hide Password">
                  <i>
                    <FaRegEye />
                  </i>
                </Tippy>
              )}
            </div>
          </div>
        </div>
      </div>

      {error && (
        <span className="form-response-message th-error">
          {" "}
          {error.Message || "Something went wrong"}
        </span>
      )}

      <div className="form-group mt-5">
        <button
          className="theme-btn btn-style-one"
          type="submit"
          name="register"
          onClick={handleSubmit}
          disabled={loading ? true : false}
        >
          {loading ? <span>Loading ...</span> : <span>Register</span>}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
