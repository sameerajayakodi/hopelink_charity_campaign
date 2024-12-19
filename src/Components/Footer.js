import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import mastercard from "../assets/images/card.png";
import paypal from "../assets/images/paypal.png";
import shield from "../assets/images/shield.png";
import visa from "../assets/images/visa.png";

function Footer() {
  return (
    <footer className="bg-[#2C1C18] text-gray-300 py-10 mt-auto">
      <div className="container flex flex-col items-center justify-between px-8 mx-auto md:flex-row md:items-start">
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="mb-4 text-lg font-semibold text-white">
            What is hopelink?
          </h3>
          <p className="mb-6">
            hopelink is a secure donation platform that connects donors with
            impactful causes. Create, manage, and track campaigns easily while
            ensuring transparent transactions and real-time updates to drive
            meaningful change.
          </p>
          <div className="flex justify-center space-x-4 md:justify-start">
            <img src={visa} alt="Visa" className="h-10" />
            <img src={mastercard} alt="MasterCard" className="h-10" />
            <img src={paypal} alt="PayPal" className="h-10" />
            <img src={shield} alt="Norton" className="h-8" />
          </div>
        </div>

        <div className="mt-8 text-center md:text-right md:w-1/2 md:mt-0">
          <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/campaigns" className="hover:text-white">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/help-center" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/support-desk" className="hover:text-white">
                Support Desk
              </Link>
            </li>
          </ul>
          <div className="flex justify-center mt-6 space-x-4 md:justify-end">
            <a
              href="https://facebook.com"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://youtube.com"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-8 text-center text-gray-400 border-t border-gray-700">
        <p>© 2024 hopelink. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
