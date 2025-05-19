import React from "react";
import { FaInstagram, FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
const Last = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col justify-center items-center -mt-28 "
    >
      <img src="/TEXT.svg" className="h-75 z-60 hidden sm:block" />
      <img src="/TEXT.svg" className="h-45 z-60 block sm:hidden -mt-12" />
      <img
        src="/Vector (3).svg"
        className="z-80 mt-20 h-22 mix-blend-color-dodge"
      />
      <div className="alsolute z-60 -mt-6 flex justify-center items-center flex-col">
        <a
          href="https://discord.gg/9BA4R2huTF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="Cta Button (1).png"
            className="w-56 mt-10"
            alt="CTA Button"
          />
        </a>
        <p className="text-[#2A4EB0] font-light text-2xl px-24 mt-8 font-ticketing text-center brightness-180 z-60 hidden sm:block">
          Join our discord community to stay updated on all the latest
          developments and announcements for out hackathon! Don't miss out on
          key updates and opportunities, join us today!
        </p>
        <p className="text-[#2A4EB0] font-light text-sm px-3 mt-4 font-ticketing text-center brightness-180 z-60 block sm:hidden">
          Join our discord community to stay updated on all the latest
          developments and announcements for out hackathon! Don't miss out on
          key updates and opportunities, join us today!
        </p>
      </div>
      <div className="relative justify-between w-full px-12 md:px-24 lg:px-40 mt-17 z-60 text-white hidden sm:flex">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">ADDRESS</p>
          <p className="text-xl text-[#92DEFF] text-center bf-clip-text mt-2">
            <a
              href="https://maps.app.goo.gl/ZYcGRk4KuqoyJyWX7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              IISER Kolkata
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">RESOURCES</p>
          <div className="flex flex-col text-xl text-[#92DEFF] mt-2 items-center text-center space-y-1 max-w-[200px]">
            <a
              href="/Sponsorship brochure.pdf"
              target="_blank"
              className="hover:underline break-words"
            >
              Sponsorship Brochure
            </a>
            <a
              href="/hacker-guide.pdf"
              target="_blank"
              className="hover:underline"
            >
              Hacker Guide
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">STAY CONNECTED</p>
          <div className="flex space-x-6 text-[#92DEFF] mt-2">
            <a
              href="https://www.instagram.com/status_code_2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl hover:text-white font-ticketing" />
            </a>
            <a
              href="https://discord.gg/9BA4R2huTF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-3xl hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/statuscode0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-white" />
            </a>
            <a
              href="https://x.com/Status_Code_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl hover:text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex space-x-6 justify-center mt-17 z-60 text-white sm:hidden -mb-20">
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold">ADDRESS</p>
          <p className="text-sm px-3 text-[#92DEFF] text-center bf-clip-text mt-2">
            <a
              href="https://maps.app.goo.gl/ZYcGRk4KuqoyJyWX7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              IISER Kolkata
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg font-bold">RESOURCES</p>
          <div className="flex flex-col text-sm text-[#92DEFF] mt-2  text-center justify-center space-y-1">
            <a
              href="/Sponsorship brochure.pdf"
              target="_blank"
              className="hover:underline"
            >
              Sponsorship Brochure
            </a>
            <a
              href="/hacker-guide.pdf"
              target="_blank"
              className="hover:underline text-center"
            >
              Hacker Guide
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center pr-1">
          {" "}
          {/* pr-x: Padding on right side (x=1) */}
          <p className="text-lg font-bold">STAY CONNECTED</p>
          <div className="flex px-4 space-x-3 text-[#92DEFF] mt-2">
            <a
              href="https://www.instagram.com/status_code_2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-sm hover:text-white font-ticketing" />
            </a>
            <a
              href="https://discord.gg/9BA4R2huTF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-sm hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/statuscode0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-sm hover:text-white" />
            </a>
            <a
              href="https://x.com/Status_Code_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-sm hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="relative w-full h-screen overflow-hidden -mt-80"> */}
      <div className="relative w-full min-h-screen overflow-hidden -mt-72 sm:-mt-80">
        {/* Moon Glow */}
        <img
          src="/glowmoon.png"
          className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-1 w-[800px] opacity-70 hidden sm:block"
          alt="Moon Glow"
        />
        <img
          src="/glowmoon.png"
          className="absolute left-1/2 transform -translate-x-1/2 z-1 w-[800px] opacity-70 block sm:hidden top-[40%]"
          alt="Moon Glow"
        />

        {/* Mountains */}
        <img
          src="/mountians.png"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-2 w-full opacity-100"
          alt="Mountains"
        />
        <img
          src="/mountians (1).png"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-2 w-full opacity-100 block sm:hidden"
          alt="Mountains"
        />

        {/* Land */}
        <img
          src="/land.png"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-2 w-full opacity-80 mix-blend-difference hidden sm:block"
          alt="Land"
        />
        <img
          src="/land.png"
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-2 w-full h-[190px] opacity-100 mix-blend-difference block sm:hidden "
          alt="Land"
        />

        {/* Character */}
        <img
          src="/Group 170.png"
          className="absolute top-[46%] lg:left-200 md:left-130 transform -translate-x-1/2 z-4 w-[240px] hidden sm:block"
          alt="Character on Broomstick"
        />
        <img
          src="/Group 170.png"
          className="absolute top-[64%] left-1/2 transform transalte-y-1/2 -translate-x-1/2 z-4 w-[220px] block sm:hidden"
          alt="Character on Broomstick"
        />

        {/* Rectangle 15 (Reduced Height) */}
        <img
          src="/Rectangle 15.svg"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-2 w-full  opacity-90"
          alt="Rectangle Background"
        />

        {/* Thank You Text */}
        <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 z-5 text-white text-center text-xl font-semibold tracking-wide w-100">
          @2025 IIIT Kalyani
        </div>
      </div>
    </div>
  );
};

export default Last;
