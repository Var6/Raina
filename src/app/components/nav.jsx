import Link from 'next/link'
import * as Avatar from "@radix-ui/react-avatar";
import React from 'react'

function Nav() {
  return (
    <nav className="bg-violet-400 text-black py-2 shadow-lg md:py-1 sm:py-0">
    <div className="container mx-auto px-4 py-2 flex items-center">
    <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
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
      <button className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-60'>
      <span className="sr-only">Open main menu</span>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
      </button>
      <div className='hidden w-full md:block md:w-auto'>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            Photos
          </Link>
        </li>
        <li>
          <Link href="/">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contacts
          </Link>
        </li>
      </ul>
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav