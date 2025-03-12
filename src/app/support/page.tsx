import React from "react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
const TransformSection = () => {
  return (
    <div className="bg-primary text-white text-center py-2 md:py-8">
      <h2 className="text-5xl font-bold mb-4">
        Ready to Transform Your Digital Presence?
      </h2>
      <p className="text-xl mb-6">
        Join hundreds of successful businesses that trust AdLantic for their
        digital marketing needs.
      </p>
      <button className="bg-white text-primary text-xl font-bold py-2 px-4">
        Schedule a Call 🤝
      </button>
    </div>
  );
};

const blogData = [
  {
    category: "Marketing",
    timeToRead: "5 min read",
    heading: "Digital Marketing Trends 2024",
    subHeading:
      "Explore the latest trends shaping the future of digital marketing.",
  },
  {
    category: "Case Study",
    timeToRead: "8 min read",
    heading: "Success Story: E-commerce Growth",
    subHeading: "How we helped an e-commerce client achieve 300% growth.",
  },
  {
    category: "Guide",
    timeToRead: "6 min read",
    heading: "Social Media Strategy Guide",
    subHeading: "Essential strategies for social media marketing success.",
  },
];

const Page = () => {
  return (
    <div className="px-2 md:px-12 py-2 md:py-8">
      <div className="py-2 md:py-8">
        <div className="border-4 border-primary text-center p-12">
          <h2 className="text-5xl md:text-7xl font-bold text-primary pb-8">
            Ready to Grow Your Business?
          </h2>
          <p className="text-2xl font-medium text-primary px-4 max-w-4xl mx-auto">
            Get in touch with us today for a free consultation and discover how
            we can help you achieve your digital marketing goals.
          </p>
        </div>
      </div>

      <div className="py-2 md:py-8">
        <ContactForm />
      </div>

      <div className="py-2 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            category={blog.category}
            timeToRead={blog.timeToRead}
            heading={blog.heading}
            subHeading={blog.subHeading}
          />
        ))}
      </div>
      <div className="py-2 md:py-8">
        <TransformSection />
      </div>
      <div className="py-2 md:py-8">
        <div className="border-4 border-primary text-center py-12 md:p-12">
          <h1 className="text-6xl md:text-8xl font-bold text-primary">
            AdLantic
          </h1>
        </div>
      </div>
      <div className="py-2 md:py-8">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
