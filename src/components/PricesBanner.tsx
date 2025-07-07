import React from 'react';

// 1. Define the type for a single pricing plan object.
// This acts as a blueprint for our data.
type PricingPlan = {
  name: string;
  price: number;
  features: string[];
  isFeatured: boolean;
};

// 2. Define the type for the CheckIcon's props.
// `className` is an optional string.
type CheckIconProps = {
  className?: string;
};

const CheckIcon = ({ className }: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// 3. Type the pricingPlans array.
// `PricingPlan[]` means "an array of PricingPlan objects".
// TypeScript will now warn you if any object in this array is missing a property
// or has a property with the wrong type.
const pricingPlans: PricingPlan[] = [
  {
    name: 'Essential',
    price: 225,
    features: [
      'Lorem Ipsum is simply',
      'Lorem Ipsum',
      'simply dummy text',
      'Lorem Ipsum is simply dummy text',
    ],
    isFeatured: false,
  },
  {
    name: 'Premium',
    price: 2225,
    features: [
      'Lorem Ipsum is simply',
      'Lorem Ipsum',
      'simply dummy text',
      'Lorem Ipsum is simply dummy text',
      'Lorem Ipsum is simply dummy text',
      'Lorem Ipsum is simply dummy text',
    ],
    isFeatured: true,
  },
  {
    name: 'Premium+',
    price: 5225,
    features: [
      'Lorem Ipsum is simply',
      'Lorem Ipsum',
      'simply dummy text',
      'Lorem Ipsum is simply dummy text',
      'Lorem Ipsum is simply dummy text',
      'Lorem Ipsum is simply dummy text',
      'Lorem Ipsum is simply dummy text',
      'Lorem Ipsum is simply dummy text',
      'Lorem Ipsum is simply dummy text',
    ],
    isFeatured: false,
  },
];

// 4. Define the type for the PricingCard's props.
// It expects one prop, `plan`, which must be a `PricingPlan` object.
type PricingCardProps = {
  plan: PricingPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  // Because `plan` is typed, TypeScript knows that `name` is a string,
  // `price` is a number, etc. You get great autocompletion here!
  const { name, price, features, isFeatured } = plan;

  const titleColor = 'text-[#E57944]';
  const featuredButtonClasses = 'bg-[#E57944] hover:bg-[#d16a3a]';
  const normalButtonClasses = 'bg-[#BDBDBD] hover:bg-gray-500';

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col w-full max-w-xs space-y-0">
      {/* Plan Name */}
      <div className="text-center">
        <h3 className={`font-semibold text-xl ${titleColor}`}>{name}</h3>
      </div>

      {/* Price */}
      <div className="flex justify-center items-baseline my-8 space-y-1">
        <span className="text-2xl font-bold text-gray-800">{price}</span>
        <span className="text-2xl font-bold text-gray-800 ml-2">Dollar</span>
        <span className="text-l text-gray-500 ml-1">/Day</span>
      </div>

      {/* Button */}
      <button
        className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-colors ${
          isFeatured ? featuredButtonClasses : normalButtonClasses
        }`}
      >
        {name}
      </button>

      {/* Features List */}
      <div className="mt-8 text-left w-full">
        <h4 className="font-bold text-md mb-4 text-gray-800">Facilities</h4>
        <ul className="space-y--3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="w-5 h-5 text-[#93C47D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-600 text-xs">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 5. Type the main component using React.FC (Functional Component).
// This component takes no props, so the type is simple.
const PricesBanner: React.FC = () => {
  return (
    <div className="bg-gray-50/50 min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricesBanner;