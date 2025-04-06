"use client";

import { useState } from "react";
import "@/styles/home.scss";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "A2zhome services",
    text: "AfflyNext transformed our digital marketing strategy. Their expertise in email campaigns resulted in a 40% increase in our conversion rates within just three months.",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    name: "Michael Chen",
    position: "E-commerce Manager",
    company: "Package Transform",
    text: "The team's attention to detail and data-driven approach helped us optimize our campaigns effectively. Our ROI has improved significantly since partnering with them.",
    image: "/images/testimonials/michael.jpg",
  },
  {
    name: "Emma Williams",
    position: "CEO",
    company: "Energy Transform",
    text: "Working with AfflyNext has been a game-changer for our startup. Their strategic guidance and implementation have helped us establish a strong market presence.",
    image: "/images/testimonials/emma.jpg",
  },
  // {
  //   name: "David Martinez",
  //   position: "Digital Marketing Head",
  //   company: "Retail Solutions",
  //   text: "The personalized approach and consistent results make AfflyNext stand out. They're not just service providers; they're growth partners.",
  //   image: "/images/testimonials/david.jpg",
  // },
  // {
  //   name: "Lisa Thompson",
  //   position: "Operations Director",
  //   company: "Healthcare Plus",
  //   text: "Their understanding of the healthcare industry and compliance requirements is impressive. We've seen remarkable engagement improvements in our campaigns.",
  //   image: "/images/testimonials/lisa.jpg",
  // },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const itemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage());

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage(),
    currentIndex * itemsPerPage() + itemsPerPage()
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl"> Trusted by Industry Leaders</h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" mb-4"
          ></motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients
            say about working with us.
          </motion.p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#6A0DAD] " />
          </button>

          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#6A0DAD] " />
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  >
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-14 w-14 rounded-full object-cover border-2 border-indigo-100"
                            height={300}
                            width={300}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-indigo-100 p-1 rounded-full">
                            <Quote className="h-4 w-4 text-[#6A0DAD] " />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 flex-grow">
                        {testimonial.text}
                      </p>
                      <div className="mt-6 flex justify-end">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`mx-1 h-2 w-8 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#6A0DAD] "
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Star({ className, fill }: { className?: string; fill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
