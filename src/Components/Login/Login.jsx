import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../../Redux/login/LoginSlice";

import LoginForm from "../Modules/LoginForm";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import OAuth from "../../../components/OAuth"

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const initialvalue = { Role: "Candidate", Email: "", Password: "" };
  const [formValues, setFormValues] = useState(initialvalue);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  let navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.Password) {
      errors.Password = "Required";
    }

    if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid email format";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setformErrors(validate(formValues));
    // setIsSubmit(true);
    try {
      dispatch(signInStart());

      const res = await fetch(
        "https://jobportal-backend-g159.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      const data = await res.json();

      if (data.StatusCode !== 200) {
        dispatch(signInFailure(data));

        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
      toast.success("Login sucessful", {
        theme: "light",
      });
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  useEffect(() => {
    dispatch(signInFailure());
  }, []);
  let location = useLocation();
  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div className="login__container py-20">
      <div className="container max-w-[500px]">
        <div className="login-form default-form">
          <div className="form-inner">
            <h1 className="mb-7 uppercase text-center font-semibold text-2xl">
              Member Login
            </h1>
            <LoginForm
              formValues={formValues}
              handleChange={handleChange}
              passwordType={passwordType}
              showPassword={showPassword}
              error={error}
              handleSubmit={handleSubmit}
              loading={loading}
            />
            <div className="bottom-box">
              <div className="text">
                Don't have an account? <a href="/register">Signup</a>
              </div>
              {/* <div className="divider">
                <span>or</span>
              </div>
              <div className="btn-box row">
                <div className="">
                  <a href="#" className="theme-btn social-btn-two google-btn">
                    <FaGoogle />
                    Log In via Gmail
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
