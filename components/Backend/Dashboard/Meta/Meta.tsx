// Imports
import {FC} from "react";
import Head from "next/head";
import {useDashboardMetaContext} from "@/context/dashboard";

const Meta: FC = () => {
	const context = useDashboardMetaContext();

	return (
		<>
			<Head>
				<title>{`${context.pageTitle} | Inventory Management Software`}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/img/Logos/BlueInventory favicon Two.png" />
			</Head>
		</>
	);
};

export default Meta;
