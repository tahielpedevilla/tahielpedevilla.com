import Link from "next/link"
import { Suspense } from "react"

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
		<header className="flex flex-row items-center justify-between fixed mx-auto container px-6 py-6 w-full left-0 right-0">
			<Link href="/" className="leading-[14.32px] tracking-tight pointer-events-none select-none">
				Tahiel Pedevilla
			</Link>
			<nav className="hidden flex-row space-x-0 md:flex gap-6">
				<Suspense fallback={null}>
					{Object.entries(navItems).map(([path, { name }]) => {
						return <NavItem key={path} path={path} name={name} />
					})}
				</Suspense>
			</nav>
		</header>
	)
}

function NavItem({ path, name }) {
	return (
		<a href={path} className="hover:underline underline-offset-[2px]">
			{name}
		</a>
	)
}
