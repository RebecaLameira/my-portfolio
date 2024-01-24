"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import dynamic from "next/dynamic";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (resolvedTheme === "dark") {
		return (
			<SunIcon
				onClick={() => setTheme("light")}
				className="h-7 w-7 text-gray-200"
			/>
		);
	}
	if (resolvedTheme === "light") {
		return (
			<MoonIcon
				onClick={() => setTheme("dark")}
				className="h-6 w-6 text-gray-400"
			/>
		);
	}
};

export default dynamic(() => Promise.resolve(ThemeToggle), { ssr: false });
