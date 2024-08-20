import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const LoginForm = ({
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
          <label>Email Address</label>
          <input
            type="text"
            name="Email"
            value={formValues.Email}
            onChange={handleChange}
            autoComplete="off"
            id="email"
            placeholder="Email"
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

      <div className="form-group">
        <div className="field-outer">
          <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="remember" />
            <label htmlFor="remember" className="remember">
              <span className="custom-checkbox"></span> Remember me
            </label>
          </div>
          <a href="#" className="pwd">
            Forgot password?
          </a>
        </div>
      </div>

      <div className="form-group">
        <button
          className="theme-btn btn-style-one"
          type="submit"
          name="log-in"
          onClick={handleSubmit}
          disabled={loading ? true : false}
        >
          {loading ? <span>Loading ...</span> : <span>Login</span>}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
