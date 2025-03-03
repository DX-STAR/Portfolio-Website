import React from "react";
import { X } from "lucide-react";

const BuyMeCoffee = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        {/* Coffee GIF & QR Code */}
        <div className="text-center">
          <img src="public\Assets\Support Me Sticker by Buy Me a Coffee.gif" alt="Coffee GIF" className="w-32 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Buy Me a Coffee! ☕
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Scan the QR code below to support my work.
          </p>
          <img src="public\Assets\qrcode.jpg" alt="QR Code" className="w-48 mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
