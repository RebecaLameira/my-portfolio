"use client";

import { FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa6";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (resolvedTheme === "dark") {
		return (
			<FiSun
				onClick={() => setTheme("light")}
				size={30}
				className="text-gray-200 mr-3"
			/>
		);
	}
	if (resolvedTheme === "light") {
		return (
			<FaRegMoon
				onClick={() => setTheme("dark")}
				size={30}
				className="text-gray-400 mr-3"
			/>
		);
	}
};

export default ThemeToggle;
