"use client";
import React from "react";
import Link from "next/link";
import {
  Mail,
  Smartphone,
  Share2,
  Search,
  Handshake,
  LayoutTemplate,
  MessageSquare,
  TvIcon,
  Film,
} from "lucide-react";
import "@/styles/Services.scss";

const services = [
  {
    id: "email-marketing",
    title: "Email Marketing",
    description:
      "Create targeted email campaigns that drive engagement and conversions.",
    icon: <Mail className="service-icon" />,
  },
  {
    id: "mobile-marketing",
    title: "Mobile Marketing",
    description:
      "Reach customers on their mobile devices with targeted campaigns and apps.",
    icon: <Smartphone className="service-icon" />,
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Build brand presence and engage with customers across social platforms.",
    icon: <Share2 className="service-icon" />,
  },
  {
    id: "search-advertising",
    title: "Search Advertising",
    description:
      "Drive qualified traffic through targeted search engine advertising.",
    icon: <Search className="service-icon" />,
  },
  {
    id: "affiliate-marketing",
    title: "Affiliate Marketing",
    description: "Grow your business through strategic partnership programs.",
    icon: <Handshake className="service-icon" />,
  },
  {
    id: "native-advertising",
    title: "Native Advertising",
    description:
      "Create seamless advertising experiences that blend with content.",
    icon: <LayoutTemplate className="service-icon" />,
  },
  {
    id: "sms-marketing",
    title: "SMS Marketing",
    description:
      "Connect with customers through targeted text message campaigns.",
    icon: <MessageSquare className="service-icon" />,
  },
  {
    id: "display-advertising",
    title: "Display Advertising",
    description: "Reach your audience with compelling visual advertisements.",
    icon: <TvIcon className="service-icon" />,
  },
  {
    id: "video-advertising",
    title: "Video Advertising",
    description: "Engage audiences with powerful video content and campaigns.",
    icon: <Film className="service-icon" />,
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Comprehensive digital marketing solutions to grow your business</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              href={`/services/${service.id}`}
              key={service.id}
              className="service-card"
            >
              <div className="service-icon-wrapper learn-more">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="learn-more">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
