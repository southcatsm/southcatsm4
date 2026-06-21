// friends

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}
// qqapi:https://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg

export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Southcatsm",
		imgurl: "/assets/friends/southcatsm.png",
		desc: "Stars light up the sky and warmth embraces the world.",
		siteurl: "https://github.com/southcatsm",
		tags: ["Administrator", "Creator"],
	},
	{
		id: 2,
		title: "Northrabsl",
		imgurl: "https://cdn-docs.southcat.cc/common/avatars/141730585.jpg",
		desc: "The wind has just started to blow. It's time to strive bravely for life.",
		siteurl: "https://github.com/northrabsl",
		tags: ["Creator", "Contributor"],
	},
	{
		id: 3,
		title: "Daeroa",
		imgurl: "https://cdn-docs.southcat.cc/common/avatars/207446151.gif",
		desc: "When our goal is the horizon, all we leave to the world is our backs.",
		siteurl: "https://github.com/daeroa",
		tags: ["Advisor", "Contributor"],
	},
	{
		id: 4,
		title: "GrisEs",
		imgurl: "http://q1.qlogo.cn/g?b=qq&nk=1033440375&s=100",
		desc: "Facing the sea, with spring flowers in bloom",
		siteurl: "https://space.bilibili.com/1658622019",
		tags: ["Supporter"],
	},
	{
		id: 5,
		title: "Fradirina Mirijee",
		imgurl: "https://cdn-docs.southcat.cc/common/avatars/26261997.png",
		desc: "好久不见，管制一号",
		siteurl: "https://space.bilibili.com/1449471887",
		tags: ["Advisor", "Contributor"],
	},
	{
		id: 6,
		title: "he",
		imgurl: "https://cdn-docs.southcat.cc/common/avatars/31965131.png",
		desc: "橘子不去想苹果的问题",
		siteurl: "https://live.kuaishou.com/profile/3xd3ra98qks7e3u",
		tags: ["Supporter", "Contributor"],
	},
	{
		id: 7,
		title: "Mr.Deer",
		imgurl: "https://q.qlogo.cn/headimg_dl?dst_uin=1480145502&spec=640&img_type=jpg",
		desc: "私は管を撫でたい。",
		siteurl: "https://user.qzone.qq.com/1480145502",
		tags: ["Advisor"],
	},
	{
		id: 8,
		title: "wy",
		imgurl: "https://cdn-docs.southcat.cc/common/avatars/16473113.png",
		desc: "你必须忘记点什么，才有欢乐",
		siteurl: "https://www.douyin.com/user/MS4wLjABAAAAOxiycUNoddfryM8M_HAwMKzRZaq3BNF5ryRSd-4XfJs",
		tags: ["Contributor"],
	},
];

// get data
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// random disabled
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	//for (let i = shuffled.length - 1; i > 0; i--) {
	//	const j = Math.floor(Math.random() * (i + 1));
	//	[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	//}
	return shuffled;
}
