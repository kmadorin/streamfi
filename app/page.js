"use client";

import { useAccount } from "wagmi";
import Header from "@/components/header";
import TipsForm from "@/components/tipsForm";

export default function Home() {
	const { isConnected } = useAccount();

	return (
		<div className="w-full h-screen flex flex-col justify-center items-center">
			<Header />
			<main>
				<TipsForm />
			</main>
		</div>
	);
}