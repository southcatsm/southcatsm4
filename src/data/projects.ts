// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "tools" | "novels";
	taga: string[];
	status: "completed" | "recommend" | "hot" | "planned";
	guider?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "succubus",
		title: "魅魔生成",
		description: "检测一下你是怎样的一个魅魔哦(<ゝω・)☆",
		image: "https://cdn-docs.southcat.cc/projects/succubus/IMG_9752.png",
		category: "tools",
		taga: ['创意', '猎奇', '搞笑'],
		status: "hot",
		startDate: "2024-11-11",
		guider: "https://preview.southcat.cc/blog/20241111/",
		featured: true,
		visitUrl: "../projects/succubus/"
	},
	{
		id: "fate",
		title: "缘分测定",
		description: "检测一下你和ta有没有缘分呀(<ゝω・)☆",
		image: "https://cdn-docs.southcat.cc/projects/fate/IMG_0016.jpg",
		category: "tools",
		taga: ['创意', '玄学', '搞笑'],
		status: "completed",
		startDate: "2023-07-30",
		guider: "https://preview.southcat.cc/blog/20240930/",
		visitUrl: "../projects/fate/"
	},
	{
		id: "von",
		title: "冯·奴",
		description: "当生存成为唯一信仰，道德便成了最先碎掉的骨头。有些债，亡命天涯也躲不掉。",
		image: "https://cdn-docs.southcat.cc/projects/novels/vonnou.png",
		category: "novels",
		taga: ['同人', '暗黑', '宿命', '乡土'],
		status: "planned",
		startDate: "2025-01-22",
		guider: "https://docs.qq.com/doc/DZWJVdGpSVW9Md0V4",
		visitUrl: "../projects/von-nou/"
	},
	{
		id: "crematorium",
		title: "天降白月光VS清纯青梅",
		description: "退婚时你冷酷无情，追妻时你狼狈不堪，只是这次我连头都不会回，而你却死在了别人的水晶球下。",
		image: "https://cdn-docs.southcat.cc/projects/novels/crematorium.png",
		category: "novels",
		taga: ['同人', '火葬场', '狗血', '修罗场'],
		status: "planned",
		startDate: "2025-06-22",
		guider: "https://docs.qq.com/doc/DZWJVdGpSVW9Md0V4",
		visitUrl: "../projects/crematorium/"
	},
	{
		id: "myrevenge",
		title: "西北三狼跪碎膝盖骨",
		description: "他熬过了虐待，他踩着仇人的尸骨上位，却没想到刀尖最后指向了唯一的兄弟，那就一起死吧。",
		image: "https://cdn-docs.southcat.cc/projects/novels/myrevenge.png",
		category: "novels",
		taga: ['同人', '复仇逆袭', '宿命', '反目'],
		status: "planned",
		startDate: "2025-06-22",
		guider: "https://docs.qq.com/doc/DZVhKb2RnUGJmRXpO",
		visitUrl: "../projects/myrevenge/"
	},
];
	
// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length,
		  recommend = projectsData.filter((p) => p.status === "recommend").length,
		  planned = projectsData.filter((p) => p.status === "planned").length,
		  hot = projectsData.filter((p) => p.status === "hot").length;

	return {
		total,
		byStatus: {
			completed,
			hot,
			recommend,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const tg = new Set<string>();
	projectsData.forEach((project) => {
		project.taga.forEach((tech) => {
			tg.add(tech);
		});
	});
	return Array.from(tg).sort();
};
