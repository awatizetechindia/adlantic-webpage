import React from "react";

const BlogCard = ({
  category,
  timeToRead,
  heading,
  subHeading,
}: {
  category: string;
  timeToRead: string;
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex flex-col justify-between border-4 border-primary bg-white p-6 text-primary cursor-pointer">
      <div>
        <div className="w-full flex justify-between pb-4 text-gray-700">
          <div className="bg-primary text-white py-1 px-3">{category}</div>
          <div>{timeToRead}</div>
        </div>
        <h3 className="text-3xl font-bold mb-2">{heading}</h3>
        <p className="mb-4 font-medium text-xl">{subHeading}</p>
      </div>
      <a href="#" className="text-primary font-semibold text-lg">
        Read More →
      </a>
    </div>
  );
};

export default BlogCard;
