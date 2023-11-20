import Link from "next/link"

export default function Page() {
	function getArgentinianTime() {
		const argentinianLocale = "es-AR"

		// Obtén la hora actual en formato local de Argentina
		const argentinianTime = new Date().toLocaleTimeString(argentinianLocale, {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
			timeZone: "America/Argentina/Buenos_Aires",
		})

		return argentinianTime
	}

	const argentinianTime = getArgentinianTime()
	
	function calculateAge() {
		const birthYear = 2000;
		const currentYear = new Date().getFullYear();
		const birthdayPassed = new Date().getMonth() > 6 || (new Date().getMonth() === 6 && new Date().getDate() >= 8);
	
		return currentYear - birthYear - (birthdayPassed ? 0 : 1);
	}
	
	const myAge = calculateAge();
	return (
		<main className="flex flex-col h-full">
			<section
				id="home"
				className="flex flex-col justify-center items-center min-h-screen h-screen"
			>
				<div className="flex flex-col justify-center items-center">
					<h1 className="max-w-[30ch] font-bold text-[3.33vw] tracking-tight leading-tight text-center">
						Frontend Enginner & Webflow Developer Based in Buenos Aires
					</h1>
					<a
						href="/#contact"
						className="mt-8 py-3 px-6 bg-[#e3e3e3] font-medium text-[#282828] rounded-[6px]"
					>
						Get in touch
					</a>
				</div>
				<div className="flex text-sm lg:text-lg flex-row justify-between items-end mx-auto container px-6 py-6 absolute bottom-0 w-full">
					<div className="leading-tight tracking-tighter">
						<p>CRAFTING CODE</p>
						<p>SHAPING EXPERIENCES</p>
					</div>
					<div className="inline">
						<p className="inline leading-tight tracking-tighter">Buenos Aires</p>
						<p className="inline uppercase leading-tight tracking-tighter"> {argentinianTime}</p>
					</div>
				</div>
			</section>
			<section id="work" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-3">
				<h2 className="font-medium text-[2.33vw] tracking-tight leading-none">Work</h2>
				<div className="flex flex-col gap-6 mt-6">
					<a
						href="#"
						className="bg-[url('/work.png')] bg-cover bg-center bg-no-repeat w-full rounded-[30px] h-[300px] lg:h-[500px] p-6"
					>
						<header className="flex flex-row bg-[#282828] rounded-[6px] p-4 max-w-fit">
							<h3 className="font-bold text-2xl tracking-tight">IOIO</h3>
							<div className="flex flex-row items-center ml-6 gap-2">
								<p className="text-sm lg:text-lg">Freelance</p>
								<span>/</span>
								<p className="text-sm lg:text-lg">May 2022</p>
							</div>
						</header>
					</a>
					<a
						href="#"
						className="bg-[url('/work.png')] bg-cover bg-center bg-no-repeat w-full rounded-[30px] h-[300px] lg:h-[500px] p-6"
					>
						<header className="flex flex-row bg-[#282828] rounded-[6px] p-4 max-w-fit">
							<h3 className="font-bold text-2xl tracking-tight">IOIO</h3>
							<div className="flex flex-row items-center ml-6 gap-2">
								<p className="text-sm lg:text-lg">Freelance</p>
								<span>/</span>
								<p className="text-sm lg:text-lg">May 2022</p>
							</div>
						</header>
					</a>
					<a
						href="#"
						className="bg-[url('/work.png')] bg-cover bg-center bg-no-repeat w-full rounded-[30px] h-[300px] lg:h-[500px] p-6"
					>
						<header className="flex flex-row bg-[#282828] rounded-[6px] p-4 max-w-fit">
							<h3 className="font-bold text-2xl tracking-tight">IOIO</h3>
							<div className="flex flex-row items-center ml-6 gap-2">
								<p className="text-sm lg:text-lg">Freelance</p>
								<span>/</span>
								<p className="text-sm lg:text-lg">May 2022</p>
							</div>
						</header>
					</a>
				</div>
			</section>
			<section id="about" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-3">
				<h2 className="font-medium text-[2.33vw] tracking-tight leading-none">About</h2>
				<div className="flex flex-col gap-6 mt-6 items-center py-24 text-lg">
					<p className="max-w-prose text-center">
						Hey! I&apos;m Tahiel, a {myAge}-year-old frontend developer based in Buenos Aires, Argentina.
						I specialize in collaborating with brands to create highly functional and impactful
						websites.
					</p>
					<p className="max-w-prose text-center">
						With a keen eye for detail, I&apos;m dedicated to ensuring an exceptional user
						experience in every project. I believe the path to delivering top-notch end products
						lies in meticulous attention to every facet of development.
					</p>
					<p className="max-w-prose text-center">
						I&apos;m excited to make connections and collaborate on compelling projects. Let&apos;s
						connect and merge our expertise for some truly innovative and collaborative endeavors.
					</p>
				</div>
			</section>
			<section id="experience" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-3">
				<h2 className="font-medium text-[2.33vw] tracking-tight leading-none">Experience</h2>
				<ol className="flex flex-col gap-12 mt-6 max-w-prose mx-auto">
					<li className="flex flex-col">
						<h3
							className="text-center text-xl tracking-tight"
							aria-label="Frontend Developer at Houston"
						>
							<span className="inline-block">Frontend Developer ·</span>
							<a href="#" className="group">
								{" "}
								Freelance
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="inline-block h-5 w-5 mb-0.5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
										clip-rule="evenodd"
									></path>
								</svg>
							</a>
						</h3>
						<p className="mt-2 text-sm leading-normal text-center text-[#aaaaaa]">
							April – August 2021
						</p>
						<p className="mt-2 text-sm leading-normal text-center text-[#f1f1f1]">
							As a freelance Web Developer, I provide customized digital solutions to both national
							and international clients. I take pride in helping my clients enhance their online
							presence and connect with their target audience by creating visually appealing and
							high-performing websites.
						</p>
						<ul class="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									React
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									SCSS
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									JavaScript
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									PHP
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									WordPress
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									Webflow
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
							<a href="#" className="group">
								{" "}
								Freelance
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="inline-block h-5 w-5 mb-0.5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
										clip-rule="evenodd"
									></path>
								</svg>
							</a>
						</h3>
						<p className="mt-2 text-sm leading-normal text-center text-[#aaaaaa]">
							April – August 2021
						</p>
						<p className="mt-2 text-sm leading-normal text-center text-[#f1f1f1]">
							As a freelance Web Developer, I provide customized digital solutions to both national
							and international clients. I take pride in helping my clients enhance their online
							presence and connect with their target audience by creating visually appealing and
							high-performing websites.
						</p>
						<ul class="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									React
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									SCSS
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									JavaScript
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									PHP
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									WordPress
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									Webflow
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
							<a href="#" className="group">
								{" "}
								Freelance
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="inline-block h-5 w-5 mb-0.5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
										clip-rule="evenodd"
									></path>
								</svg>
							</a>
						</h3>
						<p className="mt-2 text-sm leading-normal text-center text-[#aaaaaa]">
							April – August 2021
						</p>
						<p className="mt-2 text-sm leading-normal text-center text-[#f1f1f1]">
							As a freelance Web Developer, I provide customized digital solutions to both national
							and international clients. I take pride in helping my clients enhance their online
							presence and connect with their target audience by creating visually appealing and
							high-performing websites.
						</p>
						<ul class="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									React
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									SCSS
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									JavaScript
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									PHP
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									WordPress
								</div>
							</li>
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
									Webflow
								</div>
							</li>
						</ul>
					</li>
				</ol>
			</section>
			<section id="contact" className="flex flex-col mx-auto container px-6 py-6 scroll-mt-3">
			<h2 className="font-medium text-[2.33vw] tracking-tight leading-none">Contact</h2>
				<div className="flex flex-col gap-6 mt-6 items-center py-40 text-lg">
					<h3 className="text-[3vw] font-bold tracking-tight">Let’s Collaborate</h3>
					<a href="mailto:tahielpeed@gmail" className="text-[#f1f1f1] group">
						tahielpeed@gmail.com
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="inline-block h-5 w-5 mb-0.5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</section>
		</main>
	)
}
