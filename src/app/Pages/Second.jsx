// import React, { useState, useEffect } from "react";

// const Second = () => {
//   const [isClient, setIsClient] = useState(false);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     setIsClient(true); // Ensure it's client-side
//     const interval = setInterval(() => {
//       setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const target = new Date("2025-08-23T11:01:00");

//     const updateTime = () => {
//       const now = new Date();
//       const diffInSeconds = Math.max(Math.floor((target - now) / 1000), 0);
//       setTime(diffInSeconds);
//     };
//     updateTime();
//     const interval = setInterval(() => {
//       updateTime();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   if (!isClient) return null;

//   const formatTime = (seconds) => {
//     const days = Math.floor(seconds / 86400)
//       .toString()
//       .padStart(2, "0");
//     const hrs = Math.floor((seconds % 86400) / 3600)
//       .toString()
//       .padStart(2, "0");
//     const mins = Math.floor((seconds % 3600) / 60)
//       .toString()
//       .padStart(2, "0");
//     return `${days}:${hrs}:${mins}`;
//   };

//   if (time <= 0) {
//         return (
//             <div className="h-screen w-full flex items-center justify-center">
//                 <h1
//                     className=" lg:text-9xl font-bold text-5xl animate-zoom-pulse"
//                     style={{
//                         animation: "zoom-pulse 2s infinite ease-in-out"
//                     }}
//                 >
//                     Hacking is Live!!
//                 </h1>

//             </div>
//         );
//     };

//   return (
//     <>
//       <div
//         id="second"
//         className="relative w-full overflow-hidden hidden sm:block  -mb-50 md:mt-30 md:z-[90]"
//       >
//         <img
//           src="/Landgroup.png"
//           alt="Background Element"
//           className="w-full opacity-100 mt-50 relative z-80"
//         />

//         <div className="absolute lg:top-97 md:top-76 lg:left-1/2 md:left-1/2 transform -translate-x-1/2 text-white md:text-[120px] lg:text-[170px] z-1 font-bold px-4 py-2 rounded hidden sm:block">
//           {time > 0 ? formatTime(time) : "HACKING IS LIVE NOW"}
//         </div>
//         <div className="absolute z-10 md:top-60 lg:top-77 md:left-95 lg:left-156 text-red-500 font-light flex flex-row md:text-4xl lg:text-6xl lg:space-x-36 items-center ">
//           HURRY UP!
//         </div>
//         <div className="absolute z-10 md:top-69 lg:top-89 md:left-80 lg:left-130 text-white font-light flex flex-row md:text-4xl lg:text-6xl lg:space-x-36 items-center">
//           HACKING STARTS IN...
//         </div>

