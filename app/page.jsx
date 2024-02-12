import AvailavilityMarquee from "./components/availabilityMarquee";
import Experience from "./components/experience";
import Project from "./components/project";

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
		date: "August 2022",
	},
];

const experiences = [
	{
		title: "Web Developer",
		company: "Freelance",
		companyUrl: "",
		startDate: "April 2021",
		endDate: "Present",
		technologies: ["React", "SCSS", "JavaScript", "PHP", "WordPress", "Webflow"],
		description:
			"As a freelance Web Developer, I provide customized digital solutions to both national and international clients. I take pride in helping my clients enhance their online presence and connect with their target audience by creating visually appealing and high-performing websites.",
	},
	{
		title: "Full Stack Developer",
		company: "made2",
		companyUrl: "https://made2.co/",
		startDate: "September 2022",
		endDate: "October 2022",
		technologies: ["Vue", "Nuxt", "JavaScript", "CSS"],
		description:
			"I contributed to maintaining an international eCommerce platform, resolving bugs and implementing new features.",
	},
	{
		title: "Frontend Developer",
		company: "Bravo",
		companyUrl: "https://www.linkedin.com/company/bravostudiocom/",
		startDate: "January 2022",
		endDate: "September 2022",
		technologies: ["HTML", "CSS", "JavaScript"],
		description:
			"I collaborated with other developers and worked closely with the UX team on the redesign of several websites.",
	},
	{
		title: "Frontend Developer",
		company: "Houston",
		companyUrl: "https://houston.com.ar/",
		startDate: "November 2021",
		endDate: "May 2022",
		technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
		description:
			"Collaborating alongside the CTO, I developed a range of websites for companies and businesses across diverse sectors.",
	},
];

export default function Page() {
	function calculateAge() {
		const birthYear = 2000;
		const currentYear = new Date().getFullYear();
		const birthdayPassed =
			new Date().getMonth() > 6 || (new Date().getMonth() === 6 && new Date().getDate() >= 8);

		return currentYear - birthYear - (birthdayPassed ? 0 : 1);
	}

	const myAge = calculateAge();

	return (
		<main>
			<section
				id="home"
				className="flex flex-col justify-center items-center min-h-[100svh] h-[100svh] relative"
			>
				<div className="flex flex-col justify-center items-center mx-auto container px-6">
					<h1 className="max-w-[18ch] font-bold text-[6.66vw] lg:text-[4em] tracking-tight leading-tight text-center">
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
					{projects.map((project) => (
						<Project key={project.title} project={project} />
					))}
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
					{experiences.map((experience) => (
						<Experience key={experience.title} experience={experience} />
					))}
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
	);
}
