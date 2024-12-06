import {
  faWater,
  faFish,
  faVest,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";

const BentoSection = () => (
  <div className="py-20">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-base font-semibold text-blue-600">
        Dive Into Adventure
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Experience the Magic of the Ocean
      </p>

      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <FeatureCard
          icon={faCertificate}
          title="Professional Training"
          description="Learn from certified instructors with years of experience in both recreational and technical diving."
          imgSrc="https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80"
          full
        />
        <FeatureCard
          icon={faFish}
          title="Marine Life"
          description="Discover vibrant coral reefs and encounter fascinating marine species in their natural habitat."
          imgSrc="https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={faVest}
          title="Safety First"
          description="Top-quality equipment and strict safety protocols ensure a secure diving experience."
          imgSrc="https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={faWater}
          title="Stunning Dive Sites"
          description="Explore breathtaking underwater locations, from vibrant reefs to mysterious wrecks."
          imgSrc="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?auto=format&fit=crop&q=80"
          full
        />
      </div>
    </div>
  </div>
);

export default BentoSection;
