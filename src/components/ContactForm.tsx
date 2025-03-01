"use client";
import React, { useState } from "react";
import Image from "next/image";

// Input component
const InputField = ({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-4 border-4 font-medium text-2xl border-white bg-primary text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
      required={required}
    />
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    website: "",
    mobileNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-primary p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <InputField
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <InputField
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <InputField
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />
        <InputField
          name="website"
          placeholder="Website (if any)"
          value={formData.website}
          onChange={handleChange}
        />
        <InputField
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          type="tel"
          required
        />
        <button
          type="submit"
          className="w-full text-2xl bg-white text-primary py-4 font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2"
        >
          Send Message
          <Image
            height={50}
            width={50}
            src="/adlantic.svg"
            alt="Send"
            className="w-6 h-6"
          />
        </button>
      </div>

      <p className="text-white font-semibold text-xl text-center mt-4">
        By submitting, you agree to our Terms and Privacy Policy.
      </p>
    </form>
  );
};

export default ContactForm;
