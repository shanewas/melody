import React from "react";
import ReactPlayer from "react-player";
import "./videoPlayer.css";

export default function VideoPlayer({ url }) {
	return (
		<div className='player-wrapper'>
			<ReactPlayer
				className='react-player'
				url={url}
				width='100%'
				controls={true}
			/>
		</div>
	);
}
