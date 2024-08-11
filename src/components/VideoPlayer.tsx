import * as React from "react";

/*
  WHAT IT DOES:
  - The `VideoPlayer` component renders a responsive video player that automatically plays, loops, and is muted by default.

  HOW IT WORKS:
  - The video fills the width of its container (`w-full`) and adjusts its height based on the screen size (`h-64`, `sm:h-96`, `lg:h-128`).
  - The `object-cover` and `object-center-top` classes ensure that the video covers the entire container while maintaining its aspect ratio, with a focus on the top center of the video.
  - The video is set to autoplay, loop, and mute by default.

  HOW TO USE:
  - Use the `VideoPlayer` component to embed a video within your page. The video URL can be customized by changing the `src` attribute.

  EXAMPLE:

    <VideoPlayer />

  - This will render a video player that automatically plays a video in a loop without sound.
*/
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