//         <div className="absolute z-80 md:top-107 lg:top-137 md:left-73 lg:left-114 text-red-500 font-light flex flex-row md:text-2xl lg:text-4xl md:space-x-24 lg:space-x-36 items-center">
//           <p>DAYS</p>
//           <p>HOURS</p>
//           <p>MINUTES</p>
//         </div>
//         <div className="absolute z-40 top-120 opacity-80 blue-[3px] hidden md:block lg:hidden sm:block">
//           <img src="/Rectangle 15.svg" />
//         </div>
//         <div className="absolute z-40 top-160 opacity-90 blue-[3px] hidden md:block lg:hidden sm:block transform scale-y-[-1]">
//           <img src="/Rectangle 15.svg" />
//         </div>
//         <div className="overflow-hidden h-screen w-full absolute top-0 left-0">
//           <img
//             src="/rotate=0.svg"
//             className="h-340 w-340 md:h-220 md:w-220 lg:h-340 lg:w-340 absolute md:-top-10 lg:-top-24 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden lg:pt-8"
//           />
//           <img
//             src="/rotate=120.png"
//             className="h-260 w-260 md:h-170 md:w-170 lg:h-260 lg:w-260 absolute md:top-10 top-20 left-1/2 transform -translate-x-1/2 z-2 spin-slow overflow-hidden mt-7"
//           />
//           <img
//             src="/rotate=0.svg"
//             className="h-240 w-240 md:h-160 md:w-160 lg:h-240 lg:w-240 absolute md:top-15 top-23 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden pt-4"
//           />
//         </div>
//       </div>
//       <div
//         className="relative  w-full block sm:hidden py-16 md:hidden mb-70 mt-30 z-60 "
//         id="second-mobile"
//       >
//         <div className="h-screen w-full absolute -top-45 left-0">
//           <div className="relative h-full w-full flex flex-col items-center justify-center ">
//             <div className=" z-10  text-red-500 font-light  text-xl items-center">
//               HURRY UP!
//             </div>
//             <div className=" z-10  text-white font-light 2 text-xl items-center">
//               HACKING STARTS IN...
//             </div>
//             <div className="flex flex-col justify-center items-center space-y-0 ">
//               <div className=" text-white text-5xl z-10 font-bold px-4 py-2 rounded">
//                 {time > 0 ? formatTime(time) : "HACKING IS LIVE NOW"}
//               </div>
//               <div className="z-10  text-red-500 font-light flex flex-row text-lg space-x-5 items-center">
//                 <p>DAYS</p>
//                 <p>HOURS</p>
//                 <p>MINUTES</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-screen w-full absolute -top-45 left-0">
//           <div className="relative h-full w-full flex items-center justify-center spin">
//             {/* Outermost circle */}
//             <img
//               src="/rotate=0.svg"
//               className="h-[380px] w-[380px] absolute z-2 mt-4  "
//               alt="Outer rotating ring"
//             />
//           </div>
//         </div>
//         <div className="h-screen w-full absolute -top-45 left-0">
//           <div className="relative h-full w-full flex items-center justify-center spin">
//             {/* Middle circle */}
//             <img
//               src="/rotate=0.svg"
//               className="h-[300px] w-[300px] absolute z-3 mt-4 "
//               alt="Middle rotating ring"
//             />
//           </div>
//         </div>
//         <div className="h-screen w-full absolute -top-45 left-0">
//           <div className="relative h-full w-full flex items-center justify-center spin-slow">
//             {/* Innermost circle */}
//             <img
//               src="/rotate=120.png"
//               className="h-[300px] w-[300px] absolute z-4 "
//               alt="Inner rotating ring"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Second;
import React, { useState, useEffect } from "react";

