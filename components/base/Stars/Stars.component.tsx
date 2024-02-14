// // react
// import React, { FC } from "react";

// import { Controller } from "react-hook-form";

// // styles
// import { StarsLabel, StarsStyled, StarsWrapper, Error } from "./Stars.styles";
// // types
// import { StarsProps } from "./Stars.types";

// export const Stars: FC<StarsProps> = ({
//   control,
//   readed,
//   label,
//   isError,
//   errorMessage,
//   rate,
// }) => {
//   return (
//     <>
//       {control ? (
//         <>
//           <StarsWrapper readed={readed}>
//             <Controller
//               control={control}
//               name="rate"
//               render={({ field: { onChange, value } }) => (
//                 <StarsStyled
//                   starCount={5}
//                   emptyStarColor="#9EB6FA"
//                   starColor="#2C60F5"
//                   onStarClick={!readed ? onChange : () => onChange(value)}
//                   value={value}
//                   name="star"
//                 />
//               )}
//             />
//             {label && <StarsLabel>{label}</StarsLabel>}
//           </StarsWrapper>
//           {isError && <Error>{errorMessage}</Error>}
//         </>
//       ) : (
//         <StarsStyled
//           starCount={5}
//           emptyStarColor="#9EB6FA"
//           starColor="#2C60F5"
//           value={rate && rate || 5}
//           name="star"
//         />
//       )}
//     </>
//   );
// };
