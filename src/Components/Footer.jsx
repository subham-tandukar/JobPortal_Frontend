import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container max-w-[1280px] px-3">
        <div className="flex flex-wrap">
          <div className="footer-logo medium:mb-5 medium:text-center w-full md:w-1/4 max-w-full">
            <Link to="#" className="footer__logo__text">
              Talent Hospitality
            </Link>
            <div className="footer__num py-5">
              Whatsapp Us at <br />
              <Link to="tel:+123 456 789">123 456 789</Link>
            </div>
            <p className="footer__location">Kathmandu, Nepal</p>
            <p className="footer__email">info@talenthospitality.com</p>
            <div className="footer-socials">
              <Link to="#">
                <FaFacebookF />
              </Link>
              <Link to="#">
                <FaInstagram />
              </Link>
              <Link to="#">
                <FaLinkedinIn />
              </Link>
              <Link to="#">
                <FaFacebookF />
              </Link>
            </div>
          </div>

          <div className="footer-links-data w-full md:w-1/4 max-w-full">
            <div className="quick__links medium:mb-5">
              <h3>For Job Seekers</h3>
              <ul>
                <li>
                  <Link to="#">Browse Jobs</Link>
                </li>
                <li>
                  <Link to="#">Browse by Categories</Link>
                </li>
                <li>
                  <Link to="#">Job Seekers Dashboard</Link>
                </li>
                <li>
                  <Link to="#">Job Alerts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-links-data w-full md:w-1/4 max-w-full">
            <div className="quick__links medium:mb-5">
              <h3>For Employeers</h3>
              <ul>
                <li>
                  <Link to="#">Post Jobs</Link>
                </li>
                <li>
                  <Link to="#">Advertising</Link>
                </li>
                <li>
                  <Link to="#">Employeer Dashboard</Link>
                </li>
                <li>
                  <Link to="#">Recruitment Services</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-links-data w-full md:w-1/4 max-w-full">
            <div className="quick__links medium:mb-5">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Blogs</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom border-t-[1px] border-solid border-[#ffffff46] mt-5 pt-5">
          <div className="text-center">
            <p>© 2024 Talent Hospitality. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
