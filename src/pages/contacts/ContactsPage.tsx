import React from "react";
import ContactSection from "./content/ContactSection";
import { Layout } from "../../common";

const ContactsPage = () => (
  <Layout transparent>
    <div className="flex min-h-screen items-center justify-center">
      <ContactSection />
    </div>
  </Layout>
);

export default ContactsPage;
