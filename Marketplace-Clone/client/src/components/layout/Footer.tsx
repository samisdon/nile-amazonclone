export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex flex-col w-full mt-8">
      {/* Back to top */}
      <button 
        onClick={handleScrollToTop}
        className="bg-[#37475A] hover:bg-[#485769] text-white py-4 text-sm font-medium w-full transition-colors"
      >
        Back to top
      </button>

      {/* Main Footer Links */}
      <div className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base mb-2 text-white">Get to Know Us</h3>
            <a href="#" className="text-gray-300 hover:underline text-sm">Careers</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Blog</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">About Nile</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Investor Relations</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Nile Devices</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Nile Science</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base mb-2 text-white">Make Money with Us</h3>
            <a href="#" className="text-gray-300 hover:underline text-sm">Sell products on Nile</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Sell on Nile Business</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Sell apps on Nile</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Become an Affiliate</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Advertise Your Products</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Self-Publish with Us</a>
          </div>

          <div className="hidden md:flex flex-col gap-2">
            <h3 className="font-bold text-base mb-2 text-white">Payment Products</h3>
            <a href="#" className="text-gray-300 hover:underline text-sm">Nile Business Card</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Shop with Points</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Reload Your Balance</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Nile Currency Converter</a>
          </div>

          <div className="hidden md:flex flex-col gap-2">
            <h3 className="font-bold text-base mb-2 text-white">Let Us Help You</h3>
            <a href="#" className="text-gray-300 hover:underline text-sm">Nile and COVID-19</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Your Account</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Your Orders</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Shipping Rates & Policies</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Returns & Replacements</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Manage Your Content and Devices</a>
            <a href="#" className="text-gray-300 hover:underline text-sm">Help</a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#131A22] text-white py-8 border-t border-[#3a4553]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-1">
             <span className="font-display font-bold text-lg tracking-tighter text-white">nile</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-300">
            <a href="#" className="hover:underline">Conditions of Use</a>
            <a href="#" className="hover:underline">Privacy Notice</a>
            <a href="#" className="hover:underline">Consumer Health Data Privacy Disclosure</a>
            <a href="#" className="hover:underline">Your Ads Privacy Choices</a>
          </div>
          <span className="text-xs text-gray-400">© 1996-2024, Nile.com, Inc. or its affiliates</span>
        </div>
      </div>
    </footer>
  );
}
