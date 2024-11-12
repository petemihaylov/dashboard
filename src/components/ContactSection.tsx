import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export const ContactSection: React.FC = () => (
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
        <Input placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </motion.form>
    </div>
  </section>
);
