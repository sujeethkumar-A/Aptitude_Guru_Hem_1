import React from "react";
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

const CoursesSection = () => {
  return (
    <section className="courses-wrapper">
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
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
        ))}
      </div>

      <div className="courses-view-more">
        <a href="#more-courses">View More &gt;</a>
      </div>
    </section>
  );
};

export default CoursesSection;