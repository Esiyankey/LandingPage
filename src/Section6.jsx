import React from "react";
import { FaAngleRight } from "react-icons/all";

export const Section6 = () => {
  return (
    <>
      <div className="section6">
        <h3>Which Otter is right for you?</h3>
        <div className="image-text">
          <div className="img-icon black">
            <img
              src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f17a049ba94a25c93ae245_icon-business.svg"
              alt=" education"
              className="image6"
            />
          </div>
          <p className="img-text">
            Get the most out of your meetings
            <h6>
              For Bussiness <FaAngleRight />
            </h6>
          </p>
        </div>
        <div className="image-text">
          <div className="img-icon green">
            <img
              src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f179e8021779149f1c2891_icon-education.svg"
              alt="graduation"
              className="image6"
            />
          </div>
          <p className="img-text">
            Help students and Faculty succeed
            <h6>
              For Education <FaAngleRight />
            </h6>
          </p>
        </div>
        <div className="image-text">
          <div className="img-icon violet">
            <img
              src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f179f45b83cce619da1e48_icon-individuals.svg"
              alt="individuals"
              className="image6"
            />
          </div>

          <p className="img-text">
            For all your needs
            <h6>
              For Individuals <FaAngleRight />
            </h6>
          </p>
        </div>
      </div>

      
        <img className="right-Otter" src="https://assets-global.website-files.com/618e9316785b3582a5178502/6191777194e4100491e7f318_right-otter.svg" alt="image here" />
      
    </>
  );
};
