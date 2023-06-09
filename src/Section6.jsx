import { useEffect } from "react";
import { FaAngleRight } from "react-icons/all";
import AOS from "aos";
import "aos/dist/aos.css";
export const Section6 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      easing: "ease-in-out", // Set the animation easing
      once: true, // Specify if animations should only happen once
      // Additional configuration options...
    });
  }, []);

  return (
    <>
      <div className="section6">
        <h3 className="Otter-text">Which Otter is right for you?</h3>
        <div className="section-6">
          <div className="image-text">
            <div className="img-icon black" data-aos="zoom-in">
              <img
                src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f17a049ba94a25c93ae245_icon-business.svg"
                alt=" education"
                className="image6"
              />
            </div>

            <div className="par-wrap">
              <p className="img-text" data-aos="zoom-in">
                Get the most out of your meetings
              </p>
              <div className="big-screen" data-aos="zoom-in">
              Otter empowers everyone to engage and be more productive in meetings with real time automated notes and audio transcription.
              </div>
              <button className="btn">
                Try Otter.ai for Individuals
              </button>
              <h6 data-aos="zoom-in">
                For Business <FaAngleRight />
              </h6>
            </div>
          </div>
          <div className="image-text">
            <div className="img-icon green" data-aos="zoom-in">
              <img
                src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f179e8021779149f1c2891_icon-education.svg"
                alt="graduation"
                className="image6"
              />
            </div>

            <div className="par-wrap">
              <p className="img-text" data-aos="zoom-in">
                Help students and Faculty succeed
              </p>
              <div className="big-screen" data-aos="zoom-in">
              Otter provides faculty and students with real time captions and notes for in-person and virtual lectures, classes or meetings.
              </div>
              <button className="btn">
                Try Otter.ai for Education
              </button>
              <h6 data-aos="zoom-in">
                For Education <FaAngleRight />
              </h6>
            </div>
          </div>
          <div className="image-text">
            <div className="img-icon violet" data-aos="zoom-in">
              <img
                src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f179f45b83cce619da1e48_icon-individuals.svg"
                alt="individuals"
                className="image6"
              />
            </div>

            <div className="par-wrap">
              <p className="img-text" data-aos="zoom-in">
                For all your needs
              </p>
              <div className="big-screen" data-aos="zoom-in">
              Otter has you covered with real-time voice transcription and features to empower more productive interactions.
              </div>
              <button className="btn">
                Try Otter.ai for Free
              </button>
              <h6 data-aos="zoom-in">
                For Individuals <FaAngleRight />
              </h6>
            </div>
          </div>
        </div>
      </div>

      <img
        className="right-Otter"
        src="https://assets-global.website-files.com/618e9316785b3582a5178502/6191777194e4100491e7f318_right-otter.svg"
        alt="image here"
      />
    </>
  );
};
