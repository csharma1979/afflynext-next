import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="footer-logo">
              <Image
                src="/images/w-logo.png"
                alt="Afflyn Logo"
                height={300}
                width={300}
              />
            </Link>
            <p className="company-desc">
              Your trusted partner in digital marketing solutions, helping
              businesses grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link href="/services/email-marketing">Email Marketing</Link>
              </li>
              <li>
                <Link href="/services/mobile-marketing">Mobile Marketing</Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/search-advertising">
                  Search Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/affiliate-marketing">
                  Affiliate Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/native-advertising">
                  Native Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/sms-marketing">SMS Marketing</Link>
              </li>
              <li>
                <Link href="/services/display-advertising">
                  Display Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/video-advertising">
                  Video Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <span>📍</span>
                123 Business Avenue
                <br />
                New York, NY 10001
              </li>
              <li>
                <span>📞</span>
                +1 (555) 123-4567
              </li>
              <li>
                <span>✉️</span>
                contact@afflynext.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} AfflyNext. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
