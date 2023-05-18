import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Section5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      easing: 'ease-in-out', // Set the animation easing
      once: true, // Specify if animations should only happen once
      // Additional configuration options...
    });
  }, []);
  return (
    <div className="section5">
      <div className="section3-text">
        <h3>Keep everyone aligned with Automated Summary</h3>
        <p className="p-text">
          After the meeting, Otter generates and emails a summary that allows
          you to easily recall and share key information saving you time from
          having to revisit the entire transcript.
        </p>
      </div>

      <div className="img">
          <img
            src="https://assets-global.website-files.com/618e9316785b3582a5178502/63e9702c2d65535157833a79_automated-summary-bottom%402x-p-800.jpg"
            alt="image here"
            className="image flex"
            data-aos="fade-up"
          />
          <img
            src="https://assets-global.website-files.com/618e9316785b3582a5178502/63e9702cc21faa6641d05cbf_automated-summary-top%402x-p-500.jpg"
            alt="image here"
            className="image4"
          />
      </div>
    </div>
  );
};
