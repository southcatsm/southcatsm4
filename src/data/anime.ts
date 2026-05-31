// loca anime qwq
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "Danganronpa",
		status: "completed",
		rating: 9.3,
		cover: "/assets/anime/dandan.jpg",
		description: "Once you come in, you must stay here for the rest of your life. If you want to graduate and leave, all you need to do is kill each other",
		episodes: "13 episodes",
		year: "2013",
		genre: ["Reasoning", "Campus"],
		studio: "スパイク・チュンソフト",
		link: "https://www.bilibili.com/bangumi/media/md4400",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2022-07",
		endDate: "2023-01",
	},
	{
		title: "非人哉",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/feiren.jpg",
		description: "中国古典神话传说中的“著名”精怪是如何在现代社会生存下去，他们成为了我们身边有着神仙特色的宅女、暖男、上班族、犬系男友，他们上演着生活中搞笑而怪诞的小故事，关乎快乐、关乎友情，在我们平凡、忙碌的日常构建了不可思议的二次元神仙幻境。",
		episodes: "96 episodes",
		year: "2018",
		genre: ["漫画改", "奇幻", "日常", "搞笑"],
		studio: "一汪空气",
		link: "https://www.bilibili.com/bangumi/media/md13372924",
		progress: 96,
		totalEpisodes: 96,
		startDate: "2023-04",
		endDate: "2024-10",
	},
	{
		title: "伍六七之暗影宿命",
		status: "completed",
		rating: 9.2,
		cover: "/assets/anime/567S4.jpg",
		description: "随着伍六七回到玄武国寻找他的身世，亦引起了七大暗影刺客的追捕。然而每一位暗影刺客都带着不同的目的和不同的过去，青凤的阴谋也在此浮出了水面。而此时等待着小鸡岛上的人民，又将是另一个危机，伍六七将如何面对他的抉择？",
		episodes: "10 episodes",
		year: "2023",
		genre: ["玄幻", "武侠"],
		studio: "Sharefun",
		link: "https://www.bilibili.com/bangumi/media/md28412536",
		progress: 10,
		totalEpisodes: 10,
		startDate: "2025-09",
		endDate: "2025-10",
	},
];

export default localAnimeList;
