import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import {
  registerStart,
  registerFailure,
  registerSuccess,
} from "../../Redux/register/RegisterSlice";

import RegisterForm from "../Modules/RegisterForm";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import OAuth from "../../../components/OAuth"

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.newUser);

  const initialvalue = { Name: "", Email: "", Password: "" };
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
      dispatch(registerStart());

      const res = await fetch(
        "https://jobportal-backend-g159.onrender.com/api/register",
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
        dispatch(registerFailure(data));

        return;
      }
      dispatch(registerSuccess(data));
      navigate("/login");
      toast.success("Register sucessful", {
        theme: "light",
      });
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
  useEffect(() => {
    dispatch(registerFailure());
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
    <div className="login__container py-10">
      <div className="container max-w-[500px]">
        <div className="login-form default-form">
          <div className="form-inner">
            <h1 className="mb-7 uppercase text-center font-bold text-2xl">
              Register
            </h1>
            <RegisterForm
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
                Already have an account? <a href="/login">Login</a>
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
