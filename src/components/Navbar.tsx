const FloatingNavbar: React.FC = () => (
  <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-10/12 flex justify-between items-center px-2 py-2 rounded-full bg-white/25 backdrop-blur-xs shadow-lg z-50">
    <div className="flex justify-center items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8"/>
        <div className="ml-2 text-gray-900 font-semibold text-center">Trustlens</div>
    </div>
    <div className="space-x-4">
        <a className="text-white font-semibold hover:text-blue-500 transition" href="#home">
        Home
        </a>
        <a className="text-white font-semibold hover:text-blue-500 transition" href="#about">
        About
        </a>
        <a className="text-white font-semibold hover:text-blue-500 transition" href="#services">
        Services
        </a>
        <a className="text-white font-semibold hover:text-blue-500 transition" href="#contact">
        Contact
        </a>
    </div>    
    <div className="flex items-center space-x-4">
        <h2>Login</h2>
        <button className="bg-[#701CF5] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
            Register
        </button>
    </div>
  </nav>
);

export default FloatingNavbar;



