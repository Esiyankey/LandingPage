import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      easing: 'ease-in-out', // Set the animation easing
      once: true, // Specify if animations should only happen once
      // Additional configuration options...
    });
  }, []);
  return (
    <div className="section4">
      <div className="section3-text">
        <h3>Remember key details with Automated Slide Capture</h3>
        <p className="p-text">
          When someone shares slides during a virtual meeting. Otter
          automatically captures and inserts them into the meeting notes,
          providing complete context of the content thta was discussed.
        </p>
      </div>

      <div className="img" data-aos="fade-up">
        <img src="https://assets-global.website-files.com/618e9316785b3582a5178502/63e97429be8e5c77efe67057_automatic-slide%402x-p-800.jpg" alt="image here" className="image" />
      </div>
    </div>
  );
};
