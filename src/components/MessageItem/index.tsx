import React from "react";
import { Avatar } from "..";
interface MessageItemProps {
	myMessage?: boolean;
}
const MessageItem: React.FC<MessageItemProps> = ({ myMessage = false }) => {
	if (myMessage) {
		return (
			<div className="flex text-right w-full justify-end mt-4">
				<div>
					<p className="text-xs">Tran Huu Vinh</p>
					<div className="flex flex-col">
						<div className="mt-1">
							<span className="px-3 py-1 bg-gray-100 rounded-full text-black">hello</span>
						</div>
						<div className="mt-2">
							<span className="px-3 py-1 bg-gray-100 rounded-full text-black">HelloHelloHelloHelloHelloaaaaa</span>
						</div>
						<div className="mt-2">
							<span className="px-3 py-1 bg-gray-100 rounded-full text-black">HelloHelloaaaaa</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className="flex mt-4">
			<div className="flex flex-col justify-end">
				<Avatar src="https://symbols.vn/wp-content/uploads/2022/02/Hinh-Rose-Blackpink-ngau-cute.jpeg" alt="avt" />
			</div>
			<div className="ml-2">
				<p className="text-xs">Tran Huu Vinh</p>
				<div className="flex flex-col">
					<div className="mt-1">
						<span className="px-3 py-1 bg-gray-100 rounded-full text-black">hello</span>
					</div>
					<div className="mt-2">
						<span className="px-3 py-1 bg-gray-100 rounded-full text-black">HelloHelloHelloHelloHelloaaaaa</span>
					</div>
					<div className="mt-2">
						<span className="px-3 py-1 bg-gray-100 rounded-full text-black">HelloHelloaaaaa</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MessageItem;