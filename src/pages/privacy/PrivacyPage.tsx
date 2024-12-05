import React from "react";
import { Layout } from "../../common";

const PrivacyPage = () => (
  <Layout>
    <div className="flex flex-col items-start justify-start px-6 md:px-16 my-12 mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-start text-gray-800 md:text-3xl">
        Privacy Policy
      </h1>
      <p className="text-black text-sm leading-relaxed whitespace-normal text-left md:text-left">
        We value your privacy and are committed to being transparent about the
        data we collect and how it is used. This website uses{" "}
        <strong>Google Analytics</strong> to monitor website performance and
        improve user experience. Google Analytics utilizes cookies to collect
        data about your interactions with the site. This data is stored securely
        and helps us optimize our services.
      </p>
      <p className="text-black text-sm leading-relaxed whitespace-normal text-left mt-4 md:text-left">
        Additionally, cookies are used in the contact form to enhance
        functionality and ensure seamless communication. You can disable cookies
        through your browser settings; however, doing so may impact some website
        features.
      </p>
      <p className="text-black text-sm leading-relaxed whitespace-normal text-left mt-4 md:text-left">
        For more details about Google Analytics&apos; privacy practices, please
        visit
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-1"
        >
          Google Privacy Policy.
        </a>
      </p>
    </div>
  </Layout>
);

export default PrivacyPage;
