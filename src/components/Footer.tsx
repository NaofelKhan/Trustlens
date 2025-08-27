import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const outfitbold = Outfit({ subsets: ['latin'], weight: '500' });


const Footer = () => (
  <footer className="bg-gradient-to-t from-[#e1c7fa] to-[#ffffff] w-full">
    <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-between items-start px-8 pt-8 pb-4">
      {/* Brand Section */}
      <div className="mb-10 md:mb-0">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Trustlens" className="w-12 h-12"/>
          <span className={`${outfitbold.className} text-3xl`}>Trustlens</span>
        </div>
        <p className={`mt-4 p-2 text-sm text-gray-600 max-w-[250px] mb-20 ${montserrat.className}`}>
          AI-powered product review analysis and price comparison platform.
        </p>
      </div>
      {/* Links Section */}
      <div className="flex flex-col md:flex-row gap-16 w-full justify-end">
        <div className="mb-10">
          <h3 className={`font-semibold text-3xl mb-6 ${outfitbold.className}`}>Features</h3>
          <ul className={`space-y-4 text-gray-700 text-md font-light ${montserrat.className}`}>
            <li>Smart Search</li>
            <li>Price Comparison</li>
            <li>Review Analysis</li>
            <li>Price Alerts</li>
          </ul>
        </div>
        <div>
          <h3 className={`font-semibold text-3xl mb-6 ${outfitbold.className}`}>Company</h3>
          <ul className={`space-y-4 text-gray-700 text-md font-light ${montserrat.className}`}>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h3 className={`font-semibold text-3xl mb-6 ${outfitbold.className}`}>Support</h3>
          <ul className={`space-y-4 text-gray-700 text-md font-light ${montserrat.className}`}>
            <li>Help Center</li>
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full mx-auto border-t border-white"></div>
    <div className={`bg-[#ebd6ff] text-center py-10 text-gray-700 text-sm ${montserrat.className}`}>
      2025 Trustlens. All Right Reserved
    </div>
  </footer>
);

export default Footer;
