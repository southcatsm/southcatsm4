import type { FullscreenWallpaperConfig } from "../types/config";

// FULLSCREEN
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: [
			"/assets/desktop-banner/IMG_1801.png",
			"/assets/desktop-banner/IMG_1802.png",
			"/assets/desktop-banner/IMG_1803.png",
			"/assets/desktop-banner/IMG_1804.png",
			"/assets/desktop-banner/IMG_1805.png",
			"/assets/desktop-banner/IMG_1806.png",
			"/assets/desktop-banner/IMG_1807.png",
		], // PC
		mobile: [
			"/assets/mobile-banner/IMG_1808.png",
			"/assets/mobile-banner/IMG_1809.png",
			"/assets/mobile-banner/IMG_1810.png",
			"/assets/mobile-banner/IMG_1811.png",
			"/assets/mobile-banner/IMG_1812.png",
			"/assets/mobile-banner/IMG_1813.png",
			"/assets/mobile-banner/IMG_1814.png",
		], // PE
	}, 
	position: "center", // 壁纸位置，等同于 object-position
	carousel: {
		enable: true, // 启用轮播
		interval: 5, // 轮播间隔时间（秒）
	},
	zIndex: -1, // 层级，确保壁纸在背景层
	opacity: 0.8, // 壁纸透明度
	blur: 1, // 背景模糊程度
};
