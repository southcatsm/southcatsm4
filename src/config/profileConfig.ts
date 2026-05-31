import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/profile.png", // in src/
	name: "Southcatsm",
	bio: "Stars light up the sky and warmth embraces the world.",
	typewriter: {
		enable: true, // tpwriter
		speed: 30, // unit-ms
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/635978552",
		},
		{
			name: "X",
			icon: "fa7-brands:twitter",
			url: "https://x.com/southcatsm",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/southcatsm",
		},
		{
			name: "Donate",
			icon: "material-symbols:coffee",
			url: "/donate/",
		},
		{
			name: "E-Mail",
			icon: "material-symbols:attach-email-outline-rounded",
			url: "mailto:ad@southcat.cc",
		},
	],
};
