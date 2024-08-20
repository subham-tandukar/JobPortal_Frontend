import React from "react";
import { Link } from "react-router-dom";
import jobsData from "../../fakeAPI/api.json";

import { FaArrowRightLong } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCashOutline } from "react-icons/io5";
import { BsClock, BsBriefcase } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { internList } from "../../Redux/intern/internApi";
import Loader from "../Modules/Loader";
import SkeletonLoader from "../Modules/SkeletonLoader";

export default function InternSection() {
  const dispatch = useDispatch();
  const intern_list = useSelector((intern_list) => intern_list.interns);
  useEffect(() => {
    dispatch(internList());
  }, []);

  // console.log("Intern Data", intern_list.interns.Values);

  // const baseurl = process.env.REACT_APP_BASEURL;
  return (
    <div className="intern__jobs mt-12">
      <div className="heading-wrap">
        <h2>Get your dream Internship now</h2>
      </div>

      <div className="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5">
        {intern_list.isLoading ? (
          <SkeletonLoader />
        ) : (
          intern_list.interns.Values &&
          intern_list.interns.Values.length > 0 &&
          intern_list.interns.Values.map((job) => {
            const {
              _id,
              Slug,
              ComName,
              ComLogo,
              JobType,
              Category,
              JobDesignation,
              Location,
              Salary,
              ExpiryDate,
              Education,
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
                        <div>
                          <h3 className="mb-1">{JobDesignation}</h3>
                          <span className="company-name">{ComName}</span>
                        </div>
                      </div>
                      <div className="job-details">
                        <p>
                          <TfiLocationPin /> {Location}
                        </p>
                        <p>
                          <IoCashOutline /> {Salary}
                        </p>
                        <p>
                          <BsBriefcase /> {Category.Category}
                        </p>
                        <p> {Education}</p>
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
  );
}
