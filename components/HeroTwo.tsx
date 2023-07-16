// Imports
import Image from "next/image";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/public";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

// Styling
import styles from "@/styles/components/Hero.module.scss";

const HeroTwo: FC<IHeroTwo> = ({
	title,
	paragraph,
	backgroundImage,
	backgroundVideoUrl,
	backgroundImageOrVideo,
}) => {
	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;

	return (
		<section className={styles.hero}>
			<div className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[40vh] sm:min-h-[65vh]">
				<div
					className="absolute top-0 bottom-0 left-0 w-full h-full max-h-[40vh] sm:max-h-[65vh] z-[995] bg-center bg-no-repeat bg-cover"
					style={{backgroundImage: `url("${backgroundImage?.sourceUrl}")`}}
				>
					{/* Background Video */}
					<div
						className={
							backgroundImageOrVideo === "Video"
								? `absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden `
								: `hidden`
						}
					>
						<div className="hidden xl:block relative top-[-175px] pb-[56.25%] w-full h-full bg-center bg-no-repeat bg-cover">
							<iframe
								allowFullScreen
								allow="autoplay; fullscreen; picture-in-picture"
								className={
									backgroundVideoUrl
										? "absolute top-0 left-0 border-none w-full h-full"
										: `hidden`
								}
								src={backgroundVideoUrl}
							/>
						</div>
						<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-90 bg-gradient-to-b from-darkerRedTwo from-5% via-darkerRedTwo via-10% to-transparent to-100%" />
					</div>

					{/* Image */}
					<Image
						priority={true}
						width={backgroundImage?.mediaDetails?.width}
						height={backgroundImage?.mediaDetails?.height}
						className={
							backgroundImageOrVideo === "Image"
								? `block ${mainImageVideoTailwindcss}`
								: ` hidden`
						}
						src={backgroundImage?.sourceUrl}
						alt={backgroundImage?.altText}
					/>
					<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-90 bg-gradient-to-b from-darkerRedTwo from-5% via-darkerRedTwo via-10% to-transparent to-100%" />
				</div>
				<div className="container relative flex flex-col items-center justify-center px-4 m-auto text-center z-[995]">
					<div className="max-w-3xl">
						<motion.h1
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="flex flex-col text-center mb-0 sm:mb-3 text-2xl sm:text-6xl lg:text-7xl text-white font-bold leading-normal sm:leading-[3.5rem]"
						>
							{title}
						</motion.h1>
					</div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="max-w-xl"
					>
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-6 text-white leading-[1.5rem] text-medium text-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroTwo;
