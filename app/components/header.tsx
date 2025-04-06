"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Smartphone,
  Users,
  Search,
  Link2,
  Layers,
  TvIcon,
  MessageSquare,
  PlayCircle,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex flex-col">
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={50}
              width={200}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex items-center justify-center">
            <Link
              href="/"
              className="text-md font-medium text-[#210237] hover:text-[#582f64] transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              ref={servicesDropdownRef}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-md font-medium text-[#210237] hover:text-[#582f64] transition-colors"
              >
                Services{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute -pl-18 left-0 mt-0 w-[600px] rounded-lg bg-white shadow-xl border border-gray-100 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {serviceLinks.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                      >
                        <div className="p-2 bg-purple-100 rounded-lg text-[#6A0DAD] group-hover:text-[#6A0DAD]    transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-[#6A0DAD] ">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-md transition-colors"
                    >
                      View all services
                      <ChevronDown className="h-4 w-4 rotate-90" />
                    </Link>
                  </div> */}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-md font-medium text-[#210237] hover:text-[#582f64] transition-colors"
            >
              About
            </Link>
            {/* <Link
              href="/blog"
              className="text-md font-medium text-[#210237] hover:text-[#582f64] transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className="text-md font-medium text-[#210237] hover:text-[#582f64] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden md:flex items-center px-5 py-2.5 bg-[#6a0dad] text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow hover:shadow-md"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#6A0DAD]" />
            ) : (
              <Menu className="h-6 w-6 text-[#6A0DAD]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col h-full p-6 pt-24 overflow-y-auto">
            <nav className="flex flex-col gap-6">
              <Link
                href="/"
                className="text-xl font-medium text-[#210237] hover:text-[#582f64] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between text-xl font-medium text-[#210237] py-2"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-4 pl-4 border-l-2 border-purple-200">
                    <div className="grid grid-cols-1 gap-3">
                      {serviceLinks.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="p-2 bg-purple-100 rounded-lg text-[#6A0DAD] ">
                            {service.icon}
                          </div>
                          <span className="font-medium">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="block mt-4 text-center text-[#6A0DAD]  font-medium py-2 hover:bg-purple-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View all services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-xl font-medium text-[#210237] hover:text-[#582f64] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              {/* <Link
                href="/blog"
                className="text-xl font-medium text-[#210237] hover:text-[#582f64] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link> */}
              <Link
                href="/contact"
                className="text-xl font-medium text-[#210237] hover:text-[#582f64] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <Link
              href="/contact"
              className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 text-center font-medium shadow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

const serviceLinks = [
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
    icon: <Mail className="h-5 w-5" />,
    description: "Targeted campaigns that drive engagement and conversions",
  },
  {
    title: "Mobile Marketing",
    href: "/services/mobile-marketing",
    icon: <Smartphone className="h-5 w-5" />,
    description: "Reach customers on their mobile devices effectively",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    icon: <Users className="h-5 w-5" />,
    description: "Build brand presence across social platforms",
  },
  {
    title: "Search Advertising",
    href: "/services/search-advertising",
    icon: <Search className="h-5 w-5" />,
    description: "Drive qualified traffic through search ads",
  },
  {
    title: "Affiliate Marketing",
    href: "/services/affiliate-marketing",
    icon: <Link2 className="h-5 w-5" />,
    description: "Grow through strategic partnership programs",
  },
  {
    title: "Native Advertising",
    href: "/services/native-advertising",
    icon: <Layers className="h-5 w-5" />,
    description: "Seamless ads that blend with content",
  },
  {
    title: "SMS Marketing",
    href: "/services/sms-marketing",
    icon: <MessageSquare className="h-5 w-5" />,
    description: "Connect via targeted text message campaigns",
  },
  {
    title: "Display Advertising",
    href: "/services/display-advertising",
    icon: <TvIcon className="h-5 w-5" />,
    description: "Compelling visual advertisements",
  },
  {
    title: "Video Advertising",
    href: "/services/video-advertising",
    icon: <PlayCircle className="h-5 w-5" />,
    description: "Engage audiences with powerful video content",
  },
];
