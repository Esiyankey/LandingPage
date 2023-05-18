import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Section3 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      easing: 'ease-in-out', // Set the animation easing
      once: true, // Specify if animations should only happen once
      // Additional configuration options...
    });
  }, []);
  return (
    <div className="section3">
      <div className="section3-text">
        <h3>Save time with Automated Meeting Notes</h3>
        <p className="p-text">
          Connect Otter to your Google or Microsoft calender and it can
          automatically join and record your meetings on Zoom, Microsoft Terms
          and Google Meet. Follow along live on the web or in the iOS or Android
          app.
        </p>
      </div>
      <div className="sectio3-popUps " data-aos="fade-up">
        <div className="popUp zoom">
          <img
            src="https://assets-global.website-files.com/618e9316785b3582a5178502/619108552fdd5200c1abbdda_icon-zoom%402x.png"
            alt="Zoom logo"
            className="image3"
            
          />
          <h5>Zoom</h5>
        </div>
        <div className="google-popup" data-aos="fade-up">
          <div className="popUp google">
            <img
              src="https://assets-global.website-files.com/618e9316785b3582a5178502/61910743c892cd03f7fa3415_icon-meet%402x.png"
              alt="Google Meet logo"
              className="image3"
             
            />
            <h5>Google Meet</h5>
          </div>
        </div>
          
        <div className="popUp microsoft" data-aos="fade-up">
          <img
            src="https://assets-global.website-files.com/618e9316785b3582a5178502/61910743514f50529e25b1e0_icon-teams%402x.png"
            alt="Microsoft logo"
            className="image3"
          />
          <h5>Microsoft Terms</h5>
        </div>
      </div>
    </div>
  );
};
