import Project from "./components/project"
import FAQ from "./components/faq"

const projects = [
	{
		title: "IOIO",
		link: "https://ioio.mx/",
		mobileImage: "/ioio-mobile.png",
		desktopImage: "/ioio.png",
		client: "Latte Agency",
		date: "May 2022",
	},
	{
		title: "Mainlabs Academy",
		link: "https://mainlabs.academy/",
		mobileImage: "/mainlabs-academy-mobile.png",
		desktopImage: "/mainlabs-academy.png",
		client: "Freelance",
		date: "May 2022",
	},
	{
		title: "Latte Agency",
		link: "https://latteagency.com/",
		mobileImage: "/latte-mobile.png",
		desktopImage: "/latte.png",
		client: "Latte Agency",
		date: "August 2023",
	},
	{
		title: "Marqui & Arw",
		link: "https://marqui-arw-boda.vercel.app/",
		mobileImage: "/latte-mobile.png",
		desktopImage: "/latte.png",
		client: "Freelance",
		date: "December 2023",
	},
]

export default function Page() {
	function calculateAge() {
		const birthYear = 2000
		const currentYear = new Date().getFullYear()
		const birthdayPassed =
			new Date().getMonth() > 6 ||
			(new Date().getMonth() === 6 && new Date().getDate() >= 8)

		return currentYear - birthYear - (birthdayPassed ? 0 : 1)
	}

	const myAge = calculateAge()

	return (
		<main>
			<section
				id="home"
				className="flex flex-col justify-center items-center py-40 relative"
			>
				<div className="flex flex-col justify-center items-center mx-auto container px-6 z-10">
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-center">
						Expert Web Development Services
					</h1>
					<h2 className="font-medium max-w-lg text-base sm:text-lg md:text-xl lg:text-2xl mt-4 tracking-tight leading-tight text-center text-[#d0d0d0]">
						I build robust, scalable websites that load fast, work smoothly, and
						adapt to any device.
					</h2>
					<a
						href="https://cal.com/tahielpedevilla/15min"
						className="mt-8 lg:mt-10 py-3 px-12 bg-[#fff] font-medium text-lg text-[#0c0c0c] rounded-full hover:scale-105 ease-out duration-300"
					>
						Book Free Intro Call
					</a>
				</div>
				<div className="h-[80vh] w-[80vh] blur-[12rem] rounded-full bg-[#b4b4b431] absolute" />
			</section>
			<section
				id="work"
				className="flex flex-col mx-auto container px-6 py-6 scroll-mt-20"
			>
				<div className="flex flex-col gap-12 mt-6">
					{projects.map((project) => (
						<Project key={project.title} project={project} />
					))}
				</div>
			</section>
			<section
				id="about"
				className="grid grid-cols-2 mx-auto container px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-20"
			>
				<h2 className="font-semibold text-2xl sm:text-3xl lg:text-6xl tracking-tight leading-tight mb-8 sm:mb-12">
					About Me
				</h2>
				<div className="flex flex-col gap-6 sm:gap-8">
					<p className="max-w-prose text-base sm:text-lg lg:text-xl">
						I&apos;m Tahiel, a {myAge}-year-old web developer based in Buenos
						Aires, Argentina. My expertise lies in creating effective websites
						that drive business growth and enhance online presence.
					</p>
					<p className="max-w-prose text-base sm:text-lg lg:text-xl">
						With years of experience in web development, I&apos;ve refined my
						skills to deliver websites that not only look impressive but also
						perform exceptionally. I focus on building responsive, fast-loading,
						and SEO-friendly sites that give your business a competitive edge in
						the digital world.
					</p>
					<p className="max-w-prose text-base sm:text-lg lg:text-xl">
						My passion is transforming your business objectives into a powerful
						online platform. Whether you&apos;re aiming to boost conversions,
						enhance user engagement, or modernize your digital footprint,
						I&apos;m here to bring your vision to life using efficient code and
						contemporary web technologies.
					</p>
				</div>
			</section>
			<FAQ />
			<section
				id="contact"
				className="flex flex-col mx-auto container px-6 py-6 scroll-mt-20"
			>

				<div className="flex flex-col mt-6 items-center py-40 text-lg">
					<h2 className="text-3xl lg:text-6xl font-bold tracking-tight leading-normal">
						Interested in working with me?
					</h2>
					<a
						href="https://cal.com/tahielpedevilla/15min"
						className="mt-8 lg:mt-10 py-3 px-12 bg-[#fff] font-medium text-lg text-[#0c0c0c] rounded-full hover:scale-105 ease-out duration-300"
					>
						Book Free Intro Call
					</a>
					<div className="text-lg mt-8 lg:mt-10">
						<p className="inline">Or drop me an email at </p>
						<a href="mailto:tahielpeed@gmail" className="group inline">
							tahielpeed@gmail.com
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="inline-block h-5 w-5 mb-0.5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</main>
	)
}