const Second = () => {
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setIsClient(true); // Ensure it's client-side
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = new Date("2025-08-23T11:01:00");

    const updateTime = () => {
      const now = new Date();
      const diffInSeconds = Math.max(Math.floor((target - now) / 1000), 0);
      setTime(diffInSeconds);
    };
    updateTime();
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400)
      .toString()
      .padStart(2, "0");
    const hrs = Math.floor((seconds % 86400) / 3600)
      .toString()
      .padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    return `${days}:${hrs}:${mins}`;
  };

  if (time <= 0) {
        return (
            <div className="h-screen w-full flex items-center justify-center px-5">
                <h1
                    className="lg:text-9xl font-bold text-4xl animate-zoom-pulse"
                    style={{
                        animation: "zoom-pulse 2.5s infinite ease-in-out"
                    }}
                >
                    Hacking is Live!!
                </h1>
                <img src="ghibli.png" alt="Hacking is Live" className="lg:w-50  w-25 flex items-end" style={{
                    animation: "shake 0.7s infinite alternate ease-in-out"
                }} />
                <style jsx>{`
                @keyframes shake {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    20% { transform: translate(-4px, 2px) rotate(-2deg); }
                    40% { transform: translate(-2px, -2px) rotate(2deg); }
                    60% { transform: translate(4px, 2px) rotate(0deg); }
                    80% { transform: translate(2px, -2px) rotate(-1deg); }
                    100% { transform: translate(-2px, 2px) rotate(1deg); }
                }
            `}</style>

            </div>
        );
    }

  return (
    <>
      <div
        style={{ clipPath: "inset(0 0 30% 0)" }}
        id="second"
        className="relative w-full overflow-hidden hidden sm:block -mb-50  z-[90]"
      >
        <img
          src="/Landgroup.png"
          alt="Background Element"
          className="w-full opacity-100 mt-60 relative z-10"
        />

        {/* Concentric rotating rings */}
        <div className="overflow-hidden h-screen w-full absolute top-0 left-0 ">
          <img
            src="/rotate=1.svg"
            className="h-180 w-180 top-10 md:h-220 md:w-220 lg:h-340 lg:w-340 absolute md:-top-4 lg:-top-10 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden lg:pt-8"
          />
          <img
            src="/rotate=121.png"
            className="h-120 w-120 md:h-140 md:w-140 lg:h-240 lg:w-240 absolute md:top-27 top-27 left-1/2 transform -translate-x-1/2 z-2 spin-slow overflow-hidden mt-7"
          />
          <img
            src="/rotate=1.svg"
            className="h-130 w-130 md:h-160 md:w-160 lg:h-240 lg:w-240 absolute md:top-26 top-32 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden pt-4"
          />
        </div>

        {/* Timer and Text */}
        <div className="absolute top-[10rem] sm:top-[20rem] md:top-[23rem] lg:top-[30rem] xl:top-[30rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <div className="text-red-500 font-light text-3xl md:text-4xl lg:text-6xl">
            HURRY UP!
          </div>
          <div className="text-white font-light text-3xl md:text-4xl lg:text-6xl">
            HACKING STARTS IN...
          </div>
          <div className="text-white font-bold text-[60px] md:text-[80px] lg:text-[140px]">
            {time > 0 ? formatTime(time) : "HACKING IS LIVE NOW"}
          </div>
          <div className="relative -mt-4 sm:-mt-4 md:-mt-8 text-red-500 font-light text-xl md:text-2xl lg:text-4xl flex justify-evenly space-x-8">
            <p>DAYS</p>
            <p>HOURS</p>
            <p>MINUTES</p>
          </div>
        </div>
      </div>

      <div
        className="relative  w-full block sm:hidden py-16 md:hidden mb-70 mt-30 z-60 "
        id="second-mobile"
      >
        <div className="h-screen w-full absolute -top-45 left-0">
          <div className="relative h-full w-full flex flex-col items-center justify-center ">
            <div className=" z-10  text-red-500 font-light  text-xl items-center">
              HURRY UP!
            </div>
            <div className=" z-10  text-white font-light 2 text-xl items-center">
              HACKING STARTS IN...
            </div>
            <div className="flex flex-col justify-center items-center space-y-0 ">
              <div className=" text-white text-5xl z-10 font-bold px-4 py-2 rounded">
                {time > 0 ? formatTime(time) : "HACKING IS LIVE NOW"}
              </div>
              <div className="z-10  text-red-500 font-light flex flex-row text-lg space-x-5 items-center">
                <p>DAYS</p>
                <p>HOURS</p>
                <p>MINUTES</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen w-full absolute -top-45 left-0">
          <div className="relative h-full w-full flex items-center justify-center spin">
            {/* Outermost circle */}
            <img
              src="/rotate=0.svg"
              className="h-[380px] w-[380px] absolute z-2 mt-4  "
              alt="Outer rotating ring"
            />
          </div>
        </div>
        <div className="h-screen w-full absolute -top-45 left-0">
          <div className="relative h-full w-full flex items-center justify-center spin">
            {/* Middle circle */}
            <img
              src="/rotate=0.svg"
              className="h-[300px] w-[300px] absolute z-3 mt-4 "
              alt="Middle rotating ring"
            />
          </div>
        </div>
        <div className="h-screen w-full absolute -top-45 left-0">
          <div className="relative h-full w-full flex items-center justify-center spin-slow">
            {/* Innermost circle */}
            <img
              src="/rotate=120.png"
              className="h-[300px] w-[300px] absolute z-4 "
              alt="Inner rotating ring"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Second;
