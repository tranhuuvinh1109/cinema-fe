export type MovieType = {
	id: string;
	thumbnailUrl: string;
	title: string;
	videoUrl: string;
	description: string;
	genre: string;
	duration: string;
}
export const data: MovieType = {
	id: '1',
	genre: 'Movies',
	duration: 'duration',
	thumbnailUrl: 'https://download.blender.org/ED/cover.jpg',
	title: "Elephant's Dream",
	videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
	description: 'Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.',
}