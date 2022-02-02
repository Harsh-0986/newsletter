import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
	const [email, setEmail] = React.useState("");

	const onSubmit = async () => {
		if (!email) return;

		fetch("/api/send_welcome_mail", {
			method: "POST",
			body: JSON.stringify(email),
		})
			.then(() => console.log("Email sent"))
			.catch(() => console.log("Error"));
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Subscribe</title>
				<meta
					name="Subscribe to code with harsh newsletter"
					content="Subscribe to code with harsh newsletter"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className="
				bg-[#0f1624]
				w-full
				h-screen
				main-bg
				flex flex-col
				items-center
				justify-center
			"
			>
				<div className="my-10 max-w-2xl mx-auto">
					<h1 className="text-white font-semibold text-3xl mb-5">
						Subscribe to our newsletter
					</h1>
					<p className="text-[#a7abb5] text-xl">
						Get updates about latest videos.
						<br />
						Also get free cheatsheets + Developer News
					</p>
				</div>
				<div>
					<div className="flex flex-col mx-auto">
						<input
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							className="
							px-5
							py-2
							rounded-full
							placeholder-white
							w-96
							block
							bg-[#1a2b76]
							text-xl
							font-semibold
							text-white
						"
							placeholder="Enter your email"
							type="email"
						/>
						<div
							className="
						flex-1
							bg-[#1a2b76]
							color-white
							flex
							items-center
							justify-center
							px-4
							py-2
							m-3
							mx-5
							hover:bg-[#2247e7]
							rounded-full
							cursor-pointer
							ease-in
							duration-300
							transition
						"
							onClick={onSubmit}
						>
							<span className="text-white font-semibold">
								Subscribe
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
