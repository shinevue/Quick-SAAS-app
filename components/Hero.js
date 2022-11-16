import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Hero.module.scss";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.mainHero}>
				<div className="pt-24 sm:pt-34 pb-8 bg-cover">
					<div className="container px-4 mx-auto">
						<div className="max-w-2xl xl:max-w-4xl mx-auto text-center">
							<h1 className="font-heading text-[2rem] sm:text-5xl md:text-6xl font-bold font-heading leading-normal sm:leading-[4.5rem] text-center text-white mb-6">
								Smarter Business,
								<br /> Simpler Inventory
							</h1>
							<p className="max-w-md md:max-w-lg mx-auto text-lg leading-6 text-white mb-10">
								BlueInventory is your powerful central inventory management
								solution. Simpler Inventory so you’re free to grow and manage
								your business.
							</p>
							<div className="flex flex-col md:flex-row items-center justify-center mb-24">
								<Link href="#">
									<a
										className="inline-block w-full md:w-[fit-content] rounded-[15px] sm:w-auto py-4 px-6 mb-4 sm:mb-0 sm:mr-4 text-center font-heading font-medium text-base text-white hover:ease-in-out hover:duration-200 bg-blue hover:bg-limeGreen"
										contentEditable="false"
									>
										Try BlueInventory Today
									</a>
								</Link>
								<Link href="#">
									<a className="inline-block w-full md:w-[fit-content] sm:w-auto py-4 px-6 text-center font-heading font-medium text-base text-white rounded-[15px] bg-darkBlue hover:text-white hover:bg-blue hover:ease-in-out hover:duration-200">
										Learn more
									</a>
								</Link>
							</div>
							<Link href="#HowItWorks">
								<a className="inline-block text-white">
									<svg
										width="26"
										height="30"
										viewBox="0 0 26 30"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13 1V29M13 29L25 17M13 29L1 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
				<div className="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-blueTwo bg-opacity-30"></div>
				<nav className="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
					<div className="flex flex-col px-6 h-full">
						<Link href="#">
							<a className="inline-block ml-4 mb-7">
								<Image
									src="/img/Logos/BlueInventory Logo One White.png"
									alt=""
									width="250px"
									height="100px"
								/>
							</a>
						</Link>
						<ul className="w-full mb-auto pb-16">
							<Link href="#">
								<a className="font-heading block text-base font-medium py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]">
									Home
								</a>
							</Link>
							<Link href="#">
								<a className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]">
									Features
								</a>
							</Link>
							<Link href="#">
								<a className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]">
									About
								</a>
							</Link>
							<Link href="#">
								<a className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]">
									Pricing
								</a>
							</Link>
							<Link href="#">
								<a className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]">
									Resources
								</a>
							</Link>
							<Link href="#">
								<a className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]">
									Contact Us
								</a>
							</Link>
						</ul>
						<div className="w-full">
							<Link href="#">
								<a className="block w-full py-4 px-4 mb-4 text-center font-heading font-medium text-base hover:text-blue border border-lightGrey hover:border-blue rounded-[15px] hover:ease-in-out hover:duration-200">
									Log in
								</a>
							</Link>
							<Link href="#">
								<a className="block w-full py-4 px-4 mb-8 text-center font-heading font-medium text-base text-white bg-blue hover:bg-limeGreen border border-blue hover:border-limeGreen rounded-[15px] hover:ease-in-out hover:duration-200">
									Sign up
								</a>
							</Link>
							<p className="pl-2 text-sm text-black">2022 © BlueInventory</p>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Hero;
