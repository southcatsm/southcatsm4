import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "", // match to Key.announcement
	content: "This is southcat.cc（Preview-2）", // content
	closable: true, // whether visitors can close
	link: {
		enable: true, 
		text: "Learn More",
		url: "/about/", 
		external: false, // inner link
	},
};
