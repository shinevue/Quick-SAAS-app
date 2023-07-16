// Imports
import {FC} from "react";
import {IBulletListCard} from "@/types/components/public";

const BulletListCard: FC<IBulletListCard> = ({
	bulletPoint,
	iconFillColor,
	tailwindStyling,
}) => {
	return (
		<li className="flex items-center mb-6">
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="96px"
				height="96px"
				viewBox="0 0 96 96"
				className="w-5 h-5"
				enableBackground="new 0 0 96 96"
			>
				<g>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						fill={iconFillColor}
						d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
					/>
				</g>
			</svg>
			<span className={tailwindStyling}>{bulletPoint}</span>
		</li>
	);
};

export default BulletListCard;
