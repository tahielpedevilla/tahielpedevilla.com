import localFont from 'next/font/local'

import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const montreal = localFont({
  src: './PPNeueMontreal-Regular.otf',
  display: 'swap',
})

export const metadata = {
	title: "Tahiel Pedevilla",
	description:
		"Tahiel Pedevilla is a Web Developer specializing in Frontend Development and Webflow Development",
	openGraph: {
		images: "/og-image.png",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tahiel Pedevilla",
		description:
			"Tahiel Pedevilla is a Web Developer specializing in Frontend Development and Webflow Development",
		creator: "@tahielpedevilla",
		images: ["https://tahielpedevilla.com/og-image.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="antialiased scroll-smooth">
			<body className={`${montreal.className}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
