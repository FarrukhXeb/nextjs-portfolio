import moment from "moment";
import Link from "next/link";
import React from "react";

const LatestNews = ({ posts }) => {
  return (
    <div className="wpo-blog-area section-padding">
      <div className="container">
        <div className="col-12">
          <div className="section-title text-center">
            <h2>Latest News</h2>
          </div>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="wpo-blog-wrap">
                <div className="wpo-blog-img">
                  <img src="images/blog/1.jpg" alt="blog" />
                </div>
                <div className="wpo-blog-text">
                  <ul>
                    <li>
                      <span>By {post.author.name}</span>
                    </li>
                    <li>. {moment(post.date).format("MMM DD, YYYY")}</li>
                  </ul>
                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <Link href={`/blog/${post.slug}`}>Read More...</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
