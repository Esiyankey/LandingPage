import { useState } from "react";
import image from "./assets/image.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={image} alt="Logo here" className="image1" />
      </div>
      <div className="footer-layout">
        <div className="footer-text">why otter.ai</div>
        <a
          data-tracking-type="button"
          href="https://otter.ai/business?ref=landingfolio"
          className="footer__link"
        >
          Otter for Business
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/education?ref=landingfolio"
          className="footer__link"
        >
          Otter for Education
        </a>
        <a
          href="https://otter.ai/individuals?ref=landingfolio"
          data-tracking-type="button"
          className="footer__link"
        >
          Otter for Individuals
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/pricing?ref=landingfolio"
          className="footer__link"
        >
          Pricing
        </a>
      </div>

      <div className="footer-layout">
        <div className="footer-text">Download</div>
        <a
          data-tracking-type="button"
          href="https://apps.apple.com/us/app/otter-voice-meeting-notes/id1276437113"
          target="_blank"
          className="footer__link down"
        >
          for iOS
        </a>
        <a
          data-tracking-type="button"
          href="https://play.google.com/store/apps/details?id=com.aisense.otter"
          target="_blank"
          className="footer__link down"
        >
          for Android
        </a>
        <a
          data-tracking-type="button"
          href="https://chrome.google.com/webstore/detail/otterai-transcribe-record/bnmojkbbkkonlmlfgejehefjldooiedp"
          target="_blank"
          className="footer__link down"
        >
          Chrome Extension
        </a>
      </div>

      <div className="footer-layout">
        <div className="footer-text">Resources</div>
        <a
          data-tracking-type="button"
          href="https://otter.ai/blog?ref=landingfolio"
          className="footer__link res"
        >
          Blog
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/careers?ref=landingfolio"
          className="footer__link res"
        >
          Careers
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/press?ref=landingfolio"
          className="footer__link res"
        >
          Press
        </a>
        <a
          data-tracking-type="button"
          href="https://help.otter.ai/hc/en-us"
          target="_blank"
          className="footer__link res"
        >
          Help &amp; Support
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/media-kit?ref=landingfolio"
          className="footer__link res"
        >
          Media Kit
        </a>
        <a
          data-tracking-type="button"
          href="https://app.impact.com/campaign-promo-signup/Otterai.brand?execution=e2s1"
          target="_blank"
          className="footer__link res"
        >
          Affiliate
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/privacy-security?ref=landingfolio"
          className="footer__link res"
        >
          Privacy &amp;&nbsp;Security
        </a>
      </div>

      <div className="footer-layout">
        <a
          href="https://otter.ai/?ref=landingfolio"
          id="footeryear"
          data-tracking-type="button"
          aria-current="page"
          className="footer__foot-link w--current foot"
        >
          © <span className="footer__year">2023</span> Otter.ai
        </a>
        <a
          href="https://otter.ai/terms-of-service?ref=landingfolio"
          data-tracking-type="button"
          className="footer__foot-link foot"
        >
          Terms of Service
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/privacy-policy?ref=landingfolio"
          className="footer__foot-link foot"
        >
          Privacy Policy
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/jp?ref=landingfolio"
          className="footer__foot-link foot"
        >
          JP
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/zoom?ref=landingfolio"
          className="footer__foot-link foot"
        >
          Zoom
        </a>
      </div>
    </div>
  );
};
