import React from "react";
import ContactsSection from "./content/ContactsSection";
import { Layout } from "../../common";

const ContactsPage = () => (
  <Layout transparent>
    <div className="flex items-center justify-center">
      <ContactsSection />
    </div>
  </Layout>
);

export default ContactsPage;
