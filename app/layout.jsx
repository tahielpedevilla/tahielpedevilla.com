import localFont from "next/font/local"

import "./globals.css"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

const montreal = localFont({
	src: "./PPNeueMontreal-Regular.otf",
	display: "swap",
})

export const metadata = {
	title: "Tahiel Pedevilla — Expert Web Developer based in Argentina",
	description:
		"Tahiel Pedevilla is an expert web developer specializing in frontend technologies and Webflow development. With a strong focus on creating intuitive and visually appealing user interfaces, Tahiel helps businesses and individuals craft exceptional digital experiences.",
	openGraph: {
		title: "Tahiel Pedevilla — Expert Web Developer based in Argentina",
		description:
			"Tahiel Pedevilla is an expert web developer specializing in frontend technologies and Webflow development. With a strong focus on creating intuitive and visually appealing user interfaces, Tahiel helps businesses and individuals craft exceptional digital experiences.",
		url: "https://tahielpedevilla.com",
		images: [
			{
				url: "https://tahielpedevilla.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Tahiel Pedevilla — Expert Web Developer",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tahiel Pedevilla — Expert Web Developer based in Argentina",
		description:
			"Tahiel Pedevilla is an expert web developer specializing in frontend technologies and Webflow development. With a strong focus on creating intuitive and visually appealing user interfaces, Tahiel helps businesses and individuals craft exceptional digital experiences.",
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
