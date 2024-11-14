import React from "react";
import { Button, Input, Textarea } from "@headlessui/react";
import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
        Contact Us
      </h2>
      <motion.form
        className="max-w-[500px] mx-auto space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Input placeholder="Name" className="data-[hover]:shadow" />
        <Input type="email" placeholder="Email" />
        <Textarea
          placeholder="Message"
          className="border w-full data-[hover]:shadow"
        />
        <Button
          type="submit"
          className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 w-full"
        >
          Send Message
        </Button>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
