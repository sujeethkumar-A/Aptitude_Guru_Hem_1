import React from "react";
import "./img1.css"; 
// Uncomment the line below ONLY if your image is inside src/assets/ instead of public/image/
// import demoImg from "../assets/reactdemoimg1.jpg";

const Image1 = () => {
  return (
    <div className="image-container">
      {/* Use src={demoImg} if importing from src/assets/ */}
      <img 
        src="/images/reactdemoimg1.jpg" 
        alt="Description of the image" 
        className="demo-image"
      />
    </div>
  );
};

export default Image1;
