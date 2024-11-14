import React from "react";
const PartnersSection = () => {
    // Inline style object for the animation
    const scrollAnimation = {
        display: 'flex',
        gap: '2rem', // Space between logos (you can adjust this)
        animation: 'scroll 15s linear infinite',
    };
    
    // Keyframes animation in style tag
    const keyframesStyle = {
        '@keyframes scroll': {
        '0%': {
            transform: 'translateX(0)',
        },
        '100%': {
            transform: 'translateX(-100%)',
        },
        },
    };
    
    return (
        <>
        <style>
            {`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
            `}
        </style>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold text-gray-900">
                Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 relative overflow-hidden">
                {/* Flex container with animation applied via inline styles */}
                <div style={scrollAnimation}>
                <img
                    alt="Transistor"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="Reform"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="Tuple"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="SavvyCal"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="Statamic"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                {/* Repeat logos for continuous scroll */}
                <img
                    alt="Transistor"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="Reform"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="Tuple"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="SavvyCal"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                <img
                    alt="Statamic"
                    src="https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg"
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                />
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
      
  export default PartnersSection;