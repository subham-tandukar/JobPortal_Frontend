import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogSingle } from "../../../Redux/blogs/blogListApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { formattedDate } from "../../Modules/formattedDate";

export default function BlogSingle() {
  const dispatch = useDispatch();
  const single_blog = useSelector((single_blog) => single_blog.blogs);

  const blogDetails = single_blog.singleBlog.Values;

  let { slug } = useParams();
  useEffect(() => {
    dispatch(blogSingle(slug));
  }, [slug]);
  // console.log("Blog Single", blogDetails);

  return (
    <>
      {blogDetails && (
        <>
          <section class="stories__section--single py-10">
            <div className="container">
              <div class="stories__single--text text-center">
                <h1>{blogDetails.Title}</h1>

                <div class="post__meta">
                  <span>
                    Published on: {formattedDate(blogDetails.createdAt)}
                  </span>
                  <span>by Talent Hospitality Admin </span>
                </div>
              </div>
            </div>

            <div class="featured__post">
              <div className="container max-w-[1280px] mx-auto">
                <img src={blogDetails.Image.url} alt={blogDetails.Title} />
              </div>
            </div>

            <div class="content-area">
              <div className="container max-w-[900px] mx-auto">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogDetails.Description,
                  }}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
