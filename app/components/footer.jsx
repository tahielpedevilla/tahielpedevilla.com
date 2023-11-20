import Link from "next/link"
import { Suspense } from "react"

const footerItems = {
	"https://twitter.com/tahielpedevilla": {
		name: "X",
	},
	"https://www.linkedin.com/in/tahiel-pedevilla/": {
		name: "LinkedIn",
	},
	"https://github.com/tahielpedevilla": {
		name: "GitHub",
	},
}

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-6 py-6">
			<nav className="flex flex-row items-center relative gap-6">
				<Suspense fallback={null}>
					{Object.entries(footerItems).map(([path, { name }]) => {
						return <FooterItem key={path} path={path} name={name} />
					})}
				</Suspense>
			</nav>
			<p className="text-neutral-200 leading-[14.32px] tracking-tight pointer-events-none select-none">
				Tahiel Pedevilla &copy; {year}
			</p>
		</footer>
	)
}

function FooterItem({ path, name }) {
	return (
		<a href={path} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-[2px]">
			{name}
		</a>
	)
}
