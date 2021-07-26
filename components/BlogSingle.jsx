/* eslint-disable react/no-unescaped-entities */
import moment from "moment";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

// import BlogSidebar from "./BlogSidebar";

const BlogSingle = ({ post }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-12">
            <div className="wpo-wpo-blog-content clearfix">
              <div className="post">
                <div className="entry-media">
                  <img src="images/blog/img-4.jpg" alt="" />
                </div>
                <ul className="entry-meta">
                  <li>
                    <Link href="/BlogDetailsPage">
                      <a>
                        <img src={post.author.image.url} width={50} height={50} alt="" /> By{" "}
                        {post.author.name}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <i className="ti-calendar"></i> {moment(post.date).format("MMM DD, YYYY")}
                  </li>
                </ul>
                <h2>{post.title}</h2>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              <div className="tag-share clearfix">
                <div className="tag">
                  <ul>
                    {post.tags.map((tag, index) => (
                      <li key={`${tag}-${index}`}>
                        <Link href="/BlogDetailsPage">{tag.toUpperCase()}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="share">
                  <ul>
                    <li>
                      <Link href="/BlogDetailsPage">
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/BlogDetailsPage">
                        <a>
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/BlogDetailsPage">
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="author-box">
                <div className="author-avatar">
                  <Link href="/BlogDetailsPage" target="_blank">
                    <img src={post.author.image.url} width={50} height={50} alt="" />
                  </Link>
                </div>
                <div className="author-content">
                  <Link href="/BlogDetailsPage" className="author-name">
                    <a>{post.author.name}</a>
                  </Link>
                  <p>{post.author.biography}</p>
                  <div className="author-btn">
                    <Link href="/BlogDetailsPage">
                      <a>All Post From Author</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="more-posts clearfix">
                <div className="previous-post">
                  <Link href="/BlogDetailsPage">
                    <span className="post-control-link">
                      <a>Previous</a>
                    </span>
                  </Link>
                </div>
                <div className="next-post">
                  <Link href="/BlogDetailsPage">
                    <span className="post-control-link">
                      <a>Next post</a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="comments-area">
              <div className="comments-section">
                <h3 className="comments-title">Comments</h3>
                <ol className="comments">
                  <li className="comment even thread-even depth-1" id="comment-1">
                    <div id="div-comment-1">
                      <div className="comment-theme">
                        <div className="comment-image">
                          {" "}
                          <img src="images/blog-details/comments-author/img-1.jpg" alt="" />{" "}
                        </div>
                      </div>
                      <div className="comment-main-area">
                        <div className="comment-wrapper">
                          <div className="comments-meta">
                            <h4>
                              John Abraham{" "}
                              <span className="comments-date">Octobor 28,2018 At 9.00am</span>
                            </h4>
                          </div>
                          <div className="comment-area">
                            <p>
                              I will give you a complete account of the system, and expound the
                              actual teachings of the great explorer of the truth,{" "}
                            </p>
                            <div className="comments-reply">
                              <Link className="comment-reply-link" href="/BlogDetailsPage">
                                <a>
                                  <i className="fa fa-reply" aria-hidden="true"></i>
                                  <span>Reply</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div>
                          <div className="comment-theme">
                            <div className="comment-image">
                              {" "}
                              <img src="images/blog-details/comments-author/img-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="comment-main-area">
                            <div className="comment-wrapper">
                              <div className="comments-meta">
                                <h4>
                                  Lily Watson{" "}
                                  <span className="comments-date">Octobor 28,2018 At 9.00am</span>
                                </h4>
                              </div>
                              <div className="comment-area">
                                <p>
                                  I will give you a complete account of the system, and expound the
                                  actual teachings of the great explorer of the truth,{" "}
                                </p>
                                <div className="comments-reply">
                                  <Link className="comment-reply-link" href="/BlogDetailsPage">
                                    <a>
                                      <i className="fa fa-reply" aria-hidden="true"></i>
                                      <span> Reply</span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li className="comment">
                            <div>
                              <div className="comment-theme">
                                <div className="comment-image">
                                  <img src="images/blog-details/comments-author/img-3.jpg" alt="" />{" "}
                                </div>
                              </div>
                              <div className="comment-main-area">
                                <div className="comment-wrapper">
                                  <div className="comments-meta">
                                    <h4>
                                      John Abraham{" "}
                                      <span className="comments-date">
                                        Octobor 28,2018 At 9.00am
                                      </span>
                                    </h4>
                                  </div>
                                  <div className="comment-area">
                                    <p>
                                      I will give you a complete account of the system, and expound
                                      the actual teachings of the great explorer of the truth,{" "}
                                    </p>
                                    <div className="comments-reply">
                                      <Link className="comment-reply-link" href="/BlogDetailsPage">
                                        <a>
                                          <i className="fa fa-reply" aria-hidden="true"></i>{" "}
                                          <span>Reply</span>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className="comment-respond">
              <h3 className="comment-reply-title">Leave a Comment</h3>
              <form
                method="post"
                id="commentform"
                className="comment-form"
                onSubmit={submitHandler}>
                <div className="form-inputs">
                  <input placeholder="Name" type="text" />
                  <input placeholder="Email" type="email" />
                  <input placeholder="Website" type="url" />
                </div>
                <div className="form-textarea">
                  <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                </div>
                <div className="form-submit">
                  <input id="submit" value="Reply" type="submit" />
                </div>
              </form>
            </div>
          </div>
          {/* <BlogSidebar /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
