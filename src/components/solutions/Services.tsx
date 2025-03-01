"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Service {
  title: string;
  items: string[];
  image: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="max-w-[1440px] mx-auto p-8">
      <h1 className="text-6xl font-black text-primary mb-12">
        Are You Looking For
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-primary">
        <div className="h-full flex flex-col justify-between px-5 py-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border-4 border-primary p-6 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group ${
                selectedService.title === service.title
                  ? "bg-primary text-white"
                  : ""
              }`}
              onClick={() => setSelectedService(service)}
            >
              <h2 className="text-3xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="aspect-square relative">
          <Image
            src={selectedService.image}
            alt={selectedService.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {selectedService.title}
              </h2>
              <div className="space-y-3">
                {selectedService.items.map((item, idx) => (
                  <p key={idx} className="text-xl">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="border-t-2 border-white/30 pt-4">
              <p className="text-lg">{selectedService.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
