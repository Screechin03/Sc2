import { useEffect, useState } from "react";

const DevfolioButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
       <a
        className="mt-4 relative z-[3] sm:mt-9 inline-block cursor-pointer"
        href="https://statuscode-2.devfolio.co/"
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/Cta Button.png"
          alt="Apply with Devfolio"
          className="w-full h-full rounded-sm"
          style={{
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </a> 

      
    </>
  );
};

export default DevfolioButton; 