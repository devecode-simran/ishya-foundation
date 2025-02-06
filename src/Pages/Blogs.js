import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Calendar & Clock icons
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PageHeader from '../Components/PageHeader';

import "../Styles/Blogs.css"; // Ensure styling is applied
import Blog1 from "../Images/Blog1.png";
import Blog2 from "../Images/Blog2.png"
import Blog3 from "../Images/Blog3.png"
import Blog4 from "../Images/Blog4.png"
import Blog5 from "../Images/Blog5.png"
import Blog6 from "../Images/Blog6.png"
import BlogHero from "../Images/bloghero.png"


// Sample Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    writer: "Disha Gupta",
    writerImg: "https://via.placeholder.com/30", // Replace with actual writer image
    date: "Jan 25, 2025",
    readTime: "5 min",
    image: Blog1, // Replace with blog image
    excerpt: "AI is rapidly transforming how we interact with technology, from smart assistants to self-driving cars...",
    link: "/blog/ai-future",
  },
  {
    id: 2,
    title: "Understanding the Power of Blockchain",
    writer: "Disha Gupta",
    writerImg: "https://via.placeholder.com/30",
    date: "Feb 2, 2025",
    readTime: "7 min",
    image: Blog2,
    excerpt: "Blockchain technology is revolutionizing industries, offering transparency, security, and decentralization...",
    link: "/blog/blockchain-power",
  },
  {
    id: 3,
    title: "React vs. Vue: Which One to Choose?",
    writer: "Disha Gupta",
    writerImg: "https://via.placeholder.com/30",
    date: "Feb 10, 2025",
    readTime: "6 min",
    image: Blog3,
    excerpt: "Both React and Vue.js are powerful front-end frameworks, but each has its unique advantages and use cases...",
    link: "/blog/react-vs-vue",
  },
  {
    id: 4,
    title: "React vs. Vue: Which One to Choose?",
    writer: "Disha Gupta",
    writerImg: "https://via.placeholder.com/30",
    date: "Feb 10, 2025",
    readTime: "6 min",
    image: Blog4,
    excerpt: "Both React and Vue.js are powerful front-end frameworks, but each has its unique advantages and use cases...",
    link: "/blog/react-vs-vue",
  },
  {
    id: 5,
    title: "React vs. Vue: Which One to Choose?",
    writer: "Disha Gupta",
    writerImg: "https://via.placeholder.com/30",
    date: "Feb 10, 2025",
    readTime: "6 min",
    image: Blog5,
    excerpt: "Both React and Vue.js are powerful front-end frameworks, but each has its unique advantages and use cases...",
    link: "/blog/react-vs-vue",
  },
  {
    id: 6,
    title: "React vs. Vue: Which One to Choose?",
    writer: "Disha Gupta",
    writerImg: "https://via.placeholder.com/30",
    date: "Feb 10, 2025",
    readTime: "6 min",
    image: Blog6,
    excerpt: "Both React and Vue.js are powerful front-end frameworks, but each has its unique advantages and use cases...",
    link: "/blog/react-vs-vue",
  },
  
];

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <PageHeader pageName="Blogs" breadcrumb="Home/Blogs" />
      <div className="blogs-header">
        <div className="header-text">
          <h2 className="header-title">PEN IT NOW</h2>
          <div className="header-line"></div>
          <p className="submit-btn">Submit Here</p> 
        </div>
        <div className="header-image">
          <img src={BlogHero} alt="Header" />
        </div>
      </div>
      <div className="blogs-container">
        {blogPosts.map((blog, index) => (
          <div
            key={blog.id}
            className={`blog-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <a href={blog.link} className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </a>
            <div className="blog-content">
              <a href={blog.link} className="blog-title">
                {blog.title}
              </a>
              <div className="blog-meta">
                <img src={blog.writerImg} alt={blog.writer} className="writer-img" />
                <span>{blog.writer}</span>
                <FaCalendarAlt className="icon" />
                <span>{blog.date}</span>
                <FaClock className="icon" />
                <span>{blog.readTime}</span>
              </div>
              <a href={blog.link} className="blog-excerpt">
                {blog.excerpt} 
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
