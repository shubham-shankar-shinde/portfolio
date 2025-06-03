import { FaFacebook, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/profile.php?id=100035993253276",
      label: "Facebook",
    },
    {
      icon: <FaSquareXTwitter size={24} />,
      url: "https://x.com/Shubham23916820",
      label: "Twitter",
    },
    {
      icon: <FaInstagramSquare size={24} />,
      url: "https://www.instagram.com/s_h_u_b_h_a_m___8412/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn size={24} />,
      url: "https://www.linkedin.com/in/shubham-shinde8412",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100">
      <hr className="border-gray-200" />

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12">
        <div className="flex flex-col items-center justify-center">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="mt-8 mb-6">
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a
                href="#home"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Copyright Section */}
          <div className="w-full border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Shubham Portfolio. All rights
                reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <p className="text-sm text-gray-600">
                  Designed & Built by{" "}
                  <span className="text-blue-600 font-medium">
                    Shubham Shinde
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
