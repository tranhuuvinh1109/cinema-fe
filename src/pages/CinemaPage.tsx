import { FaTimes } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { MessageItem } from "../components";

const CinemaPage = () => {
	return (
		<div className="flex justify-end items-center">
			<div className="w-3/4 mt-24 ml-6">
				<video
					className="w-full h-[36.25vw] object-cover brightness-[60%] transition duration-500"
					autoPlay
					controls
					loop
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
				/>
			</div>
			<div className="w-1/4 mt-24 text-white flex flex-col mr-6 ml-4">
				<div className="flex justify-between items-center">
					<h4 className="text-xl font-semibold">Chat</h4>
					<button className="p-1 bg-slate-200 opacity-70 rounded-full hover:opacity-100">
						<FaTimes className="text-slate-500" />
					</button>
				</div>
				<div
					className="flex flex-col justify-between h-[36.25vw]">
					<div className="flex-1 overflow-y-auto">
						<MessageItem />
						<MessageItem />
						<MessageItem myMessage />
						<MessageItem />
						<MessageItem myMessage />
						<MessageItem />
						<MessageItem />
						<MessageItem />
					</div>
					<div className="flex shrink-0 justify-between items-center px-4 mt-6">
						<input
							type="text"
							placeholder="Message ..."
							className="border border-white rounded-full py-1 px-3 bg-transparent flex-1 mr-4"
						/>
						<button className="flex justify-center items-center p-2 bg-slate-200 opacity-70 rounded-full hover:opacity-100">
							<TbSend fontSize={18} className="text-gray-500" />
						</button>
					</div>
				</div>
			</div>
		</div >
	);
};

export default CinemaPage;
