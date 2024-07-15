"use client"

import { useRef } from "react"
import { Suspense } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MenuMobile from "./menuMobile"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const navItems = {
	"/#work": {
		name: "Work",
	},
	"/#about": {
		name: "About",
	},
	"/#faq": {
		name: "FAQ",
	},
	"/#contact": {
		name: "Contact",
	},
}

export default function Navbar() {
	return (
		<header className="bg-[#0c0c0cdb] border-b border-b-[#444444ba] z-30 sticky top-0 w-full left-0 right-0 transition-colors duration-300">
			<div className="container px-6 py-6 flex flex-row items-center justify-between mx-auto">
				<Link
					href="/"
					className="font-semibold"
				>
					Tahiel Pedevilla
				</Link>
				<nav className="hidden font-medium flex-row space-x-0 md:flex gap-8">
					<Suspense fallback={null}>
						{Object.entries(navItems).map(([path, { name }]) => {
							return <NavItem key={path} path={path} name={name} />
						})}
					</Suspense>
				</nav>
				<MenuMobile navItems={navItems} />
			</div>
		</header>
	)
}

function NavItem({ path, name }) {
	return (
		<a href={path} className="hover:opacity-80 font-semibold transition-all">
			{name}
		</a>
	)
}
