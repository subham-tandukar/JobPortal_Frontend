import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiSearch2Line } from "react-icons/ri";
import {
  setJobDesignation,
  setSearchItem,
} from "../../Redux/filterJob/filterJobSlice";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchItem } = useSelector((state) => state.filterjobs);

  return (
    <form className="banner__search">
      <div className="relative max-w-screen-sm mt-7 m-auto">
        <label htmlFor="searchJob">
          <input
            type="text"
            className="rounded-full w-full p-5 py-3"
            id="searchJob"
            value={searchItem}
            onChange={(e) => dispatch(setSearchItem(e.target.value))}
            placeholder="Search by Jobs, title, keywords, companies"
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/jobs");
            dispatch(setJobDesignation(searchItem));
          }}
          className="absolute right-[21px] top-[13px] text-[1.3rem]"
        >
          <RiSearch2Line />
        </button>
      </div>
    </form>
  );
}
