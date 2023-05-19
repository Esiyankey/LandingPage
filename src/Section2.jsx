import {useEffect} from "react";
import img from "./assets/img.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Section2 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      easing: 'ease-in-out', // Set the animation easing
      once: true, // Specify if animations should only happen once
      // Additional configuration options...
    });
  }, []);
  return (
    <div className="Section2">
      <div className="hero2">
        <h4 className="heading2">Write Notes and Summarize Meetings 30x faster</h4>
        <p className="p-text">
          Collaborate with teammates in the live transcript, by adding comments,
          highlighting key points, and assigning action items.
        </p>
      </div>
      <div className="img" data-aos="fade-up">
        <img src={img} alt="image here" className="image" />
      </div>
    </div>
  );
};
