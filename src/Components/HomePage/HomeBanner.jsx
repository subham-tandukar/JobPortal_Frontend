import React from "react";
import { Link } from "react-router-dom";

import VacancyImg from "../../Assets/img/vacancy.png";
import InterImg from "../../Assets/img/graduation-hat.png";
import ConsultantImg from "../../Assets/img/consultation.png";
import FreelancerImg from "../../Assets/img/remote-job.png";
import SearchForm from "../Modules/SearchForm";

export default function HomeBanner() {
  return (
    <section className="banner__section pt-12">
      <div className="container px-3">
        <h1 className="text-center font-black text-4xl leading-[50px]">
          Find Your Dream Job With
          <span className="block uppercase">Talent Hospitality</span>
        </h1>

        <SearchForm />

        <div className="job__top__categories max-w-screen-md mx-auto">
          <Link to="/">
            <img src={VacancyImg} alt="Vacancy" /> Vacancy
          </Link>
          <Link to="/">
            <img src={InterImg} alt="Vacancy" /> Internship
          </Link>
          <Link to="/">
            <img src={ConsultantImg} alt="Vacancy" /> Consultant
          </Link>
          <Link to="/">
            <img src={FreelancerImg} alt="Vacancy" /> Freelancer
          </Link>
        </div>
      </div>
      <div className="banner__overlay"></div>
    </section>
  );
}
