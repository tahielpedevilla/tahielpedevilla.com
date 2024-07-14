import { forwardRef, Suspense, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function MenuMobile({ navItems }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const menuRef = useRef(null)
	const navItemsRef = useRef([])

	function toggleMenuMobile() {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [isMobileMenuOpen])

	useGSAP(() => {
		if (isMobileMenuOpen) {
			gsap.to(menuRef.current, {
				opacity: 1,
				duration: 0.3,
				ease: "power2.out",
			})
			gsap.from(navItemsRef.current, {
				y: 20,
				opacity: 0,
				stagger: 0.1,
				duration: 0.4,
				ease: "power2.out",
			})
		} else {
			gsap.to(menuRef.current, {
				opacity: 0,
				duration: 0.3,
				ease: "power2.in",
			})
		}
	}, [isMobileMenuOpen])

	return (
		<>
			<button
				className="w-8 h-8 rounded-full border border-[#404040] flex items-center md:hidden justify-center bg-transparent relative transition-colors ease"
				onClick={toggleMenuMobile}
			>
				<div
					className={`${
						isMobileMenuOpen
							? "rotate-45 scale-110"
							: "rotate-0 translate-y-[-3.5px]"
					} w-[14px] h-[1.5px] bg-[#d3d3d3] absolute transition-transform duration-300 ease`}
				/>
				<div
					className={`${
						isMobileMenuOpen
							? "-rotate-45 scale-110"
							: "rotate-0 translate-y-[3.5px]"
					} w-[14px] h-[1.5px] bg-[#d3d3d3] absolute transition-transform duration-300 ease`}
				/>
			</button>
			<nav
				ref={menuRef}
				className={`max-w-[100vw] fixed left-0 w-full mx-auto container px-6 py-6 right-0 bottom-0 top-[81px] flex-col h-[calc(100vh-81px)] font-medium md:hidden bg-[#0c0c0cb1]`}
			>
				<div className="relative flex flex-col gap-6">
					<Suspense fallback={null}>
						{Object.entries(navItems).map(([path, { name }], index) => (
							<NavItemMobile
								key={path}
								path={path}
								name={name}
								toggleMenuMobile={toggleMenuMobile}
								ref={(el) => (navItemsRef.current[index] = el)}
							/>
						))}
					</Suspense>
				</div>
			</nav>
		</>
	)
}

const NavItemMobile = forwardRef(({ path, name, toggleMenuMobile }, ref) => {
	return (
		<a
			href={path}
			className="border-b border-[#ffffff24] py-2 text-xl"
			onClick={toggleMenuMobile}
			ref={ref}
		>
			{name}
		</a>
	)
})

NavItemMobile.displayName = "NavItemMobile"
