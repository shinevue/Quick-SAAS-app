import {FC} from "react";
import {motion} from "framer-motion";
import styled from "styled-components";
import Paragraph from "./../Elements/Paragraph";
import {fadeInUp, stagger} from "../../animations/animations";

const ContentImageCard = styled.div`
	ol,
	ul {
		padding-left: 30px;

		li {
			padding: 0px 10px;
			position: relative;
			list-style-type: decimal;

			strong {
				font-family: $fontStyle_main;
				@apply text-darkBlue font-bold tracking-wider uppercase text-medium py-4;
			}
		}
	}
`;

interface IProps {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
}

const contentImageCard: FC<IProps> = ({
	title,
	paragraph,
	contentLocation,
	backgroundImage,
}) => {
	return (
		<ContentImageCard
			className="relative min-h-[450PX] px-8 py-20 bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(9, 39, 94, 0),
							rgba(9, 39, 94, 0.65)
						),url("${
							backgroundImage
								? backgroundImage
								: `/svg/backgroundSVG/stacked-waves-haikei-blue.svg`
						}")`,
			}}
		>
			<div
				className={
					contentLocation === "Left"
						? `flex flex-col items-baseline justify-center mx-auto max-w-7xl`
						: `flex flex-col items-end justify-center mx-auto max-w-7xl`
				}
			>
				<motion.div variants={stagger} className="max-w-2xl p-10 bg-white">
					<motion.h2
						variants={fadeInUp}
						className="text-flatGreen text-center lg:text-left tracking-normal leading-[2.75rem] font-semibold text-3xl md:text-4xl"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left text-base"
					/>
				</motion.div>
			</div>
		</ContentImageCard>
	);
};

export default contentImageCard;
