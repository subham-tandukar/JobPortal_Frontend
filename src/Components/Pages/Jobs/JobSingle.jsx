import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLocationDot, FaRegClock, FaRegBookmark } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { featuredSingle } from "../../../Redux/featured/FeaturedApi";
import { formattedDate } from "../../Modules/formattedDate";

import shareFacebok from "../../../Assets/img/facebook.png";
import shareWhatsapp from "../../../Assets/img/whatsapp.png";
import shareInstagram from "../../../Assets/img/instagram.png";
import fallbackImg from "../../../Assets/img/fallback.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCashOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";

import { RxCrossCircled } from "react-icons/rx";
import Loader from "../../Modules/Loader";
import { clearError } from "../../../Redux/jobLists/jobListSlice";
import Modal from "../../Modules/Modal";
import { GrFormCheckmark } from "react-icons/gr";

export default function JobSingle() {
  const dispatch = useDispatch();

  const { appliedJobs } = useSelector((state) => state.auth);
  const appliedJobList = appliedJobs && appliedJobs.Values;

  let { slug } = useParams();
  useEffect(() => {
    dispatch(featuredSingle(slug));
  }, [slug]);

  const [filteredAppliedJob, setFilteredAppliedJob] = useState([]);
  useEffect(() => {
    if (appliedJobs) {
      const data =
        appliedJobList &&
        appliedJobList.filter((appliedJob) => appliedJob.Slug === slug);

      setFilteredAppliedJob(data);
    }
  }, [appliedJobs]);

  const single_featured = useSelector(
    (single_featured) => single_featured.featured
  );
  const singleData = single_featured.singleFeatured.Values;

  // console.log("Data Single", single_featured.loader);

  useEffect(() => {
    dispatch(clearError());
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    dispatch(clearError());
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <section className="single__section">
        <div className="container">
          <div className="breadcrumbs py-2">
            <ul className="breadcrumb flex items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Jobs</Link>
              </li>
              <li>
                <Link to="/">Head Chef</Link>
              </li>
            </ul>
          </div>
        </div>
        {single_featured.isLoading ? (
          <div
            style={{ height: "calc(100vh - 118px)" }}
            className="py-5 flex items-center justify-center"
          >
            <Loader />
          </div>
        ) : (
          singleData && (
            <>
              <div className="single__banner py-10">
                <div className="container">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="heading-wrap">
                      <h1>{singleData.JobDesignation}</h1>
                      <div className="job-data flex items-center flex-wrap">
                        <span>
                          <IoBriefcaseOutline /> {singleData.JobDesignation}
                        </span>
                        <span>
                          <FaLocationDot /> {singleData.Location}
                        </span>
                        <span>
                          <FaRegClock /> {singleData.ExpiryDate}
                        </span>
                      </div>
                    </div>
                    <div className="cta-btn flex items-center">
                      {filteredAppliedJob && filteredAppliedJob.length > 0 ? (
                        <div className="btn !pl-6 !bg-[#157347] !flex items-center gap-1 pointer-events-none">
                          {" "}
                          <GrFormCheckmark size="1.5rem" /> Applied
                        </div>
                      ) : (
                        <Link to="#" className="btn" onClick={openModal}>
                          Apply Now
                        </Link>
                      )}

                      <Link to="#" className="saveJob">
                        <FaRegBookmark />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single__job__content py-10">
                <div className="container">
                  <div className="flex flex-wrap">
                    <div className="w-full md:max-w-[75%]">
                      <div className="the-content md:mr-8 md:pr-8 md:border-r-[1px] md:border-solid md:border-r-[#f1f1f1]">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: singleData.JobDescription,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full md:max-w-[25%]">
                      <div className="sidebar sidebar-sticky">
                        <div className="find__job different__location job-overview">
                          <h3 class="!text-xl !mb-5 !text-primary !font-bold">
                            Job Information
                          </h3>
                          <ul>
                            <li>
                              <strong>Published on:</strong>
                              <span>{formattedDate(singleData.createdAt)}</span>
                            </li>
                            <li>
                              <strong>Vacancy:</strong> <span>20</span>
                            </li>
                            <li>
                              <strong>Employment Status:</strong>
                              <span>{singleData.JobType.JobType}</span>
                            </li>
                            <li>
                              <strong>Experience:</strong>
                              <span>
                                {singleData.Experience
                                  ? singleData.Experience
                                  : "N/A"}
                              </span>
                            </li>
                            <li>
                              <strong>Qualification:</strong>
                              <span>
                                {singleData.Qualification
                                  ? singleData.Qualification
                                  : "N/A"}
                              </span>
                            </li>
                            <li>
                              <strong>Job Location:</strong>
                              <span>{singleData.Location}</span>
                            </li>
                            <li>
                              <strong>Salary:</strong> {singleData.Salary}
                            </li>
                            <li>
                              <strong>Gender:</strong>
                              <span>
                                {singleData.Gender
                                  ? singleData.Gender
                                  : "Both Preferred"}
                              </span>
                            </li>
                            <li>
                              <strong>Application Deadline:</strong>
                              <span>{singleData.ExpiryDate}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="find__job justify-center mt-5">
                          <div className="share__job">
                            <h3>Share This Job</h3>
                            <ul>
                              <li>
                                <Link to="#">
                                  <img src={shareFacebok} alt="" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img src={shareInstagram} alt="" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img src={shareWhatsapp} alt="" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </section>
      {/* Apply Modal */}
      {isOpen && (
        <div className={`modal ${isOpen ? "modal-open" : ""}`}>
          <Modal singleData={singleData} closeModal={closeModal} />
        </div>
      )}

      {/* Related Blogs */}
      {/* <div className="related__jobs py-10">
        <div className="container">
          <div className="heading-wrap">
            <h2>Related Jobs</h2>
          </div>
          <div className="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-7">
            {singleData.RelatedJobs &&
              singleData.RelatedJobs.length > 0 &&
              singleData.RelatedJobs.map((relatedJobs) => {
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
                } = relatedJobs;
                return (
                  <div key={Slug}>
                    <Link to={`/jobs/${Slug}`} className="block">
                      <div className="job-item">
                        <div className="job-body">
                          <div className="job-img">
                            <img src={ComLogo}
onError={(e) => (e.target.src = fallbackImg)} alt="test" />
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
              })}
          </div>
        </div>
      </div> */}
    </>
  );
}
