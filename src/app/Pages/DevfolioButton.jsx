import { useEffect, useState } from "react";

const DevfolioButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
       <a
        className="mt-4 relative z-[3] sm:mt-9 inline-block cursor-pointer"
        href="https://apply.devfolio.co"
        data-hackathon-slug="statuscode-2"
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/Cta Button.png"
          alt="Apply with Devfolio"
          className="w-76 h-15 z"
          style={{ transition: "transform 0.3s ease", transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </a> 
    </>
  );
};

export default DevfolioButton;
