import React from 'react'
import * as Avatar from "@radix-ui/react-avatar";

function Footer() {
  return (
    <footer className="text-white body-font bg-blue-300">
    <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex gap-5">
		<Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
			<Avatar.Image
				className="size-full rounded-[inherit] object-cover"
				src="https://cf-st.sc-cdn.net/3d/render/33506036-99077208135_48-s5-v1.webp?trim=circle&scale=0&ua=2"
				alt="Colm Tuite"
			/>
			<Avatar.Fallback
				className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
				delayMs={600}
			>
				CT
			</Avatar.Fallback>
		</Avatar.Root>
        <span className="ml-3 text-xl mt-2 text-white">Raina Sinha</span>
      <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 RainaxSinha —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@rainasinha1609</a>
      </p>
      <span className="inline-flex  sm:ml-auto sm:mt-0 mt-4 border-2 border-black  sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer