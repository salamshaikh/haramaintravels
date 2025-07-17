import React from 'react';

const blogs = [
  {
    image: 'blog_3_1.jpg',
    day: '15',
    month: 'MAR',
    author: 'Mariyam',
    comments: '2 Comments',
    title: 'Understanding Islamic Law Explained A Beginner’s Guide to Fiqh',
  },
  {
    image: 'blog_3_2.jpg',
    day: '17',
    month: 'MAR',
    author: 'Asaduzzam',
    comments: '3 Comments',
    title: 'Faith and Resilience Overcoming Challenges Through Islam',
  },
  {
    image: 'blog_3_3.jpg',
    day: '20',
    month: 'MAR',
    author: 'Zakaria',
    comments: '2 Comments',
    title: 'The Beauty of Salah Connecting with Allah in Every Moment',
  },
];

const BlogSection = () => {
  return (
    <section className="blog-area overflow-hidden bg-white space-top overflow-hidden" id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">BLOG & NEWS</span>
          <h2 className="sec-title">latest blog &artcles</h2>
        </div>
        <div className="slider-area">
          <div
            className="swiper th-slider has-shadow"
            id="blogSlider3"
            data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"2"},"1300":{"slidesPerView":"3"}}}'
          >
            <div className="swiper-wrapper">
              {blogs.map((blog, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="blog-box style2">
                    <div className="blog-img global-img">
                      <img src={`/assets/img/blog/${blog.image}`} alt="blog" />
                    </div>
                    <div className="blog-wrapper">
                      <span className="date">
                        <a href="/blog.html">
                          {blog.day} <span>{blog.month}</span>
                        </a>
                      </span>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <a href="/blog.html">
                            <i className="fa-solid fa-user"></i>
                            {blog.author}
                          </a>
                          <a href="/blog.html">
                            <i className="fa-solid fa-messages"></i>
                            {blog.comments}
                          </a>
                        </div>
                        <h3 className="box-title">
                          <a href="/blog-details.html">{blog.title}</a>
                        </h3>
                        <a href="/blog-details.html" className="th-btn border-btn">
                          <span className="btn-text" data-back="Read More" data-front="Read More"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button data-slider-prev="#blogSlider3" className="slider-arrow style3 slider-prev">
              <i className="far fa-arrow-left"></i>
            </button>
            <button data-slider-next="#blogSlider3" className="slider-arrow style3 slider-next">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
