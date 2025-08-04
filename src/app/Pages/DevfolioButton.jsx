import { useEffect, useState } from "react";

const DevfolioButton = () => {
  const [isClient, setIsClient] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Ensure we're on the client (avoids SSR issues)
    setIsClient(true);

    const targetDate = new Date("2025-08-11T00:00:00"); 
    const now = new Date();

    setIsDisabled(now >= targetDate); // Set disabled based on current time
  }, []);

  if (!isClient) return null; // Prevent rendering on server side

  return (
    <div
      className="mt-4 relative z-[3] sm:mt-9 inline-block"
      onMouseEnter={(e) => isDisabled && e.stopPropagation()}
      onMouseLeave={(e) => isDisabled && e.stopPropagation()}
    >
      {isDisabled ? (
        <div className="cursor-not-allowed">
          <img
            src="/C Button.png"
            alt="Registrations Closed"
            className="w-full h-full rounded-sm grayscale opacity-60"
            
          />
          
        </div>
      ) : (
        <a
          href="https://statuscode-2.devfolio.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src="/Cta Button.png"
            alt="Apply with Devfolio"
            className="w-full h-full rounded-sm transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </a>
      )}
    </div>
  );
};

export default DevfolioButton;
