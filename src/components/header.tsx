export default function Header() {
  return (
    <header className="p-6 bg-pink-900 text-white flex justify-between items-center">
      <h1 className="">My Portfolio</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#about" className="hover:text-pink-300">About</a></li>
          <li><a href="#skills" className="hover:text-pink-300">Skills</a></li>
          <li><a href="#experience" className="hover:text-pink-300">Experience</a></li>
          <li><a href="#recommendations" className="hover:text-pink-300">Recommendations</a></li>
          <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
