import localFont from "next/font/local"

import "./globals.css"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

const montreal = localFont({
	src: "./PPNeueMontreal-Regular.otf",
	display: "swap",
})

export const metadata = {
	title: "Tahiel Pedevilla — UI Developer Specializing in Frontend & Webflow",
	description:
		"Tahiel Pedevilla is a UI developer focused on crafting fast, responsive, and visually engaging websites using frontend technologies and Webflow. Helping businesses elevate their digital presence with clean, user-friendly interfaces.",
	openGraph: {
		title: "Tahiel Pedevilla — UI Developer Specializing in Frontend & Webflow",
		description:
			"Tahiel Pedevilla is a UI developer focused on crafting fast, responsive, and visually engaging websites using frontend technologies and Webflow. Helping businesses elevate their digital presence with clean, user-friendly interfaces.",
		url: "https://tahielpedevilla.com",
		images: [
			{
				url: "https://tahielpedevilla.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Tahiel Pedevilla — UI Developer Specializing in Frontend & Webflow",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tahiel Pedevilla — UI Developer Specializing in Frontend & Webflow",
		description:
			"Tahiel Pedevilla is a UI developer focused on crafting fast, responsive, and visually engaging websites using frontend technologies and Webflow. Helping businesses elevate their digital presence with clean, user-friendly interfaces.",
		creator: "@tahielpedevilla",
		images: ["https://tahielpedevilla.com/og-image.jpg"],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="antialiased scroll-smooth">
			<body className={`${montreal.className}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
