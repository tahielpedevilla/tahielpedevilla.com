import { Suspense } from "react";

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
};

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-t-[#444444ba]">
			<div className="container mx-auto px-6 py-6 flex flex-col gap-4 lg:flex-row items-center justify-between">
				<nav className="flex flex-row items-center font-semibold relative gap-6">
					<Suspense fallback={null}>
						{Object.entries(socialLinks).map(([path, { name }]) => {
							return <FooterItem key={path} path={path} name={name} />;
						})}
					</Suspense>
				</nav>
				<div className="text-[#d3d3d3] text-sm">
					<span className="font-semibold text-sm">Tahiel Pedevilla</span>{" "}
					<span>&copy; {year}</span>
				</div>
			</div>
		</footer>
	);
}

function FooterItem({ path, name }) {
	return (
		<a href={path} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
			{name}
		</a>
	);
}
