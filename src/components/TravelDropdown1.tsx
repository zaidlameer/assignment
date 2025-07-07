
interface TravelDropDownProps {
    type: 'travel' | 'location';
}

export default function TravelDropdown({type}: TravelDropDownProps) {
    if(type == 'travel') {
        return (
            <div className="bg-gray-100 p-4">
                <h2 className="text-lg font-semibold mb-2">Travel Type</h2>
                <div className="flex gap-2 overflow-x-auto">
                {['Surf', 'Hiking', 'Up Country'].map((item) => (
                    <button key={item} className="px-3 py-1 bg-white shadow rounded-full text-sm">
                    {item}
                    </button>
                ))}
                </div>
            </div>
        );
    }
    if(type == 'location') {
        return (
            <div className="bg-gray-100 p-4">
                <h2 className="text-lg font-semibold mb-2">Location</h2>
                {[
                { province: 'Southern Province', locations: ['Galle', 'Mathara', 'Surfing', 'Hambanthota', 'Udugama'] },
                { province: 'Western Province', locations: ['Galle', 'Mathara', 'Surfing', 'Hambanthota', 'Udugama'] },
                { province: 'Northern Province', locations: ['Galle', 'Mathara', 'Surfing', 'Hambanthota', 'Udugama'] },
                ].map((section) => (
                <div key={section.province} className="mb-3">
                    <h3 className="text-sm font-medium text-orange-700 mb-1">{section.province}</h3>
                    <div className="flex flex-wrap gap-2">
                    {section.locations.map((loc) => (
                        <button key={loc} className="px-3 py-1 bg-white shadow rounded-full text-sm">
                        {loc}
                        </button>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        );
    }   

    return null; // Fallback if type is not recognized

};