// Imports
import {FC} from "react";
import {
	stagger,
	initial,
	fadeInUp,
	fadeInTwo,
	initialTwo,
} from "../animations/animations";
import {motion} from "framer-motion";
import {IJumboContent} from "@/types/components/public";

// Components
import JumboCard from "@/components/Cards/JumboCard";
import Paragraph from "@/components/Elements/Paragraph";

const JumboContent: FC<IJumboContent> = ({
	title,
	cardOne,
	cardTwo,
	lastCard,
	cardThree,
	paragraph,
	gridContent,
}) => {
	return (
		<section className="overflow-hidden bg-white lg:px-4">
			<div className="container px-4 mx-auto">
				<div className="max-w-6xl mx-auto pt-28 pb-36">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="mb-20"
					>
						<motion.h2
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="max-w-md mb-6 text-3xl font-bold md:text-4xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl px-0 mb-10 text-base text-black"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-wrap -m-3"
					>
						{/* Card One */}
						<div className="w-full p-3 md:w-1/2">
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="h-full p-10 rounded-sm bg-lightGrey"
							>
								<div className="flex flex-wrap items-center mb-10">
									<div className="w-auto p-2">
										<motion.h4
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-lg font-semibold text-goldPrimeDark"
										>
											{cardOne?.subtitle}
										</motion.h4>
									</div>
								</div>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-4 text-3xl font-semibold"
								>
									{cardOne?.title}
								</motion.h3>
								<Paragraph
									content={cardOne?.paragraph}
									tailwindStyling="mb-10 text-base text-black"
								/>
							</motion.div>
						</div>
						{/* Card Two */}
						<motion.div
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeInTwo}
							className={
								cardTwo?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</motion.div>
						{/* Card Three */}
						<div className="w-full p-3 md:w-1/2">
							<div className="h-full p-16 rounded-sm bg-lightBlue">
								<div className="flex flex-wrap items-center justify-center h-full">
									<motion.div
										initial={initial}
										whileInView={stagger}
										viewport={{once: true}}
										className="w-full group"
									>
										<div className="relative z-10 transition duration-500 ease-in-out transform group-hover:-translate-y-6 group-hover:-translate-x-6 pr-7">
											<motion.div
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl"
											>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 text-3xl font-bold text-black"
												>
													{cardThree?.foreground?.subtitle}
												</motion.h4>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 text-base font-bold text-black"
												>
													{cardThree?.foreground?.title}
												</motion.h4>
												<Paragraph
													content={cardThree?.foreground?.paragraph}
													tailwindStyling="text-tiny text-black"
												/>
											</motion.div>
										</div>
										<div className="mt-2 transition duration-500 ease-in-out transform group-hover:translate-y-6 group-hover:translate-x-6 pl-7">
											<motion.div
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl"
											>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 text-3xl font-bold text-black"
												>
													{cardThree?.background?.subtitle}
												</motion.h4>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 text-base font-bold text-black"
												>
													{cardThree?.background?.title}
												</motion.h4>
												<Paragraph
													content={cardThree?.background?.paragraph}
													tailwindStyling="text-tiny text-black"
												/>
											</motion.div>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
						{/* Remaining Cards */}
						{gridContent?.length > 0 ? (
							gridContent?.map((item, keys) => (
								<JumboCard
									key={keys}
									title={item?.card?.title}
									subtitle={item?.card?.subtitle}
									paragraph={item?.card?.paragraph}
								/>
							))
						) : (
							<></>
						)}
						{/* Last Card */}
						<motion.div
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeInTwo}
							className={
								lastCard?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									backgroundImage: `url("${lastCard?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default JumboContent;
