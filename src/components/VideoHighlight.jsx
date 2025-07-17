import React from 'react';

const VideoHighlight = () => {
  return (
    <>
      {/* Video Section Background */}
      <div
        className="video-area space overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/bg/video_bg_3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-xxl-4">
              <div className="title-area text-center">
                <span className="sub-title style2">RECENT STORIES</span>
                <h2 className="sec-title text-white">Your Ultimate Umrah Experience Awaits</h2>
              </div>
            </div>
          </div>

          {/* Video Play Button */}
          <div className="video-box1 text-center mt-4">
            <a
              href="https://www.youtube.com/watch?v=ueIOUTyRS84"
              target="_blank"
              rel="noopener noreferrer"
              className="play-btn"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoHighlight;
