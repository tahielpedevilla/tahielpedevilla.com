import { Space_Grotesk } from "next/font/google"
import "./globals.css"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
	title: "Tahiel Pedevilla",
	description:
		"Tahiel Pedevilla is a Web Developer specializing in Frontend Development and Webflow Development.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="antialiased scroll-smooth">
			<body className={`${spaceGrotesk.className}`}>
				<Navbar />
				{children}
				<Footer />
				<svg className="fixed top-0 left-0 z-50 w-full h-screen opacity-20 pointer-events-none transform translate-y-0 filter contrast-120 brightness-120">
					<filter id="noise">
						<feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4"></feTurbulence>
						<feColorMatrix type="saturate" values="0"></feColorMatrix>
					</filter>
					<rect width="100%" height="100%" filter="url(#noise)"></rect>
				</svg>
			</body>
		</html>
	)
}
