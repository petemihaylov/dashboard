import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../../../components/Card";

type Service = {
  title: string;
  description: string;
  link: string;
};

interface Props {
  services: Service[];
}

const ServicesSection = ({ services }: Props) => (
  <section id="services" className="py-24 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
