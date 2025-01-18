import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("https://formspree.io/f/xpwwllan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#16c79a",
          timer: 2000,
          timerProgressBar: true,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#16c79a",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact" className="min-h-screen bg-[#030014] text-gray-200 py-16">
      <div className="text-center mb-8">
        <h1
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0fcfef] to-[#16c79a]"
          data-aos="fade-down"
        >
          Contact Me
        </h1>
        <p className="text-slate-400 mt-4" data-aos="fade-up">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-[45%_55%] gap-12">
        {/* Contact Form */}
        <div
          data-aos="fade-right"
          className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl p-6"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0fcfef] to-[#16c79a]">
                Get in Touch
              </h2>
              <p className="text-gray-400">
                Have something to discuss? Send me a message and let's talk.
              </p>
            </div>
            <Share2 className="w-8 h-8 text-[#16c79a] opacity-50" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 p-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-[#16c79a]"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 p-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-[#16c79a]"
                required
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-12 p-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-[#16c79a]"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0fcfef] to-[#16c79a] text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        {/* Comment Section */}
        <div
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-xl"
          data-aos="fade-left"
        >
          <Komentar />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
