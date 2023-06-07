// Imports
import Head from "next/head";
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/GetAllThemesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/GetAllMenuLinks";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorPage from "../components/Elements/ErrorPage";

interface INoPageExits {
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	navbarMenuLinks: {
		navbarMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	industriesMenuLinks: {
		industriesMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	themesOptionsContent: {
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		twitterLink: string;
		facebookLink: string;
		linkedinLink: string;
		copyrightText: string;
		errorPageContent: {
			title: string;
			paragraph: string;
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
			backgroundImage: {
				sourceUrl: string;
			};
		};
	};
}

const noPageExits: NextPage<INoPageExits> = ({
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
}) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
			className="min-h-screen bg-white bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg")`,
			}}
		>
			<Head>
				<title>404 Page Not Found | Inventory Management Software</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/img/Logos/BlueInventory favicon Two.png" />
			</Head>

			<Navbar
				themesOptionsContent={themesOptionsContent}
				navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
			/>

			<ErrorPage
				title={themesOptionsContent?.errorPageContent?.title}
				paragraph={themesOptionsContent?.errorPageContent?.paragraph}
				buttonLink={themesOptionsContent?.errorPageContent?.buttonLink}
				buttonLinkTwo={themesOptionsContent?.errorPageContent?.buttonLinkTwo}
				backgroundImage={
					themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl
				}
			/>
			<Footer
				email={themesOptionsContent?.email}
				emailTwo={themesOptionsContent?.emailTwo}
				phoneNumber={themesOptionsContent?.phoneNumber}
				twitterLink={themesOptionsContent?.twitterLink}
				facebookLink={themesOptionsContent?.facebookLink}
				linkedinLink={themesOptionsContent?.linkedinLink}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
				copyrightText={themesOptionsContent?.copyrightText}
				phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
				industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
			/>
		</motion.div>
	);
};

export default noPageExits;

export const getStaticProps: GetStaticProps = async () => {
	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const industriesMenuLinks: object = await getIndustriesMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			navbarMenuLinks,
			footerMenuLinks,
			industriesMenuLinks,
			themesOptionsContent,
		},
		revalidate: 60,
	};
};
