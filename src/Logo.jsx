import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Logo = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Set the animation duration (in milliseconds)
          easing: 'ease-in-out', // Set the animation easing
          once: true, // Specify if animations should only happen once
          // Additional configuration options...
        });
      }, []);
  return (
    <div className='logos'>
        <div className="logo-img" data-aos="fade-up">
            <img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554c972551243919f425_dropbox-logo.svg" alt="logos here" />
        </div>
        <div className="logo-img"data-aos="fade-up">
            <img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554bfd5fedfcdfb0aaad_zoom-logo.svg" alt="logos here" />
        </div>
        <div className="logo-img"data-aos="fade-up">
            <img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554b86ff2cd5e536307b_ibm-logo.svg" alt="logos here" />
        </div>
        <div className="logo-img"data-aos="fade-up">
            <img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554c9725510cdd19f424_docomo-logo.svg" alt="logos here" />
        </div>
        <div className="logo-img"data-aos="fade-up">
            <img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554bd4a8140c51c94f26_ucla-logo.svg" alt="logos here" />
        </div>
        <div className="logo-img"data-aos="fade-up">
            <img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554b472c7ddf37f41372_rakuten-logo.svg" alt="logos here" />
        </div>
    </div>
  )
}
