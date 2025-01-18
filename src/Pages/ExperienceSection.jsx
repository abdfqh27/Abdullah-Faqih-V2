import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "Effective Communication", percentage: 94 },
  { name: "Team Collaboration", percentage: 95 },
  { name: "Problem-Solving", percentage: 97 },
  { name: "Adaptability", percentage: 93 },
  { name: "Time Management", percentage: 98 },
  { name: "Leadership", percentage: 96 },
  { name: "Conflict Resolution", percentage: 95 },
  { name: "Creativity", percentage: 95 },
  { name: "Emotional Intelligence", percentage: 92 },
  { name: "Decision-Making", percentage: 96 },
  { name: "Networking", percentage: 97 },
  { name: "Self-Motivation", percentage: 94 },
];

const experiences = [
  {
    title: "TravelNest",
    date: "Des 2024",
    description:
      "I developed a mobile-based online travel ticket booking application. The app allows users to browse destinations, view detailed information, and book tickets easily. It features intuitive navigation, secure payment options, and a user-friendly design to enhance the travel planning experience.",
  },
  {
    title: "FoodieNow",
    date: "May 2024",
    description:
      "Designing the layout and structure in developing this dynamic cafe site using the Bootstrap framework and CSS to make the website appearance more attractive and JavaScript for the front-end of the website, as well as storing all the data using PHP as the back end.",
  },
];

const educations = [
  {
    title: "Bachelor of Information Systems",
    date: "2022 - Now",
    institution: "SINGAPERBANGSA UNIVERSITY KARAWANG",
  },
  {
    title: "Mathematics and Natural Science",
    date: "2019 - 2022",
    institution: "PALIMANAN 1st STATE HIGH SCHOOL",
  },
];

const ExperienceSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <section className="bg-[#030014] text-gray-200 py-16" id="ExperienceSection">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <h1
              data-aos="zoom-in-up"
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0fcfef] to-[#16c79a] mb-6"
            >
              Skills & Experience
            </h1>
            <p data-aos="zoom-in-up" className="text-gray-400 mb-8">
              Advanced in designing a website and using framework to make it
              more interesting.
            </p>
            <h3 data-aos="zoom-in-up" className="text-2xl mb-6">
              My Skills
            </h3>
            <Carousel
              showArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={5000}
              stopOnHover
              className="carousel-wrapper"
            >
              {[0, 1].map((page) => (
                <div key={page} className="grid grid-cols-2 gap-8">
                  {skills
                    .slice(page * 6, (page + 1) * 6)
                    .map((skill, index) => (
                      <div key={index} className="p-4">
                        <div
                          data-aos="zoom-in-up"
                          className="flex justify-between items-center mb-2"
                        >
                          <span className="font-semibold">{skill.name}</span>
                          <span className="text-gray-400">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="bg-gray-800 w-full h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#0fcfef] to-[#16c79a] h-full"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </Carousel>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              textColor="inherit"
              className="mb-8 flex justify-center items-center"
              centered
              sx={{
                ".MuiTabs-indicator": {
                  background:
                    "linear-gradient(to right, #0fcfef, #16c79a)",
                  height: "3px",
                },
                ".MuiTab-root": {
                  color: "#a3a3a3",
                  fontWeight: "bold",
                  "&.Mui-selected": {
                    color: "white",
                    background:
                      "linear-gradient(to right, #0fcfef, #16c79a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                },
              }}
            >
              <Tab label="Experience" />
              <Tab label="Education" />
            </Tabs>
            {selectedTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                  <div key={index} data-aos="fade-up" className="space-y-2">
                    <h5 className="text-lg font-semibold">{exp.title}</h5>
                    <p className="text-sm text-teal-400">{exp.date}</p>
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
            {selectedTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educations.map((edu, index) => (
                  <div key={index} data-aos="fade-up" className="space-y-2">
                    <h5 className="text-lg font-semibold">{edu.title}</h5>
                    <p className="text-sm text-teal-400">{edu.date}</p>
                    <p className="text-sm text-gray-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
