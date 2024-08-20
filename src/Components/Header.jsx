import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../Redux/login/LoginSlice";
import { isSignOut } from "../Redux/Auth/authSlice";

import { LuUser2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [scrollTopData, setScrollTopData] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const { userDetail } = useSelector((state) => state.auth);
  const userInfo = userDetail && userDetail.Values;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setScrollTopData("");
      } else {
        setScrollTopData("header-fixed");
      }
    });
  });

  const handleLogout = async () => {
    try {
      await fetch(`https://jobportal-backend-g159.onrender.com/api/signOut`);

      dispatch(signOut());
      dispatch(isSignOut());
      // toast.success("Logout sucessful", {
      //   theme: "light",
      // });

      navigate("/");
    } catch (error) {}
  };

  return (
    <div>
      <>
        <header className={`site-header py-5 shadow-md ${scrollTopData}`}>
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="logo">
                <Link to="/" className="font-bold uppercase tracking-tight">
                  Talent Hospitality
                </Link>
              </div>
              <div className="header-right relative flex items-center">
                {currentUser ? (
                  <>
                    {userInfo && (
                      <div
                        className="flex gap-2 items-center"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="header-user">
                          {userInfo && userInfo.Name.charAt(0)}
                        </div>

                        <div className="header-user-info text-lg leading-6 font-medium">
                          {userInfo && userInfo.Name}
                          <span className="block font-normal text-gray-500 text-sm">
                            {userInfo && userInfo.Role}
                          </span>
                        </div>
                      </div>
                    )}

                    {isOpen && (
                      <div className="userDropdown">
                        <Link to="#">
                          <LuUser2 /> Profile
                        </Link>
                        <Link to="#">
                          <IoSettingsOutline /> Settings
                        </Link>
                        <div className="my-2 p-2">
                          <div onClick={handleLogout} className="btn">
                            Log out
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to="/login" className="btn">
                    Sign In
                  </Link>
                )}

                {/* <Link to="#" className="text-3xl ml-5"><RxHamburgerMenu /></Link> */}
              </div>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default Header;
