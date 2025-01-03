'use client'
import Link from 'next/link'
import * as Avatar from "@radix-ui/react-avatar";
import React, { useState } from 'react'
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';

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
    <div className="container mx-auto px-4 py-2 flex items-center justify-between">
      <Link href="/">
        <Avatar.Root className="inline-flex size-[50px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle sm:w-fit cursor-pointer">
          <Avatar.Image
            className="size-full rounded-[inherit] object-cover w-full h-full aspect-square"
            src="/Photos/DP.png"
            alt="Raina"
          />
          <Avatar.Fallback
            className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
            delayMs={600}
          >
            Raina
          </Avatar.Fallback>
        </Avatar.Root>
      </Link>
      <div className="hidden md:block">
        <ul className="flex flex-wrap justify-center space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                href={link.path}
                title={link.title}
                className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile-menu block md:hidden">
  {!navbarOpen ? (
    <button
      onClick={() => setNavbarOpen(true)}
      className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
    </button>
  ) : (
    <button
      onClick={() => setNavbarOpen(false)}
      className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white absolute top-4 right-4"
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
    </button>
  )}
</div>
{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
</div>
  </nav>
  )
}

export default Nav