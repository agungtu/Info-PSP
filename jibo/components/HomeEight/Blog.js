import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>Latest Blog Post</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div
                className="single-blog-post-two"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="blog-img wave-member-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post1.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                  <div className="post_date">11 Feb, 2024</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      Branding involves developing strategy to create a point
                    </Link>
                  </h6>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-blog-post-two"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="blog-img wave-member-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post2.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                  <div className="post_date">11 Feb, 2024</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      Design is a plan or specification for the construction of
                      an object
                    </Link>
                  </h6>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-blog-post-two"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="blog-img wave-member-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post3.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                  <div className="post_date">13 Feb, 2024</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      The new minimum is a digital magazine with a header
                      featuring
                    </Link>
                  </h6>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
