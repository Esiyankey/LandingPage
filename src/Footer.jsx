import { useState } from "react";
import image from "./assets/image.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={image} alt="Logo here" className="image1" />
      </div>
      <div class="footer-layout">
        <div class="footer-text">why otter.ai</div>
        <a
          data-tracking-type="button"
          href="https://otter.ai/business?ref=landingfolio"
          class="footer__link"
        >
          Otter for Business
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/education?ref=landingfolio"
          class="footer__link"
        >
          Otter for Education
        </a>
        <a
          href="https://otter.ai/individuals?ref=landingfolio"
          data-tracking-type="button"
          class="footer__link"
        >
          Otter for Individuals
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/pricing?ref=landingfolio"
          class="footer__link"
        >
          Pricing
        </a>
      </div>

      <div class="footer-layout">
        <div class="footer-text">Download</div>
        <a
          data-tracking-type="button"
          href="https://apps.apple.com/us/app/otter-voice-meeting-notes/id1276437113"
          target="_blank"
          class="footer__link down"
        >
          for iOS
        </a>
        <a
          data-tracking-type="button"
          href="https://play.google.com/store/apps/details?id=com.aisense.otter"
          target="_blank"
          class="footer__link down"
        >
          for Android
        </a>
        <a
          data-tracking-type="button"
          href="https://chrome.google.com/webstore/detail/otterai-transcribe-record/bnmojkbbkkonlmlfgejehefjldooiedp"
          target="_blank"
          class="footer__link down"
        >
          Chrome Extension
        </a>
      </div>

      <div class="footer-layout">
        <div class="footer-text">Resources</div>
        <a
          data-tracking-type="button"
          href="https://otter.ai/blog?ref=landingfolio"
          class="footer__link res"
        >
          Blog
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/careers?ref=landingfolio"
          class="footer__link res"
        >
          Careers
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/press?ref=landingfolio"
          class="footer__link res"
        >
          Press
        </a>
        <a
          data-tracking-type="button"
          href="https://help.otter.ai/hc/en-us"
          target="_blank"
          class="footer__link res"
        >
          Help &amp; Support
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/media-kit?ref=landingfolio"
          class="footer__link res"
        >
          Media Kit
        </a>
        <a
          data-tracking-type="button"
          href="https://app.impact.com/campaign-promo-signup/Otterai.brand?execution=e2s1"
          target="_blank"
          class="footer__link res"
        >
          Affiliate
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/privacy-security?ref=landingfolio"
          class="footer__link res"
        >
          Privacy &amp;&nbsp;Security
        </a>
      </div>

      <div class="footer-layout">
        <a
          href="https://otter.ai/?ref=landingfolio"
          id="footeryear"
          data-tracking-type="button"
          aria-current="page"
          class="footer__foot-link w--current"
        >
          © <span class="footer__year">2023</span> Otter.ai
        </a>
        <a
          href="https://otter.ai/terms-of-service?ref=landingfolio"
          data-tracking-type="button"
          class="footer__foot-link"
        >
          Terms of Service
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/privacy-policy?ref=landingfolio"
          class="footer__foot-link"
        >
          Privacy Policy
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/jp?ref=landingfolio"
          class="footer__foot-link"
        >
          JP
        </a>
        <a
          data-tracking-type="button"
          href="https://otter.ai/zoom?ref=landingfolio"
          class="footer__foot-link"
        >
          Zoom
        </a>
      </div>
    </div>
  );
};
