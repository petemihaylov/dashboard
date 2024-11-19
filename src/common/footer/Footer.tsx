import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 py-12 flex">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">Diving Center Arapya</h3>
          <p className="text-sm text-muted-foreground">
            Your premier destination for scuba diving adventures and
            certification.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <a className="text-sm hover:underline" href="/services">
              Services
            </a>
            <a className="text-sm hover:underline" href="/gallery">
              Gallery
            </a>
            <a className="text-sm hover:underline" href="/contacts">
              Contact
            </a>
          </nav>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact Info</h3>
          <address className="text-sm text-muted-foreground not-italic">
            Arapya Beach
            <br />
            Tsarevo, Bulgaria
            <br />
            Phone: +359 888 123 456
            <br />
            Email: info@divingcenterarapya.com
          </address>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        © 2024 Diving Center Arapya. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
