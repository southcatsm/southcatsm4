export interface Project {
tag: boolean;
	id: string;
	title: string;
	description: string;
	image?: string;
	category: string;
	taga: string[];
	status: "completed" | "hot" | "planned" |  "recommend" | "serialize";
	demoUrl?: string;
	sourceUrl?: string;
	guider?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export interface ProjectCardProps {
	project: Project;
	size?: "small" | "medium" | "large";
	showImage?: boolean;
	maxTags?: number;
}
