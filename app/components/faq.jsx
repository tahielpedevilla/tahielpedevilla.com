"use client"

import { useState } from "react"

const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="border-b border-[#282828]">
			<button
				className="flex justify-between items-center w-full py-5 text-left"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="font-medium text-lg">{question}</span>
				<svg
					className={`w-6 h-6 transition-transform ${
						isOpen ? "transform rotate-180" : ""
					}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{isOpen && (
				<div className="pb-5 text-base">
					<p className="text-[#d0d0d0]">{answer}</p>
				</div>
			)}
		</div>
	)
}

const FAQ = () => {
	const faqItems = [
		{
			question: "What types of websites do you specialize in?",
			answer:
				"I specialize in creating a wide range of websites, including business websites, e-commerce platforms, portfolios, and custom web applications. My expertise allows me to tailor solutions to your specific needs and industry requirements.",
		},
		{
			question: "How long does it typically take to complete a website?",
			answer:
				"The timeline for website completion varies depending on the complexity and scope of the project. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months or more. I'll provide a more accurate estimate after discussing your specific requirements.",
		},
		{
			question: "Do you offer website maintenance services?",
			answer:
				"Yes, I offer website maintenance services to ensure your site remains up-to-date, secure, and performs optimally. This can include regular updates, security checks, content updates, and performance optimizations.",
		},
		{
			question: "Can you help improve my website's search engine rankings?",
			answer:
				"Absolutely. I implement SEO best practices during the development process, including optimizing site structure, improving page load speeds, and ensuring mobile responsiveness. While I'm not an SEO specialist, my development work lays a strong foundation for improved search engine performance.",
		},
		{
			question: "What is your process for starting a new website project?",
			answer:
				"My process typically involves an initial consultation to understand your needs, followed by planning and wireframing. Once the design is approved, I move on to development, testing, and finally, launching your site. I maintain clear communication throughout to ensure the final product meets your expectations.",
		},
	]

	return (
		<section
			id="faq"
			className="mx-auto container px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24"
		>
			<h2 className="font-semibold text-center text-2xl sm:text-3xl lg:text-6xl tracking-tight leading-tight">
			Frequently Asked questions
			</h2>
			<div className="max-w-3xl mx-auto mt-8 lg:mt-12">
				{faqItems.map((item, index) => (
					<FAQItem key={index} question={item.question} answer={item.answer} />
				))}
			</div>
		</section>
	)
}

export default FAQ
