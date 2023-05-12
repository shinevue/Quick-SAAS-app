// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	content: {
		title: string;
		paragraph: string;
	};
}

const CTATwo: FC<IProps> = ({
	title,
	content,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<section
			className="py-10 bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(9, 39, 94, 0.85),
							rgba(9, 39, 94, 0.85)
						),url("${
							backgroundImage
								? backgroundImage
								: `/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg`
						}")`,
			}}
		>
			<div className="container px-4 mx-auto">
				<div className="max-w-md mx-auto lg:max-w-none">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
							<motion.div variants={stagger} className="mx-auto lg:max-w-md">
								<motion.h4
									variants={fadeInUp}
									className="mb-5 text-4xl font-bold text-white"
								>
									{title}
								</motion.h4>
								<Paragraph
									content={paragraph}
									tailwindStyling="mb-10 w-full lg:max-w-3xl mt-4 text-center lg:text-left text-white"
								/>
								<motion.div
									variants={stagger}
									className="flex flex-col flex-wrap sm:flex-row sm:items-center"
								>
									<motion.div variants={fadeInUp}>
										<Link
											href={`${buttonLink?.url}`}
											target={`${buttonLink?.target}`}
											className="relative inline-block w-full h-12 px-8 py-3 mb-3 overflow-hidden text-center text-white transition duration-200 group sm:w-auto sm:mb-0 sm:mr-4 bg-blue hover:bg-goldPrime"
										>
											{buttonLink?.title}
										</Link>
									</motion.div>
									<motion.div variants={fadeInUp}>
										<Link
											href={`${buttonLinkTwo?.url}`}
											target={`${buttonLinkTwo?.target}`}
											className="relative inline-block w-full h-12 px-8 py-3 mb-3 overflow-hidden text-center text-white transition duration-200 group sm:w-auto sm:mb-0 sm:mr-4 bg-goldPrime hover:bg-darkerBlue"
										>
											{buttonLinkTwo?.title}
										</Link>
									</motion.div>
								</motion.div>
							</motion.div>
						</div>
						<div className="w-full px-4 lg:w-1/2">
							<motion.div variants={stagger} className="flex flex-wrap -mx-4">
								<motion.div variants={fadeInUp} className="w-full p-8 px-4">
									<div className="mb-5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											shapeRendering="geometricPrecision"
											textRendering="geometricPrecision"
											imageRendering="optimizeQuality"
											fillRule="evenodd"
											clipRule="evenodd"
											viewBox="0 0 512 459.422"
											fill="#ffffff"
											className="object-cover object-center w-14 h-14"
										>
											<path
												fillRule="nonzero"
												d="M362.984 94.437c-19.862-33.342-47.592-54.122-77.309-64.116-23.792-8.001-48.898-9.157-72.283-4.368-23.25 4.76-44.772 15.407-61.54 31.037-19.898 18.547-33.108 44.252-34.479 75.573-.275 6.379-5.671 11.327-12.05 11.051l-.27-.014c-36.271-2.415-61.087 15.051-73.173 39.229-4.981 9.968-7.873 21.128-8.572 32.561-.704 11.484.798 23.161 4.601 34.11l.156.484c9.972 28.2 35.607 51.831 78.585 55.22-.075 2.223-.138 4.48-.187 6.773a424.06 424.06 0 00-.027 16.359c-.453.022-.915.014-1.378-.02-53.627-4.178-85.906-34.404-98.734-70.573l-.244-.633C1.243 243.184-.674 228.44.208 214.032c.886-14.457 4.599-28.69 11.017-41.53 14.668-29.34 43.134-51.235 83.99-52.233 4.049-32.805 19.182-60 40.875-80.219 19.884-18.535 45.299-31.139 72.682-36.744 27.25-5.58 56.508-4.234 84.241 5.093 36.237 12.188 69.818 37.893 92.847 79.406 23.908-4.704 45.073-1.653 62.972 6.763 25.016 11.765 43.251 33.896 53.516 60.032 10.06 25.617 12.507 55.278 6.155 82.709-10.119 43.697-42.088 81.838-100.456 90.053-.521.053-1.047.09-1.585.09l-1.563.004c.387-5.027.599-10.184.599-15.479 0-2.576-.059-5.11-.151-7.623h.112c46.796-6.81 72.409-37.306 80.489-72.206 5.303-22.908 3.253-47.697-5.161-69.124-8.215-20.916-22.46-38.468-41.738-47.532-28.509-13.405-68.907-8.536-118.729 30.611-5.026 3.951-12.308 3.077-16.259-1.948-3.951-5.025-3.078-12.307 1.948-16.259 20.127-15.813 39.175-26.693 56.975-33.459zM318.54 284.585c5.804 0 10.513 4.706 10.513 10.513 0 5.804-4.709 10.513-10.513 10.513-5.807 0-10.513-4.709-10.513-10.513 0-5.807 4.706-10.513 10.513-10.513zm0 121.316c5.804 0 10.513 4.708 10.513 10.512 0 5.807-4.709 10.513-10.513 10.513-5.807 0-10.513-4.706-10.513-10.513 0-5.804 4.706-10.512 10.513-10.512zm0-59.425c5.804 0 10.513 4.706 10.513 10.513 0 5.804-4.709 10.513-10.513 10.513-5.807 0-10.513-4.709-10.513-10.513 0-5.807 4.706-10.513 10.513-10.513zm-131.753-90.354c17.548 5.857 41.973 9.483 69.107 9.483 27.137 0 51.558-3.626 69.11-9.483 15.404-5.142 24.933-11.368 24.933-17.457s-9.529-12.314-24.933-17.456c-17.549-5.858-41.973-9.483-69.11-9.483-27.134 0-51.559 3.625-69.107 9.483-32.683 10.91-33.581 23.703 0 34.913zm163.187 124.074c-5.488 3.754-12.476 7.063-20.739 9.821-18.905 6.311-44.846 10.214-73.341 10.214-28.495 0-54.434-3.903-73.339-10.214-8.158-2.724-15.107-5.982-20.563-9.677v40.042c1.215 5.678 10.46 11.401 24.792 16.185 17.551 5.858 41.976 9.483 69.11 9.483 27.137 0 51.558-3.625 69.11-9.483 10.637-3.549 18.474-7.618 22.303-11.8 3.16-3.453 2.667-5.724 2.667-9.848v-34.723zM148.482 238.665c0-12.48 13.021-23.068 34.073-30.095 18.905-6.31 44.846-10.215 73.339-10.215 28.495 0 54.436 3.905 73.341 10.215 19.163 6.397 31.67 15.743 33.759 26.784.251.701.387 1.456.387 2.245v184.278c0 12.774-24.407 24.078-34.146 27.331-18.905 6.308-44.846 10.214-73.341 10.214-28.495 0-54.434-3.906-73.339-10.214-9.967-3.328-33.934-14.262-33.934-27.331v-4.283c0-59.641-.139-119.297-.139-178.929zm13.51 122.526c1.215 5.677 10.46 11.401 24.792 16.185 17.551 5.858 41.976 9.483 69.11 9.483 27.137 0 51.558-3.625 69.11-9.483 15.404-5.141 24.933-11.367 24.933-17.456h.073v-38.915c-5.488 3.756-12.512 7.063-20.775 9.821-18.905 6.311-44.846 10.213-73.341 10.213-28.495 0-54.434-3.902-73.339-10.213-8.158-2.724-15.107-5.982-20.563-9.675v40.04zm0-59.191c1.215 5.678 10.46 11.401 24.792 16.186 17.551 5.857 41.976 9.483 69.11 9.483 27.137 0 51.558-3.623 69.11-9.483 15.404-5.142 24.933-11.368 24.933-17.457h.073v-41.788c-5.488 3.754-12.512 7.06-20.775 9.819-18.905 6.31-44.846 10.215-73.341 10.215-28.493 0-54.434-3.905-73.339-10.215-8.158-2.722-15.107-5.979-20.563-9.676V302z"
											/>
										</svg>
									</div>
									<h5 className="mb-3 text-lg font-bold text-white">
										{content?.title}
									</h5>
									<Paragraph
										content={content?.paragraph}
										tailwindStyling="w-full lg:max-w-3xl mt-4 text-center lg:text-left text-white"
									/>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTATwo;
