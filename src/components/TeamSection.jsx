import React from 'react';

const teamMembers = [
  { name: 'Mohmmad mohsin', role: 'Expert Scholar', image: 'team_2_1.png' },
  { name: 'moriyam ena', role: 'Expert Scholar', image: 'team_2_2.png' },
  { name: 'Mohmmad ali', role: 'Expert Scholar', image: 'team_2_3.png' },
  { name: 'Mohmmad jakaria', role: 'Expert Scholar', image: 'team_2_4.png' },
  { name: 'Mohmmad Yosuf', role: 'Expert Scholar', image: 'team_2_5.png' },
  { name: 'Farzana Esmin', role: 'Expert Scholar', image: 'team_2_6.png' },
  { name: 'moriyam ena', role: 'Expert Scholar', image: 'team_2_7.png' },
  { name: 'Aysha Jahan', role: 'Expert Scholar', image: 'team_2_8.png' },
];

const TeamSection = () => {
  return (
    <section
      className="team-sec bg-theme overflow-hidden space overflow-hidden"
      data-bg-src="/assets/img/bg/team_bg_2.png"
    >
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title style2">OUR TEAM</span>
          <h2 className="sec-title text-white">Meet Our Agent</h2>
        </div>
        <div className="slider-area">
          <div
            className="swiper th-slider has-shadow"
            id="teamSlider2"
            data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
          >
            <div className="swiper-wrapper">
              {teamMembers.map((member, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="th-team team-card">
                    <div className="box-img">
                      <div className="team-overlay"></div>
                      <img
                        src={`/assets/img/team/${member.image}`}
                        alt="Team Member"
                      />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title">
                        <a href="/scholar-details.html">{member.name}</a>
                      </h3>
                      <span className="team-desig">{member.role}</span>
                      <div className="th-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button data-slider-prev="#teamSlider2" className="slider-arrow style2 slider-prev">
              <i className="far fa-arrow-left"></i>
            </button>
            <button data-slider-next="#teamSlider2" className="slider-arrow style2 slider-next">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
