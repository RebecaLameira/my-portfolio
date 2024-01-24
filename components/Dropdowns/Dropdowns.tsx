"use client";

import dynamic from "next/dynamic";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Dropdowns = () => {
	return (
		<div className=" flex absolute top-24 right-3 ring-1 ring-inset ring-gray-300 bg-white p-3 rounded-md shadow-sm dark:bg-black dark:ring-gray-600">
			<ThemeToggle />
		</div>
	);
};

export default dynamic(() => Promise.resolve(Dropdowns), { ssr: false });
