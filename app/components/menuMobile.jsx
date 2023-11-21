"use client"

import { Suspense, useEffect, useState } from "react"

export default function MenuMobile({ navItems }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	function toggleMenuMobile() {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
		}
	}, [isMobileMenuOpen])

	return (
		<>
			<button
				className="w-8 h-8 rounded-full border border-[#ffffff6c] flex items-center md:hidden justify-center bg-transparent relative transition-colors ease-out"
				onClick={toggleMenuMobile}
			>
				<div
					className={`${
						isMobileMenuOpen ? "rotate-45 scale-110" : "rotate-0 translate-y-[-3.5px]"
					} w-[14px] h-[1.5px] bg-[#d3d3d3] absolute transition-transform duration-[.25s] ease-out`}
				/>
				<div
					className={`${
						isMobileMenuOpen ? "-rotate-45 scale-110" : "rotate-0 translate-y-[3.5px]"
					} w-[14px] h-[1.5px] bg-[#d3d3d3] absolute transition-transform duration-[.25s] ease-out`}
				/>
			</button>
			{isMobileMenuOpen && (
				<nav className="flex max-w-[100vw] bg-[#191919e5] fixed left-0 backdrop-blur-md mx-auto container px-6 py-6 right-0 bottom-0 top-[81px] z-50 flex-col h-[calc(100vh-81px)] font-medium md:hidden gap-6">
					<Suspense fallback={null}>
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<NavItemMobile
									toggleMenuMobile={toggleMenuMobile}
									key={path}
									path={path}
									name={name}
								/>
							)
						})}
					</Suspense>
				</nav>
			)}
		</>
	)
}

function NavItemMobile({ path, name, toggleMenuMobile }) {
	return (
		<a href={path} className="border-b border-[#ffffff24] py-2 text-xl" onClick={toggleMenuMobile}>
			{name}
		</a>
	)
}
