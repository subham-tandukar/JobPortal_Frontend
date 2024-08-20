import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaFilter, FaArrowRightLong } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCashOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";

import jobsData from "../../../fakeAPI/api.json";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Modules/Loader";
import {
  categoryApi,
  filterJob,
  jobTypeApi,
  locationApi,
} from "../../../Redux/filterJob/filterJobApi";
import SearchForm from "../../Modules/SearchForm";
import {
  resetCategory,
  resetJobDesignation,
  resetJobType,
  resetLocation,
  resetSearchItem,
  setCategory,
  setJobType,
  setLocation,
} from "../../../Redux/filterJob/filterJobSlice";
import { RiCloseFill } from "react-icons/ri";
export default function JobSingle() {
  const dispatch = useDispatch();
  const {
    isLoading,
    filterJobs,
    jobTypeList,
    locationList,
    categoryList,
    jobDesignation,
    jobType,
    category,
    location,
  } = useSelector((state) => state.filterjobs);

  useEffect(() => {
    dispatch(jobTypeApi());
    dispatch(locationApi());
    dispatch(categoryApi());
  }, []);

  const [jobTypeName, setJobTypeName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const query = `JobDesignation=${jobDesignation}&JobType=${jobType}&Category=${category}&Location=${location}`;
    dispatch(filterJob(query));
  }, [jobDesignation, jobType, category, location]);

  return (
    <>
      <section className="single__section">
        <div className="container">
          <div className="breadcrumbs py-2">
            <ul class="breadcrumb flex items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Jobs</Link>
              </li>
            </ul>
          </div>
        </div>
        <section className="banner__section pt-12">
          <div className="container px-3">
            <h1 className="text-center font-black text-4xl leading-[50px]">
              Find Your Dream Job With
              <span className="block uppercase">Talent Hospitality</span>
            </h1>

            <SearchForm />
          </div>
          <div className="banner__overlay"></div>
        </section>

        <div className="filter__section py-10">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full max-w-[20%]">
                <div className="job__filter__section sidebar pr">
                  <h3>
                    <FaFilter /> &nbsp; Filter
                  </h3>

                  <div className="filter-category">
                    <h4>Job Type</h4>
                    <ul className="ui-checkbox">
                      {jobTypeList &&
                        jobTypeList.Values &&
                        jobTypeList.Values.length > 0 &&
                        jobTypeList.Values.map((item) => (
                          <li>
                            <label>
                              <input
                                type="radio"
                                name="filter__type"
                                value={item._id}
                                checked={jobType === item._id}
                                onChange={() => {
                                  dispatch(setJobType(item._id));
                                  setJobTypeName(item.JobType);
                                }}
                              />
                              <span></span>
                              <p>{item.JobType}</p>
                            </label>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="filter-category">
                    <h4>Location</h4>
                    <ul className="ui-checkbox">
                      {locationList &&
                        locationList.Values &&
                        locationList.Values.length > 0 &&
                        locationList.Values.map((item) => (
                          <li>
                            <label>
                              <input
                                type="radio"
                                name="filter_location"
                                value={item.Location}
                                checked={location === item.Location}
                                onChange={() =>
                                  dispatch(setLocation(item.Location))
                                }
                              />
                              <span></span>
                              <p>{item.Location}</p>
                            </label>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="filter-category">
                    <h4>Category</h4>
                    <ul className="ui-checkbox">
                      {categoryList &&
                        categoryList.Values &&
                        categoryList.Values.length > 0 &&
                        categoryList.Values.map((item) => (
                          <li>
                            <label>
                              <input
                                type="radio"
                                name="filter_category"
                                value={item._id}
                                checked={category === item._id}
                                onChange={() => {
                                  dispatch(setCategory(item._id));
                                  setCategoryName(item.Category);
                                }}
                              />
                              <span></span>
                              <p>{item.Category}</p>
                            </label>
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* <div className="filter-category">
                    <h4>Date Posted</h4>
                    <ul className="ui-checkbox">
                      <li>
                        <label>
                          <input type="radio" name="filter_date" value="all" />
                          <span></span>
                          <p>All</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="filter_date"
                            value="last-hour"
                          />
                          <span></span>
                          <p>Last Hour</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="filter_date"
                            value="last-24-hour"
                          />
                          <span></span>
                          <p>Last 24 Hour</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="filter_date"
                            value="last-7-days"
                          />
                          <span></span>
                          <p>Last 7 Days</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="filter_date"
                            value="last-14-days"
                          />
                          <span></span>
                          <p>Last 14 Days</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="filter_date"
                            value="last-30-days"
                          />
                          <span></span>
                          <p>Last 30 Days</p>
                        </label>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="w-full max-w-[80%]">
                <div className="job-data pl-9 sticky top-[100px]">
                  {/* <div className="job__total text-right mb-5 text-sm font-medium">
                    {" "}
                    <strong>Showing:</strong> 1 - 20 of 22355
                  </div> */}

                  {jobDesignation || jobType || category || location ? (
                    <div className="selected-term">
                      <h2 className="text-black font-bold">Your selected:</h2>

                      <div className="bg-[#e4f5ee] p-2 rounded-md mt-1 mb-5 flex flex-wrap">
                        {jobDesignation && (
                          <span
                            className="selected-search-item"
                            onClick={() => {
                              dispatch(resetJobDesignation());
                              dispatch(resetSearchItem());
                            }}
                          >
                            {jobDesignation} <RiCloseFill className="ml-1" />{" "}
                          </span>
                        )}

                        {jobType && (
                          <span
                            className="selected-search-item"
                            onClick={() => {
                              dispatch(resetJobType());
                            }}
                          >
                            {jobTypeName} <RiCloseFill className="ml-1" />{" "}
                          </span>
                        )}

                        {location && (
                          <span
                            className="selected-search-item"
                            onClick={() => {
                              dispatch(resetLocation());
                            }}
                          >
                            {location} <RiCloseFill className="ml-1" />{" "}
                          </span>
                        )}

                        {category && (
                          <span
                            className="selected-search-item"
                            onClick={() => {
                              dispatch(resetCategory());
                            }}
                          >
                            {categoryName} <RiCloseFill className="ml-1" />{" "}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : null}
                  <div className="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7">
                    {isLoading ? (
                      <div class="col-span-12 text-center">
                        <Loader />
                      </div>
                    ) : filterJobs &&
                      filterJobs.Values &&
                      filterJobs.Values.length > 0 ? (
                      filterJobs.Values.map((job) => {
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
                                      alt={ComName + "-" + JobDesignation}
                                    />

                                    <span className="company-name">
                                      {ComName}
                                    </span>

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
                    ) : (
                      <> No jobs available </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
