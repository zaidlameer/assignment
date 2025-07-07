// components/SplashScreen.tsx
import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* You can replace this with your logo or animation */}
      <div className="text-center">
        <Image
          src="/images/logo.svg" // or any image you prefer
          alt="Gypcey Logo"
          width={120}
          height={120}
          className="mx-auto mb-4 animate-pulse"
        />
      </div>
    </div>
  );
}
