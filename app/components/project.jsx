import Image from "next/image";

export default function Project({ project }) {
	const { title, link, mobileImage, desktopImage, client, date } = project;

	return (
		<a
			href={link}
			className="relative w-full rounded-[2rem] h-[300px] lg:h-[500px] overflow-hidden group p-4 lg:p-6"
			target="_blank"
		>
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
			<header className="flex flex-col sm:flex-row w-full backdrop-blur-sm bg-[#ffffffa8] text-[#0c0c0c] rounded-[1rem] p-4 sm:max-w-fit relative z-10">
				<h3 className="font-bold text-2xl tracking-tight">{title}</h3>
				<div className="flex flex-row items-center sm:ml-6 gap-2">
					<p className="text-sm lg:text-lg">{client}</p>
					<span>/</span>
					<p className="text-sm lg:text-lg">{date}</p>
				</div>
			</header>
		</a>
	);
}
