"use client";
import "@/styles/home.scss";
import {
  FaEnvelope,
  FaMobile,
  FaHashtag,
  FaMagnifyingGlass,
  FaHandshake,
  FaNewspaper,
  FaCommentSms,
  FaRectangleAd,
  FaVideo,
} from "react-icons/fa6";

import Testimonials from "./components/Testimonials";

// Add useState for testimonial slider
const Home = () => {
  const services = [
    {
      title: "Email Marketing",
      description:
        "Engage and convert with personalized, interactive email campaigns that nurture leads and boost customer retention.",
      icon: <FaEnvelope />,
      image: "/images/services/email-marketing.jpg",
    },
    {
      title: "Mobile Marketing",
      description:
        "Reach your audience on the go with location-based, real-time messaging to drive engagement and sales.",
      icon: <FaMobile />,
      image: "/images/services/mobile-marketing.jpg",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build your brand presence and grow a loyal customer base with targeted social media strategies across major platforms.",
      icon: <FaHashtag />,
      image: "/images/services/social-media.jpg",
    },
    {
      title: "Search Advertising",
      description:
        "Increase visibility and attract high-intent customers with data-driven search engine advertising.",
      icon: <FaMagnifyingGlass />,
      image: "/images/services/search-advertising.jpg",
    },
    {
      title: "Affiliate Marketing",
      description:
        "Partner with industry influencers and affiliates to expand your reach and drive qualified leads.",
      icon: <FaHandshake />,
      image: "/images/services/affiliate-marketing.jpg",
    },
    {
      title: "Native Advertising",
      description:
        "Capture attention seamlessly with creative, in-feed advertisements that blend with user content.",
      icon: <FaNewspaper />,
      image: "/images/services/native-advertising.jpg",
    },
    {
      title: "SMS Marketing",
      description:
        "Deliver timely, impactful messages directly to your customers' mobile devices for instant engagement.",
      icon: <FaCommentSms />,
      image: "/images/services/sms-marketing.jpg",
    },
    {
      title: "Display Advertising",
      description:
        "Showcase your brand through visually compelling ads to capture attention and drive conversions.",
      icon: <FaRectangleAd />,
      image: "/images/services/display-advertising.jpg",
    },
    {
      title: "Video Advertising",
      description:
        "Tell your brand story and engage audiences with high-quality video content across multiple platforms.",
      icon: <FaVideo />,
      image: "/images/services/video-advertising.jpg",
    },
  ];

  return (
    <div className="home">
      <section className="hero ">
        <div className="hero-content min-h-screen flex flex-col items-center justify-center">
          <h1>Welcome to AfflyNext</h1>
          <h2>Driving Digital Success for Your Business</h2>
          <p>
            We help businesses achieve their online marketing goals with
            cutting-edge digital solutions.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome to AfflyNext – Your Digital Growth Partner</h2>
          <p>
            At AfflyNext, we help businesses achieve their online marketing
            goals with cutting-edge digital solutions. As a results-driven
            digital marketing agency, we craft personalized strategies that
            increase your online visibility, attract quality leads, and drive
            sales.
          </p>
        </div>
      </section>
      <section className="services-showcase">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            AfflyNext is a digital marketing company dedicated to helping
            businesses achieve their goals through a range of tailored digital
            marketing services.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href={`/services/${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="read-more"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2>Why Choose AfflyNext</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Innovative Strategies</h3>
              <p>
                Stay ahead with custom marketing solutions tailored to your
                business goals.
              </p>
            </div>
            <div className="benefit-card">
              <h3>ROI-Focused Campaigns</h3>
              <p>
                Maximize profits with data-backed, performance-driven
                strategies.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Proven Success</h3>
              <p>
                A track record of delivering measurable results across
                industries.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Client-Centric Approach</h3>
              <p>We listen, understand, and deliver personalized solutions.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-process">
        <div className="process-content">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Understanding Your Business</h3>
                <p>
                  We begin by learning about your business, audience, and goals
                  to craft a tailored strategy.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Strategic Execution</h3>
                <p>
                  We implement and refine marketing campaigns to deliver optimal
                  performance.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Measure & Optimize</h3>
                <p>
                  We track progress with real-time analytics, offering
                  transparent reports and continuous optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
