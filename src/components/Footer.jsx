import { FaFacebook, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100035993253276"
                target="_blank"
              >
                {" "}
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/Shubham23916820" target="_blank">
                <FaSquareXTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/s_h_u_b_h_a_m___8412/"
                target="_blank"
              >
                <FaInstagramSquare size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-shinde8412"
                target="_blank"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy;2024 Your Company. All rights reserved.{" "}
              </p>
              <p className="text-sm">Supportive Partner 😘 SHUBHAM </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
