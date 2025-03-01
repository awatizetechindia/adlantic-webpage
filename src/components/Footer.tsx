import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Our Services Section */}
        <div className="border-4 border-primary p-8">
          <h3 className="text-4xl font-black text-primary pb-6">
            Our Services
          </h3>
          <ul className="space-y-4">
            {[
              "Brand Awareness",
              "Performance Marketing",
              "Social Media Marketing",
              "Email Marketing",
              "Content Marketing",
            ].map((service, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="text-primary hover:text-blue-800 transition-colors text-2xl font-medium"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="border-4 border-primary p-8">
          <h3 className="text-5xl font-black text-primary pb-6">Quick Links</h3>
          <ul className="space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              {
                name: "Linkedin",
                path: "https://www.linkedin.com/company/adlanticmedia/posts/?feedView=all",
              },
              { name: "Contact Us", path: "/support" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-primary hover:text-blue-800 transition-colors text-2xl font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources & Contact Section */}
        <div className="space-y-2">
          <div className="border-4 border-primary p-8">
            <h3 className="text-4xl font-bold text-primary pb-6">Resources</h3>
            <ul className="space-y-1">
              {[
                { name: "Blog", path: "/blog" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Success Stories", path: "/success-stories" },
              ].map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.path}
                    className="text-primary hover:text-blue-800 transition-colors text-lg font-medium"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary p-8 text-white">
            <h3 className="text-4xl font-bold pb-2">Contact Us</h3>
            <p className="text-lg pb-1">Business@adlantic.in</p>
            <p className="text-base">
              3rd Floor, Landmark Cyber Park, Gurugram, Haryana 122002
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
