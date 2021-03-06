import Head from "next/head";
import React from "react";
import { db } from "../firebaseApp";
import { Oval } from "react-loader-spinner";
import  Success  from "./components/Success";

export default function Home() {
	const [email, setEmail] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);

	const onSubmit = async () => {
		if (!email) return;

		fetch("/api/send_welcome_mail", {
			method: "POST",
			body: JSON.stringify(email),
		})
			.then(async () => {
				setLoading(true);
				await db.collection("users").doc(email).set({});
				setLoading(false);
				setSuccess(true);
			})
			.catch((e) => console.log(e));
	};

	return (
		<div className="">
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
				px-8
				bg-[#0f1624]
				w-auto
				h-screen
				main-bg
				flex flex-col
				items-center
				justify-center
				text-center
			"
			>
				{success && <Success />}
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
					<div className="flex flex-col mx-auto   ">
						<input
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							className="
							mx-auto
							px-5
							w-full
							py-2
						    rounded-full
							placeholder-white
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
								{loading ? (
									<Oval
										color="white"
										height={20}
										width={80}
									/>
								) : (
							"Subscribe"
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
