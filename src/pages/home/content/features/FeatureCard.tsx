import cn from "classnames";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeatureCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  imgSrc: string;
  full?: boolean;
}

const FeatureCard = ({
  icon,
  title,
  description,
  imgSrc,
  full = false,
}: FeatureCardProps) => (
  <div className={cn("relative", full && "lg:row-span-2")}>
    <div className="absolute inset-px rounded bg-white" />
    <div className="relative flex h-full flex-col overflow-hidden rounded">
      <div className="px-8 pt-8 sm:px-10 sm:pt-10">
        <div className="flex items-center justify-center lg:justify-start mb-4">
          <FontAwesomeIcon icon={icon} className="text-black w-8 h-8" />
        </div>
        <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
          {title}
        </p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          {description}
        </p>
      </div>
      <div
        className={cn(
          "w-full grow",
          full
            ? "relative min-h-[30rem]"
            : "flex flex-1 items-center justify-center"
        )}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={imgSrc}
          alt={title}
        />
      </div>
    </div>
    <div className="pointer-events-none absolute inset-px rounded shadow ring-1 ring-black/5" />
  </div>
);

export default FeatureCard;
