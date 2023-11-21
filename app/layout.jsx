import { Space_Grotesk } from "next/font/google"
import "./globals.css"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
	title: "Tahiel Pedevilla",
	description:
		"Tahiel Pedevilla is a Web Developer specializing in Frontend Development and Webflow Development.",
	openGraph: {
		title: "Tahiel Pedevilla",
		description: "Tahiel Pedevilla is a Web Developer specializing in Frontend Development and Webflow Development.",
		image: "https://www.tahielpedevilla.com/og.png",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tahiel Pedevilla",
		description: "Tahiel Pedevilla is a Web Developer specializing in Frontend Development and Webflow Development.",
		image: "https://www.tahielpedevilla.com/og.png",
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="antialiased scroll-smooth">
			<body className={`${spaceGrotesk.className}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
