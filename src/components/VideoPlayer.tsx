import * as React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="relative h-64 sm:h-96 lg:h-128 overflow-hidden flex items-center justify-center">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4" // URL of the video
          className="w-full h-full object-cover lg:object-center-top"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
