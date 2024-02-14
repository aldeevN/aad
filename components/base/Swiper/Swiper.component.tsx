// // react
// import React, { FC, useRef } from "react";

// // next
// import Image from "next/image";

// // lib
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // components
// import { VideoPlayer } from "../VideoPlayer";

// // custom hooks
// import useSwiper from "./useSwiper.logics";

// // types
// import { SwiperProps } from "./Swiper.types";

// // svg
// import Next from "./icons/next.svg";
// import Prev from "./icons/prev.svg";

// // styles
// import { ButtonNavPrev, ButtonNavNext, SwiperStyled } from "./Swiper.styles";

// export const SwiperComponent: FC<SwiperProps> = ({
//   images,
//   videos,
//   isVideo,
//   ...props
// }) => {
//   const { prevEl, nextEl, prevElRef, nextElRef } = useSwiper();
//   const controllerPlayer = useRef<any>(null);
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index: number, className: string) {
//       return '<span class="' + className + '">  </span>';
//     },
//   };

//   const isVideoShow = isVideo === "true" ? true : false;

//   return (
//     <SwiperStyled {...props}>
//       <Swiper
//         pagination={pagination}
//         navigation={{
//           prevEl,
//           nextEl,
//         }}
//         onSlideChange={() => {
//           controllerPlayer.current?.handlePouse();
//         }}
//         modules={[Navigation, Pagination]}
//         className="mySwiper"
//         style={{ paddingBottom: 50, fontSize: 0 }}
//       >
//         {images?.map((each, index) => (
//           <SwiperSlide style={{ fontSize: 0 }} key={index}>
//             <Image
//               width={852}
//               height={478}
//               src={each}
//               alt="изображение"
//               objectFit="cover"
//               objectPosition="center"
//             />
//           </SwiperSlide>
//         ))}
//         {isVideoShow && (
//           <>
//             {videos?.map((each, index) => (
//               <SwiperSlide
//                 style={{ width: "100%", height: "100%" }}
//                 key={index}
//               >
//                 <VideoPlayer ref={controllerPlayer} url={each} />
//               </SwiperSlide>
//             ))}
//           </>
//         )}
//         <ButtonNavPrev ref={prevElRef} as={"button"}>
//           <Prev />
//         </ButtonNavPrev>
//         <ButtonNavNext ref={nextElRef} as={"button"}>
//           <Next />
//         </ButtonNavNext>
//       </Swiper>
//     </SwiperStyled>
//   );
// };
