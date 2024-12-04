import React from "react";
import { HiPhone, HiEnvelope } from "react-icons/hi2";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import config from "../../config/config";

const Footer = () => (
  <footer className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
        {/* Logo Section */}
        <div className="flex justify-center col-span-1">
          <img
            src={config.app.icon.light}
            alt={config.app.name}
            className="sm:h-[2rem] sm:w-[2rem] h-[1.3rem] w-[1.3rem] opacity-90"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 col-span-1 sm:col-span-2">
          {/* Contact Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="/working-hours"
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                Working Hours
              </a>
              <a
                href="/contacts"
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contacts
              </a>
              <a
                href="/prices"
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                Prices
              </a>
              <a
                href="/partners"
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                Partners
              </a>
            </nav>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@divingcenterarapya.com"
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                <HiEnvelope className="w-4 h-4" />
                <span>info@divingcenterarapya.com</span>
              </a>
              <a
                href="tel:+359888123456"
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                <HiPhone className="w-4 h-4" />
                <span>+359 888 123 456</span>
              </a>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <FaFacebook className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <FaInstagram className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
        © 2024 Diving Center Arapya. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
