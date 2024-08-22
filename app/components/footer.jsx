import { Suspense } from "react"

const socialLinks = {
	"https://www.linkedin.com/in/tahiel-pedevilla/": {
		name: "LinkedIn",
	},
	"https://github.com/tahielpedevilla": {
		name: "GitHub",
	},
	"https://twitter.com/tahielpedevilla": {
		name: "X",
	},
}

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="border-t border-t-[#444444ba]">
			<div className="container mx-auto px-6 py-6 flex flex-col gap-4 lg:flex-row items-center justify-between">
				<div class="flex justify-center space-x-6 md:order-2">
					<a
						href="https://twitter.com/tahielpedevilla"
						class="hover:text-[#d3d3d3]/80 text-[#d3d3d3]"
					>
						<span class="sr-only">X</span>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							class="h-5 w-5"
							aria-hidden="true"
						>
							<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/tahiel-pedevilla"
						class="hover:text-[#d3d3d3]/80 text-[#d3d3d3]"
					>
						<span class="sr-only">Linkedin</span>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							class="h-5 w-5"
							aria-hidden="true"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
						</svg>
					</a>
				</div>
				<div className="text-[#d3d3d3] text-sm">
					<span className="font-semibold text-sm">Tahiel Pedevilla</span>{" "}
					<span>&copy; {year}</span>
				</div>
			</div>
		</footer>
	)
}

function FooterItem({ path, name }) {
	return (
		<a
			href={path}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:opacity-80 transition-all"
		>
			{name}
		</a>
	)
}
