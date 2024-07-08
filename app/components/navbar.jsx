"use client"

import { useRef } from "react"
import { Suspense } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import MenuMobile from "./menuMobile"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const navItems = {
	"/#work": {
		name: "Work",
	},
	"/#about": {
		name: "About",
	},
	"/#contact": {
		name: "Contact",
	},
}

export default function Navbar() {
	const headerRef = useRef(null)

	useGSAP(() => {
		const header = headerRef.current

		const showAnim = gsap
			.from(header, {
				yPercent: -100,
				paused: true,
				duration: 0.3,
			})
			.progress(1)

		const changeHeaderColor = gsap.to(header, {
			backgroundColor: "#0c0c0cba",
			borderBottomColor: "#444444ba",
			paused: true,
			duration: 0.2,
		})

		ScrollTrigger.create({
			start: "top top",
			end: "max",
			onUpdate: (self) => {
				self.direction === -1 ? showAnim.play() : showAnim.reverse()

				if (self.progress > 0.05) {
					changeHeaderColor.play()
				} else {
					changeHeaderColor.reverse()
				}
			},
		})
	}, [])

	return (
		<header
			ref={headerRef}
			className="bg-transparent border-b border-b-transparent backdrop-blur-lg z-30 fixed top-0 w-full left-0 right-0 transition-colors duration-300"
		>
			<div className="container px-6 py-6 flex flex-row items-center justify-between mx-auto">
				<a href="/" className="font-semibold">
					Tahiel Pedevilla
				</a>
				<nav className="hidden font-medium flex-row space-x-0 md:flex gap-6">
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
		<a href={path} className="hover:opacity-80">
			{name}
		</a>
	)
}
