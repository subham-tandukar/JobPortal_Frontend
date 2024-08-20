import React from "react";
import { Link } from "react-router-dom";

import AdImg from "../../Assets/img/Foodmandu-Fresh.png";

import JobSlider from "../Modules/JobSlider";
import HomeBanner from "../HomePage/HomeBanner";
import FeaturedJob from "../HomePage/FeaturedJob";
import AllJobSection from "../HomePage/AllJobSection";
import BlogSection from "../HomePage/BlogSection";

const Home = () => (
  <>
    {/* Banner Section */}
    <HomeBanner />
    {/* Banner Section */}

    {/* Ad Section */}
    <section className="job__placement text-center pt-7">
      <div className="container max-w-[1140px]">
        <Link to="#">
          <img src={AdImg} alt="Job Adplacement" />
        </Link>
      </div>
    </section>
    {/* Ad Section */}

    {/* Featured Job Section */}
    <FeaturedJob />
    {/* Featured Job Section */}

    {/* You May Be Interested Section */}
    <section className="interested__job py-10">
      <div className="container px-3">
        <div className="heading-wrap">
          <h2 className="text-center">You May Be Interested</h2>
        </div>
        <JobSlider />
      </div>
    </section>
    {/* You May Be Interested Section */}

    {/* All Job Section */}
    <AllJobSection />
    {/* All Job Section */}
    
    {/* Blog Section */}
    <BlogSection />
    {/* Blog Section */}
  </>
);

export default Home;
