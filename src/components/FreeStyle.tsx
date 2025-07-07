import { FaWhatsapp } from "react-icons/fa";


export default function FreeStyle() { 
    return <div className="px-4 py-6 text-lg text-orange-500">
        <h1 className="text-3xl text-center mb-6">
            Wander Your Way - Your Adventure, Your Rules!
        </h1>
        <p className="text-sm text-center text-black font-bold">
            Dreaming of the perfect escape? Make it surf, safari, culture,  or a bit of everything—tell us what moves you, and we’ll  craft a journey that’s uniquely yours
        </p>
        <br />
        <div>
            <a
                href="/whatsapp"
                className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-600 transition-colors"
                >
                Whatsapp Now <FaWhatsapp className="inline ml-2" />
            </a>
            <a href="/email"
                className="ml-4 bg-white text-orange-500 px-6 py-3 rounded-md shadow-lg border border-orange-500 transition-colors">
                Email Us
            </a>
            <a href="/jay" className=""></a>

        </div>
        </div>;
};