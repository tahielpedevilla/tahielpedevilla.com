"use client"

import Link from "next/link"
import { Suspense, useState } from "react"

const navItems = {
	"/#work": {
		name: "Work",
	},
	"/#about": {
		name: "About",
	},
	"/#experience": {
		name: "Experience",
	},
	"/#contact": {
		name: "Contact",
	},
}

export default function Navbar() {
	return (
		<header className="flex flex-row bg-[#282828e5] border-b border-[#ffffff13] backdrop-blur-md z-30 items-center justify-between fixed mx-auto container px-6 py-6 w-full left-0 right-0">
			<Link href="/" className="font-semibold tracking-tight">
				Tahiel Pedevilla
			</Link>
			<nav className="hidden font-medium flex-row space-x-0 md:flex gap-6">
				<Suspense fallback={null}>
					{Object.entries(navItems).map(([path, { name }]) => {
						return <NavItem key={path} path={path} name={name} />
					})}
				</Suspense>
			</nav>
			<MenuMobile />
		</header>
	)
}

function NavItem({ path, name }) {
	return (
		<a href={path} className="hover:opacity-80">
			{name}
		</a>
	)
}

function MenuMobile() {
	const [isOpenMenuMobile, setisOpenMenuMobile] = useState(false)

	function toggleMenuMobile() {
		setisOpenMenuMobile(!isOpenMenuMobile)
	}
	return (
		<>
			<button
				className="w-8 h-8 rounded-full border border-[#ffffff6c] flex items-center md:hidden justify-center bg-transparent relative transition-colors ease-out"
				onClick={toggleMenuMobile}
			>
				<div
					className={`${ isOpenMenuMobile ? "rotate-45 scale-110" : "rotate-0 translate-y-[-3.5px]" } w-[14px] h-[1.5px] bg-[#d3d3d3] absolute transition-transform duration-[.25s] ease-out`}
				/>
				<div className={`${ isOpenMenuMobile ? "-rotate-45 scale-110" : "rotate-0 translate-y-[3.5px]" } w-[14px] h-[1.5px] bg-[#d3d3d3] absolute transition-transform duration-[.25s] ease-out`}/>
			</button>
			{isOpenMenuMobile && (
				<nav className="flex max-w-[100vw] bg-[#282828e5] fixed left-0 backdrop-blur-md mx-auto container px-6 py-6 right-0 bottom-0 top-[81px] z-50 flex-col h-[calc(100vh-81px)] font-medium md:hidden gap-6">
					<Suspense fallback={null}>
						{Object.entries(navItems).map(([path, { name }]) => {
							return <NavItemMobile key={path} path={path} name={name} />
						})}
					</Suspense>
				</nav>
			)}
		</>
	)
}

function NavItemMobile({ path, name }) {
	return (
		<a href={path} className="border-b border-[#ffffff24] py-2 text-xl">
			{name}
		</a>
	)
}
