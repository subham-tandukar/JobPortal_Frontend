import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

import BlogOne from "../../Assets/img/blog1.jpg";
import BlogTwo from "../../Assets/img/blog2.jpg";
import BlogThree from "../../Assets/img/blog3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { blogList } from "../../Redux/blogs/blogListApi";

import Loader from "../Modules/Loader";
import { formattedDate } from "../Modules/formattedDate";

export default function BlogSection() {
  const dispatch = useDispatch();

  const blog_list = useSelector((blog_list) => blog_list.blogs);

  useEffect(() => {
    dispatch(blogList());
  }, []);

  console.log("Blog", blog_list.blogs.Values);

  return (
    <section className="blog__section py-10">
      <div className="container px-3">
        <div className="heading-wrap">
          <h2>Recent News & Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blog_list.isLoading ? (
            <div class="col-span-12 text-center">
              <Loader />
            </div>
          ) : (
            blog_list.blogs.Values &&
            blog_list.blogs.Values.length > 0 &&
            blog_list.blogs.Values.map((blog) => {
              const { _id, Title, Slug, Description, createdAt, Image } = blog;

              return (
                <div className="blog-container">
                  <div className="news-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link to={`/blogs/${Slug}`}>
                            <img
                              layout="responsive"
                              src={Image}
                              alt={Title}
                            />
                          </Link>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <span>  {formattedDate(createdAt)}</span>
                          </li>
                          {/* <li>
                            <span>12 Comment</span>
                          </li> */}
                        </ul>
                        <h3>
                          <Link to={`/blogs/${Slug}`}>{Title}</Link>
                        </h3>
                        <p
                          className="text"
                          dangerouslySetInnerHTML={{
                            __html: Description,
                          }}
                        />
                        <Link className="read-more" to={`/blogs/${Slug}`}>
                          Read More <FaArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
