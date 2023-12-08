import Link from "next/link";
import { i18n } from "@/translate/i18n";

const NavLinks = () => {
	return (
		<div className="flex gap-8 mobile:text-xs">
			<Link href="/">{i18n.t("navbar.navlinks.link1")}</Link>
			<Link href="/AboutMe"> {i18n.t("navbar.navlinks.link2")}</Link>
			<Link href="/Projects"> {i18n.t("navbar.navlinks.link3")}</Link>
			<Link href="/Skills"> {i18n.t("navbar.navlinks.link4")}</Link>
		</div>
	);
};
export default NavLinks;
