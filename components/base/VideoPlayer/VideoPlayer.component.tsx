// // react
// import React, { useImperativeHandle, forwardRef } from "react";

// // lib
// import Player from "react-player";

// // styles

// import { VideoWrapper } from "./VideoPlayer.styles";

// import defaultPreview from "../../../public/images/lending/registration.png";

// // types
// import { VideoPlayerProps } from "./VideoPlayer.types";
// import { useVideoPlayer } from "./useVideoPlayer.logics";

// export const VideoPlayer = forwardRef<any, VideoPlayerProps>(
//   ({ className, url, preview, ...props }, ref) => {
//     const {
//       state,
//       usePlayer,
//       handlePlay,
//       handleProgress,
//       handleRangeTime,
//       handleSeel,
//       handleMuted,
//       handleChangeVolume,
//       handleMoveMouseControls,
//       handleOnEndedMedia,
//       handlePouse,
//     } = useVideoPlayer();

//     const { pip, playing, controls, muted, duration, playbackRate, volume, loop } = state;

//     useImperativeHandle(ref, () => ({
//       handlePlay,
//       handleProgress,
//       handleRangeTime,
//       handleSeel,
//       handleMuted,
//       handleChangeVolume,
//       handleMoveMouseControls,
//       handleOnEndedMedia,
//       handlePouse,
//     }));

//     console.log(preview);
    

//     return (
//       <VideoWrapper className={className}>
//         <Player
//           progressInterval={state.played}
//           width="100%"
//           height="100%"
//           className="player"
//           playsInline
//           onPlay={handlePlay}
//           onPause={handlePouse}
//           config={{
//             file: {
//               attributes: {
//                 poster: preview || defaultPreview.src,
//               },
//             },
//             youtube: {
//               playerVars: {
//                 showinfo: 0,
//                 rel: 0,
//                 modestbranding: 1,
//                 iv_load_policy: 3,
//                 loop: 1,
//                 controls: 1,
//                 play: 0,
//                 disablekb: 1,
//               },
//             },
//           }}
//           ref={usePlayer}
//           url={url}
//           pip={pip}
//           playing={playing}
//           controls={controls}
//           muted={muted}
//           duration={duration}
//           playbackRate={playbackRate}
//           volume={volume}
//           loop={loop}
//           {...props}
//         />
//       </VideoWrapper>
//     );
//   }
// );

// VideoPlayer.displayName = "VideoPlayer";
