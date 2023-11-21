"use client"

import { Suspense } from "react"
import MenuMobile from "./menuMobile"

const NAV_ITEMS = {
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
		<header className="bg-[#191919e5] border-b md:border-none border-b-[#ffffff13] backdrop-blur-md z-30 fixed w-full left-0 right-0">
			<div className="container px-6 py-6 flex flex-row items-center justify-between mx-auto">
				<a href="/" className="font-semibold tracking-tight">
					Tahiel Pedevilla
				</a>
				<nav className="hidden font-medium flex-row space-x-0 md:flex gap-6">
					<Suspense fallback={null}>
						{Object.entries(NAV_ITEMS).map(([path, { name }]) => {
							return <NavItem key={path} path={path} name={name} />
						})}
					</Suspense>
				</nav>
				<MenuMobile navItems={NAV_ITEMS} />
			</div>
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
