import { useState } from "react";
import { Switch } from "@headlessui/react";

const Toggle = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="flex gap-8 items-center font-extralight ">
			<span className="laptop:text-xs mobile:text-xs">English</span>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? "bg-primary" : "bg-primary"
				} relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span
					className={`${
						enabled ? "translate-x-6" : "translate-x-1"
					} inline-block h-4 w-4 transform rounded-full bg-white transition`}
				/>
			</Switch>
			<span className="laptop:text-xs mobile:text-xs">Português</span>
		</div>
	);
};

export default Toggle;
