import React, { useState } from "react";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CoursesSection.css";

const courses = [
  {
    id: 1,
    title: "AGH AI Summer Camp 2026 Five Days",
    recommended: "School Students",
    duration: "5 Days",
    price: "₹ 7,000",
    originalPrice: "₹ 9000",
    image: "/images/course.jpg",
  },
  {
    id: 2,
    title: "AGH AI Summer Camp 2026",
    recommended: "School Students",
    duration: "10 Days",
    price: "₹ 10,000",
    originalPrice: "₹ 12000",
    image: "/images/course.jpg",
  },
  {
    id: 3,
    title: "AGH Communication Summer Camp 2026",
    recommended: "School Students",
    duration: "10 Days",
    price: "₹ 10,000",
    originalPrice: "₹ 12000",
    image: "/images/course.jpg",
  },
];

const filterOptions = [
  { value: "all", label: "All Courses (3)" },
  { value: "5 Days", label: "Duration: 5 Days" },
  { value: "10 Days", label: "Duration: 10 Days" },
];

const CoursesSection = () => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

  const filteredCourses = courses.filter((course) => {
    if (!selectedFilter || selectedFilter.value === "all") {
      return true;
    }
    return course.duration === selectedFilter.value;
  });

  return (
    <section className="courses-wrapper">
      {/* Dropdown Bar above the Carousel */}
      <div className="courses-filter-bar">
        <label htmlFor="course-duration-filter" className="filter-label">
          Filter Courses:
        </label>
        <div className="filter-dropdown-box">
          <Select
            inputId="course-duration-filter"
            value={selectedFilter}
            onChange={(option) => setSelectedFilter(option)}
            options={filterOptions}
            isSearchable={false}
          />
        </div>
      </div>

      {/* Carousel renders the filtered courses */}
     <Swiper
  key={selectedFilter?.value || "all"}
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={24}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={filteredCourses.length > 1}
  breakpoints={{
    768: {
      slidesPerView: filteredCourses.length === 1 ? "auto" : 2,
    },
  }}
  className={`courses-swiper ${filteredCourses.length === 1 ? "single-slide" : ""}`}
>
        {filteredCourses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="course-card">
              <div className="course-img-box">
                <img src={course.image} alt={course.title} />
              </div>

              <div className="course-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <h3 className="course-title">{course.title}</h3>

              <p className="course-meta">
                Recommended: {course.recommended}
                <br />
                Duration: {course.duration}
              </p>

              <div className="course-price-row">
                <span className="course-price">{course.price}</span>
                <span className="course-gst">+ GST</span>
                <span className="course-old-price">{course.originalPrice}</span>
              </div>

              <div className="course-actions">
                <button type="button" className="btn-buy">
                  Buy Now
                </button>
                <button type="button" className="btn-know-more">
                  Know More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="courses-view-more">
        <a href="#more-courses">View More &gt;</a>
      </div>
    </section>
  );
};

export default CoursesSection;