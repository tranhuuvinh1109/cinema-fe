import React from "react";
interface AvatarProps {
	src: string;
	alt: string;
	size?: 'lg' | 'md' | 'sm';
}
const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
	return (
		<img src={src} alt={alt} className="rounded-full w-10 h-10 object-contain" />
	)
}

export default Avatar;