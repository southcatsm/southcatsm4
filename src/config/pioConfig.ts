import type { PioConfig } from "../types/config";

// Pio kanbanniang
export const pioConfig: PioConfig = {
	enable: true, // whether
	models: ["/pio/models/azurelane/chaijun_5.model3.json"], 
	position: "left", // where
	width: 280, 
	height: 250, 
	mode: "draggable", // normal ketuozhuai
	hiddenOnMobile: true, 
	hideAboutMenu: false, // hidden About 
	dialog: {
		welcome: "Welcome!", 
		touch: [
			"What are you doing?",
			"Stop touching me!",
			"HENTAI!",
			"Don't bully me like that!",
		], 
		home: "Click here to go back to homepage!", 
		skin: ["Want to see my new outfit?", "The new outfit looks great~"], 
		close: "QWQ See you next time~", 
		link: "https://github.com/southcatsm",
	},
};
