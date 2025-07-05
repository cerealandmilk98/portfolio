// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 bg-gray-800 text-white flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">Brody.dev</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>
        <a href="#projects" className="hover:text-blue-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
