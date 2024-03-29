import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [navbarVisible, SetNavbarVisible] = useState(false);

  return (
    <>
      {/* mobile navbar */}
      <div className="w-full h-auto  fixed top-0    z-10 md:hidden flex flex-row justify-center bg-clip-padding bg-blue-400 backdrop-filter backdrop-blur-md bg-opacity-20">
        <div
          className="flex flex-col  gap-1 justify-center absolute left-0 inset-y-0 "
          onClick={() => {
            SetNavbarVisible(!navbarVisible);
          }}
        >
          <span className="w-10 h-[3px] bg-black rounded-full"></span>
          <span className="w-10 h-[3px] bg-black rounded-full"></span>
          <span className="w-10 h-[3px] bg-black rounded-full"></span>
        </div>

        <Image
          src="/logo.png"
          alt="Creativo Code"
          className="w-40 h-24 self-center justify-items-end"
          width="200"
          height="100"
        />
      </div>

      <nav
        className=" h-screen w-full flex-col md:hidden fixed top-0 "
        style={{ display: navbarVisible ? 'flex' : 'none' }}
      >
        <ul className="flex flex-col gap-10 items-center justify-center h-full w-full bg-white">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/">Join with Us</Link>
          </li>
          <li>
            <Link href="/">Store</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop navbar */}

      <nav className="hidden md:flex flex-row justify-around items-center px-8 border-b fixed top-0 w-full h-24 bg-clip-padding bg-blue-400 backdrop-filter backdrop-blur-md bg-opacity-20">
        <Image
          src="/logo.png"
          alt="Creativo Code"
          className="w-40 h-24 self-center justify-items-end"
          width="200"
          height="100"
        />
        <ul className="flex flex-row gap-6">
          <li className="py-2 px-1  bg-red-100">
            <Link href="#home">Home</Link>
          </li>
          <li className="py-2 px-1  bg-red-100">
            <Link href="/">About Us</Link>
          </li>
          <li className="py-2 px-1  bg-red-100">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="py-2 px-1 bg-red-100">
            <Link href="/">Contact Us</Link>
          </li>
          <li className="py-2  px-1 bg-red-100">
            <Link href="/">Join with Us</Link>
          </li>
          <li className="py-2 px-1  bg-red-100">
            <Link href="/">Store</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
