import React from "react";
import { Linkedin, Github, Instagram, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "Abdullah Faqih",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/abdullahfaqih27",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]"
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@faqqhh_27",
    icon: Instagram,
    url: "https://www.instagram.com/faqqhh_27?igsh=cHpkM28wM2xvNWtn",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@abdfqh27",
    icon: Github,
    url: "https://github.com/abdfqh27",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  }
];

const SocialLinks = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-teal-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            {/* Hover Gradient Background */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r ${link.gradient}`}
            />
            
            {/* Content Container */}
            <div className="relative flex items-center gap-4">
              {/* Icon Container */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                             group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-md">
                  <link.icon
                    className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
            </div>

            {/* External Link */}
            <ExternalLink
              className="relative w-5 h-5 text-gray-500 group-hover:text-white
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         transform group-hover:translate-x-0 -translate-x-1"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
