import React from "react";
import { Link } from "react-router-dom";
import InternSection from "./InternSection";

import jobsData from "../../fakeAPI/api.json";
import internShipImg from "../../Assets/img/interniship.jpg";
import jobFinderImg from "../../Assets/img/looking1.png";

import { FaArrowRightLong, FaLocationArrow } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Loader from "../Modules/Loader";
import { jobList } from "../../Redux/jobLists/jobListApi";
import SkeletonLoader from "../Modules/SkeletonLoader";
import fallbackImg from "../../Assets/img/fallback.jpg";

export default function AllJobSection() {
  const dispatch = useDispatch();
  const jobs_list = useSelector((jobs_list) => jobs_list.jobs);
  useEffect(() => {
    dispatch(jobList());
  }, []);

  // console.log("Job data", jobs_list.jobs.Values);

  return (
    <section className="open__job py-10">
      <div className="container px-3">
        <div className="flex flex-wrap">
          <div className="featured__job md:w-3/4 medium:w-full max-w-full">
            <div className="all__job">
              <div className="heading-wrap">
                <h2>Discover jobs across popular roles</h2>
              </div>

              <div className="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5">
                {jobs_list.isLoading ? (
                  <SkeletonLoader />
                ) : (
                  jobs_list.jobs.Values &&
                  jobs_list.jobs.Values.length > 0 &&
                  jobs_list.jobs.Values.map((job) => {
                    const {
                      _id,
                      Slug,
                      ComName,
                      ComLogo,
                      JobType,
                      JobDesignation,
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
                                <div>
                                  <h3 className="m-0 text-base">
                                    {JobDesignation}
                                  </h3>

                                  <span className="text-sm leading-[20px] block mt-1">
                                    {ComName}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="job-footer mt-5">
                              <div className="flex justify-between items-center">
                                <span className="featured-footer">
                                  {JobType.JobType}
                                </span>
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
            <InternSection />
          </div>
          <div className="md:w-1/4 max-w-full sm:pt-6 medium:w-full medium:mt-5 md:pl-8">
            <div className="sidebar sidebar-sticky">
              <div className="find__job">
                <img src={jobFinderImg} alt="" />
                <div>
                  <h3>I'm looking for a job</h3>
                  <p>Create a Free Account</p>
                  <Link to="#" className="btn-text">
                    See All Jobs <FaArrowRightLong />
                  </Link>
                </div>
              </div>
              <div className="img-wrapper mt-7">
                <Link to="#">
                  <img src={internShipImg} alt="" className="w-full" />
                </Link>
              </div>
              <div className="find__job different__location mt-7">
                <h3>Post from different Locations</h3>
                <ul>
                  <li>
                    <Link>
                      Job Vacancy from kathmandu <span>(2)</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Pokhara <span>(5)</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Butwal <span>(10)</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Thamel, Kathmandu <span>(1)</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Job Vacancy from kathmandu <span>(2)</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Pokhara <span>(5)</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Butwal <span>(10)</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Thamel, Kathmandu <span>(1)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
