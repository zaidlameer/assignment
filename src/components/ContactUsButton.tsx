export default function ContactUsButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="/contact-us"
        className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        Contact Us Now
      </a>
    </div>
  );
}
