"use client"

import { useState } from "react"

const FAQ = () => {
	const faqItems = [
		{
			question: "What types of websites can you build?",
			answer:
				"I can build various types of websites including business sites, online stores, portfolios, and custom web applications. I adapt my development to fit your specific needs and industry requirements.",
		},
		{
			question: "How long does it take to build a website?",
			answer:
				"The time to build a website depends on its complexity. A basic website might take 1-2 weeks, while more complex ones can take 2-3 months or more. I can give you a more precise estimate after we discuss your specific needs.",
		},
		{
			question: "Do you offer ongoing website support?",
			answer:
				"Yes, I provide ongoing support to keep your website running smoothly. This includes regular updates, security checks, and performance improvements. I can also help with content updates when needed.",
		},
		{
			question: "What's your process for creating a website?",
			answer:
				"My process starts with understanding your needs, then planning the website structure. After that, I begin coding and development. Once the site is built, I thoroughly test it before launch. I keep you updated throughout the process to ensure the final website meets your expectations.",
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

export default FAQ
