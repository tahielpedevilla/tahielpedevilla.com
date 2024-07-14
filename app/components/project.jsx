import Image from "next/image"

export default function Project({ project }) {
	const { title, link, mobileImage, desktopImage, client, date } = project

	return (
		<a href={link} className="group block" target="_blank">
			<figure className="relative rounded-[1rem] border group-hover:rounded-[2rem] duration-700 transition-all border-[#444444ba] h-[300px] lg:h-[500px] overflow-hidden">
				<Image
					src={mobileImage}
					alt={title}
					fill
					className="absolute inset-0 w-full h-full lg:hidden object-cover"
				/>
				<Image
					src={desktopImage}
					alt={title}
					fill
					className="absolute inset-0 w-full h-full hidden lg:block group-hover:scale-105 transition-transform duration-700 object-cover ease"
				/>
			</figure>
			<header className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-white mt-4">
				<h3 className="font-bold text-2xl tracking-tight mb-2 sm:mb-0">
					{title}
				</h3>
				<div className="flex items-center space-x-4">
					<div className="flex items-center space-x-2">
						<p className="text-sm lg:text-lg">{client}</p>
						<span>·</span>
						<p className="text-sm lg:text-lg">{date}</p>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</div>
			</header>
		</a>
	)
}
