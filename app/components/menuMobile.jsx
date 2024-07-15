import { forwardRef, Suspense, useEffect, useState } from "react"

export default function MenuMobile({ navItems }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(prevState => !prevState)
	}, [])
	
	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
		
		return () => {
			document.body.style.overflow = "auto"
		};
	}, [isMobileMenuOpen])

	return (
		<>
			<button
				className="w-8 h-8 rounded-full border border-[#404040] flex items-center md:hidden justify-center bg-transparent relative transition-colors ease"
				onClick={toggleMobileMenu}
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
			{isMobileMenuOpen && (
				<nav
					className={`max-w-[100vw] fixed left-0 w-full mx-auto container px-6 py-6 right-0 bottom-0 top-[81px] flex-col h-[calc(100vh-81px)] font-medium md:hidden bg-[#0c0c0cdb]`}
				>
					<div className="relative flex flex-col gap-6">
						<Suspense fallback={null}>
							{Object.entries(navItems).map(([path, { name }], index) => (
								<NavItemMobile
									key={path}
									path={path}
									name={name}
									toggleMobileMenu={toggleMobileMenu}
								/>
							))}
						</Suspense>
					</div>
				</nav>
			)}
		</>
	)
}

const NavItemMobile = forwardRef(({ path, name, toggleMobileMenu }) => {
	return (
		<a
			href={path}
			className="border-b font-semibold border-[#ffffff24] py-2 text-xl"
			onClick={toggleMobileMenu}
		>
			{name}
		</a>
	)
})

NavItemMobile.displayName = "NavItemMobile"
