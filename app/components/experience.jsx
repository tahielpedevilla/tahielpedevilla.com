import React from "react"

export default function Experience({ experience }) {
	const { title, company, companyUrl, startDate, endDate, description, technologies } = experience
	return (
		<li className="flex flex-col">
			<h3 className="text-center text-xl tracking-tight" aria-label={`${title} at ${company}`}>
				<p className="inline-block">{title} ·</p>
				{companyUrl ? (
					<a href={companyUrl} target="_blank" rel="noopener noreferrer" className="group">
						{" "}
						{company}
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
				) : (
					<p className="inline">{" "}{company}</p>
				)}
			</h3>
			<p className="mt-2 text-sm leading-normal text-center text-[#e7e7e7]">
				{startDate} – {endDate}
			</p>
			<p className="mt-2 leading-normal text-center text-sm lg:text-base">
				{description}
			</p>
			<ul className="mt-2 flex flex-wrap justify-center" aria-label="Technologies used">
				{technologies.map((technology) => (
					<li key={technology} className="mr-1.5 mt-2">
						<div className="flex items-center rounded-[6px] px-2 py-0.5 text-xs font-medium leading-5 border">
							{technology}
						</div>
					</li>
				))}
			</ul>
		</li>
	)
}
