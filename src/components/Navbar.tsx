import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Image 
            src="/marvel.png" 
            alt="Marvel Logo" 
            width={100}
            height={100}
            className='cursor-pointer'
            />

        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Início
          </a>
          <a href="#" className="hover:underline">
            Personagens
          </a>
        </nav>
      </div>
    </header>
  );
}
