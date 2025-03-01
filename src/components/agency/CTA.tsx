import React from "react";

const ReadyToGrow = () => {
  return (
    <div className="border-4 border-primary text-center p-12">
      <h2 className="text-7xl font-bold text-primary pb-8">
        Ready to Grow Your Business?
      </h2>
      <p className="text-2xl font-medium text-primary px-4 max-w-4xl mx-auto">
        Get in touch with us today for a free consultation and discover how we
        can help you achieve your digital marketing goals.
      </p>
    </div>
  );
};

const AdLanticLogo = () => {
  return (
    <div className="border-4 border-primary text-center p-12">
      <h1 className="text-8xl font-bold text-primary">AdLantic</h1>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="space-y-12">
      <ReadyToGrow />
      <AdLanticLogo />
    </div>
  );
};
export default CTA;
