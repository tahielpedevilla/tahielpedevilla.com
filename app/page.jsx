import AvailavilityMarquee from "./components/availabilityMarquee"

export default function Page() {
	function calculateAge() {
		const birthYear = 2000
		const currentYear = new Date().getFullYear()
		const birthdayPassed =
			new Date().getMonth() > 6 || (new Date().getMonth() === 6 && new Date().getDate() >= 8)

		return currentYear - birthYear - (birthdayPassed ? 0 : 1)
	}

	const myAge = calculateAge()
	return (
		<main>
			<section
				id="home"
				className="flex flex-col justify-center items-center min-h-[100svh] h-[100svh] relative"
			>
				<div className="flex flex-col justify-center items-center mx-auto container px-6">
					<h1 className="max-w-[18ch] font-bold text-[2em] lg:text-[4em] tracking-tight leading-tight text-center">
						Web Developer Freelance Based in Buenos Aires
					</h1>
					<h2 className="font-medium max-w-lg md:text-xl mt-4 tracking-tight leading-tight text-center">
						Developing web solutions for brands that align with strategic visions and purpose-driven
						products.
					</h2>
					<a
						href="/#contact"
						className="mt-8 lg:mt-10 py-3 px-12 bg-[#fff] font-medium text-[#191919] rounded-[6px] hover:scale-105 ease-out duration-300"
					>
						Get in touch
					</a>
				</div>
				<AvailavilityMarquee />
			</section>
			<section id="work" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-20">
				<h2 className="font-medium text-2xl lg:text-[2.33vw] tracking-tight leading-none">Work</h2>
				<div className="flex flex-col gap-6 mt-6">
					<a
						href="https://ioio.mx/"
						className="bg-[url('/ioio-mobile.png')] lg:bg-[url('/ioio.png')] bg-cover bg-center bg-no-repeat w-full rounded-[1rem] h-[300px] lg:h-[500px] p-4 lg:p-6"
					>
						<header className="flex flex-col sm:flex-row w-full bg-[#ffffff] text-[#292929] rounded-[6px] p-4 sm:max-w-fit">
							<h3 className="font-bold text-2xl tracking-tight">IOIO</h3>
							<div className="flex flex-row items-center sm:ml-6 gap-2">
								<p className="text-sm lg:text-lg">Latte Agency</p>
								<span>/</span>
								<p className="text-sm lg:text-lg">May 2022</p>
							</div>
						</header>
					</a>
					<a
						href="https://mainlabs.academy/"
						target="_blank" rel="noopener noreferrer"
						className="bg-[url('/mainlabs-academy-mobile.png')] lg:bg-[url('/mainlabs-academy.png')] bg-cover bg-center bg-no-repeat w-full rounded-[1rem] h-[300px] lg:h-[500px] p-4 lg:p-6"
					>
						<header className="flex flex-col sm:flex-row w-full bg-[#ffffff] text-[#292929] rounded-[6px] p-4 sm:max-w-fit">
							<h3 className="font-bold text-2xl tracking-tight">Mainlabs Academy</h3>
							<div className="flex flex-row items-center sm:ml-6 gap-2">
								<p className="text-sm lg:text-lg">Freelance</p>
								<span>/</span>
								<p className="text-sm lg:text-lg">May 2022</p>
							</div>
						</header>
					</a>
					<a
						href="https://latteagency.com/"
						target="_blank" rel="noopener noreferrer"
						className="bg-[url('/latte-mobile.png')] lg:bg-[url('/latte.png')] bg-cover bg-center bg-no-repeat w-full rounded-[1rem] h-[300px] lg:h-[500px] p-4 lg:p-6"
					>
						<header className="flex flex-col sm:flex-row w-full bg-[#ffffff] text-[#292929] rounded-[6px] p-4 sm:max-w-fit">
							<h3 className="font-bold text-2xl tracking-tight">Latte Agency</h3>
							<div className="flex flex-row items-center sm:ml-6 gap-2">
								<p className="text-sm lg:text-lg">Latte Agency</p>
								<span>/</span>
								<p className="text-sm lg:text-lg">August 2022</p>
							</div>
						</header>
					</a>
				</div>
			</section>
			<section id="about" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-20">
				<h2 className="font-medium text-2xl lg:text-[2.33vw] tracking-tight leading-none">About</h2>
				<div className="flex flex-col gap-6 mt-6 items-center py-12 lg:py-24 text-lg">
					<p className="max-w-prose text-center text-sm lg:text-lg">
						Hey! I&apos;m Tahiel, a {myAge}-year-old frontend developer based in Buenos Aires,
						Argentina. I specialize in collaborating with brands to create highly functional and
						impactful websites.
					</p>
					<p className="max-w-prose text-center text-sm lg:text-lg">
						With a keen eye for detail, I&apos;m dedicated to ensuring an exceptional user
						experience in every project. I believe the path to delivering top-notch end products
						lies in meticulous attention to every facet of development.
					</p>
					<p className="max-w-prose text-center text-sm lg:text-lg">
						I&apos;m excited to make connections and collaborate on compelling projects. Let&apos;s
						connect and merge our expertise for some truly innovative and collaborative endeavors.
					</p>
				</div>
			</section>
			<section id="experience" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-20">
				<h2 className="font-medium text-2xl lg:text-[2.33vw] tracking-tight leading-none">
					Experience
				</h2>
				<ol className="flex flex-col gap-12 py-12 lg:py-6 max-w-prose mx-auto">
					<li className="flex flex-col">
						<h3
							className="text-center text-xl tracking-tight"
							aria-label="Web Developer Freelance"
						>
							<span className="inline-block">Web Developer ·</span>
							<span>
								{" "}
								Freelance
							</span>
						</h3>
						<p className="mt-2 text-sm leading-normal text-center text-[#e7e7e7]">
							April 2021 – Present
						</p>
						<p className="mt-2 leading-normal text-center text-sm lg:text-base text-[#f1f1f1]">
							As a freelance Web Developer, I provide customized digital solutions to both national
							and international clients. I take pride in helping my clients enhance their online
							presence and connect with their target audience by creating visually appealing and
							high-performing websites.
						</p>
						<ul className="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									React
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									SCSS
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									JavaScript
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									PHP
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									WordPress
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									Webflow
								</div>
							</li>
						</ul>
					</li>
					<li className="flex flex-col">
						<h3
							className="text-center text-xl tracking-tight"
							aria-label="Full Stack Developer at made2"
						>
							<span className="inline-block">Full Stack Developer ·</span>
							<a href="https://made2.co/" target="_blank" rel="noopener noreferrer" className="group">
								{" "}
								made2
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
						</h3>
						<p className="mt-2 text-sm leading-normal text-center text-[#e7e7e7]">
							September – October 2022
						</p>
						<p className="mt-2 leading-normal text-center text-sm lg:text-base text-[#f1f1f1]">
							I contributed to maintaining an international eCommerce platform, resolving bugs and
							implementing new features.
						</p>
						<ul className="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									Vue
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									Nuxt
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									JavaScript
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									CSS
								</div>
							</li>
						</ul>
					</li>
					<li className="flex flex-col">
						<h3
							className="text-center text-xl tracking-tight"
							aria-label="Frontend Developer at Bravo"
						>
							<span className="inline-block">Frontend Developer ·</span>
							<a href="https://www.linkedin.com/company/bravostudiocom/" target="_blank" rel="noopener noreferrer" className="group">
								{" "}
								Bravo
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
						</h3>
						<p className="mt-2 text-sm leading-normal text-center text-[#e7e7e7]">
							January – September 2022
						</p>
						<p className="mt-2 leading-normal text-center text-sm lg:text-base text-[#f1f1f1]">
							I collaborated with other developers and worked closely with the UX team on the
							redesign of several websites.
						</p>
						<ul className="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									HTML
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									SCSS
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									JavaScript
								</div>
							</li>
						</ul>
					</li>
					<li className="flex flex-col">
						<h3
							className="text-center text-xl tracking-tight"
							aria-label="Frontend Developer at Houston"
						>
							<span className="inline-block">Frontend Developer ·</span>
							<a href="https://houston.com.ar/" target="_blank" rel="noopener noreferrer" className="group">
								{" "}
								Houston
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
						</h3>
						<p className="mt-2 text-sm leading-normal text-center text-[#e7e7e7]">
							November 2021 – May 2022
						</p>
						<p className="mt-2 leading-normal text-center text-sm lg:text-base text-[#f1f1f1]">
							Collaborating alongside the CTO, I developed a range of websites for companies and
							businesses across diverse sectors.
						</p>
						<ul className="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									HTML
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									SCSS
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									JavaScript
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									PHP
								</div>
							</li>
							<li className="mr-1.5 mt-2">
								<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									SQL
								</div>
							</li>
						</ul>
					</li>
				</ol>
			</section>
			<section id="contact" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-20">
				<h2 className="font-medium text-2xl lg:text-[2.33vw] tracking-tight">Contact</h2>
				<div className="flex flex-col mt-6 items-center py-40 text-lg">
					<h3 className="text-3xl lg:text-8xl font-bold tracking-tight leading-normal">
						Let’s Collaborate
					</h3>
					<a href="mailto:tahielpeed@gmail" className="group text-lg lg:mt-6">
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
			</section>
		</main>
	)
}
