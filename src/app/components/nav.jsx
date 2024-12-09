'use client'
import Link from 'next/link'
import * as Avatar from "@radix-ui/react-avatar";
import React, { useState } from 'react'
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Nav() {
  const navLinks = [
    {
      title: "Photos",
      path: "/Photos",
    },
    {
      title: "Projects",
      path: "/Projects",
    },
    {
      title: "About Me",
      path: "/AboutMe",
    },
    {
      title: "Contact",
      path: "/Contact",
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-violet-400 text-black py-2 shadow-lg md:py-1 sm:py-0">
    <div className="container mx-auto px-4 py-2 flex items-center">
    <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle sm:w-fit">
			<Avatar.Image
				className="size-full rounded-[inherit] object-cover"
				src="https://scontent.cdninstagram.com/v/t51.2885-19/460538753_891143436217774_5535561969616032351_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=108&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=6KcFrXbLxVgQ7kNvgFdo_b_&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDuKW5HgJi4Xrm7uUDu7RUkHQdZDaE50BN1BJY9CGx7eQ&oe=675B407D"
				alt="Colm Tuite"
			/>
			<Avatar.Fallback
				className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
				delayMs={600}
			>
        Raina
			</Avatar.Fallback>
		</Avatar.Root>
      <Link href="/" className='px-10'>Home</Link>
      <div className='container mx-auto px-4 py-2 flex items-center justify-end'>
      <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
  </nav>
  )
}

export default Nav