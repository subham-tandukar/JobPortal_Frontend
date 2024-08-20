import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { featuredList } from "../../Redux/featured/FeaturedApi";

import { FaArrowRightLong } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCashOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import Loader from "../Modules/Loader";
import SkeletonLoader from "../Modules/SkeletonLoader";
import fallbackImg from "../../Assets/img/fallback.jpg";

export default function FeaturedJob() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.featured);
  useEffect(() => {
    dispatch(featuredList());
  }, []);

  // console.log("Data", state.featured.Values);

  return (
    <section className="featured__job__section py-10">
      <div className="container px-3">
        <div className="flex flex-wrap">
          <div className="featured__job md:w-3/4 max-w-full">
            <div className="heading-wrap">
              <h2>Featured Vacancies</h2>
            </div>

            <div className="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5">
              {state.isLoading ? (
                <SkeletonLoader />
              ) : (
                state.featured.Values &&
                state.featured.Values.length > 0 &&
                state.featured.Values.map((job) => {
                  const {
                    _id,
                    Slug,
                    ComName,
                    ComLogo,
                    JobType,
                    JobDesignation,
                    Location,
                    Salary,
                    ExpiryDate,
                  } = job;
                  return (
                    <div key={Slug}>
                      <Link to={`/jobs/${Slug}`} className="block">
                        <div className="job-item">
                          <div className="job-body">
                            <div className="job-img">
                              <img
                                src={ComLogo}
                                onError={(e) => (e.target.src = fallbackImg)}
                                alt={ComName + "-" + JobDesignation}
                              />

                              <span className="company-name">{ComName}</span>

                              <span className="partTime featured">
                                {JobType.JobType}
                              </span>
                            </div>
                            <h3>{JobDesignation}</h3>
                            <div className="job-details">
                              <p>
                                <TfiLocationPin /> {Location} /
                              </p>
                              <p>
                                <IoCashOutline /> {Salary}
                              </p>
                            </div>
                          </div>

                          <div className="job-footer mt-5">
                            <div className="flex justify-between items-center">
                              <p>
                                <span>
                                  <BsClock className="inline-block mr-1 align-middle" />
                                </span>
                                {ExpiryDate}
                              </p>
                              <span className="btn-text">
                                Apply Now <FaArrowRightLong />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div className="hello__hotel md:w-1/4 max-w-full pl-8">
            <div className="sidebar sidebar-sticky">
              <h3>Hello Hoteliers</h3>
              <ul>
                <li>
                  <Link to="#">HR Partner</Link>
                </li>
                <li>
                  <Link to="#">New Team Setup</Link>
                </li>
                <li>
                  <Link to="#">Consultant</Link>
                </li>
                <li>
                  <Link to="#">Freelance Chef & Management</Link>
                </li>
                <li>
                  <Link to="#">Construction & Interior Company</Link>
                </li>
                <li>
                  <Link to="#">Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
