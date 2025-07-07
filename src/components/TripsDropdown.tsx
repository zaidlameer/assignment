import Image from 'next/image';

export default function TripsDropdownContent() {
  const travelTypes = ['Surf', 'Hiking', 'Up country', 'Surf', 'Hiking', 'Up country'];

  return (
    <>
      {/* Column 1: Info */}
      <div className="flex flex-col text-sm gap-2 w-1/2">
        <span className="text-blue-600 font-medium">South - west | November - March</span>
        <span>East | April - October</span>
        <span>Perfect Anytime | Year Round</span>
        <span>Special Escapes</span>
        <span>Offbeat | Hidden gems</span>
        <span className="text-blue-700 mt-4">
          Sun - Drenched shores, Rolling waves, pure island energy on the east coast
        </span>
      </div>

      {/* Column 2: Travel Type Images */}
      <div className="flex flex-wrap gap-3 w-1/2">
        {travelTypes.map((type, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-xs w-20 cursor-pointer hover:opacity-80 transition"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border">
              <Image
                src={`/images//${type.toLowerCase().replace(' ', '-')}.png`}
                alt={type}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="mt-1">{type}</span>
          </div>
        ))}
      </div>
    </>
  );
}
