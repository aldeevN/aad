// react
import React, { FC } from "react";

// lib
import Image from "next/image";
import moment from "moment";

// styles
import {
  ImageWrapper,
  Item,
  Label,
  Lesson,
  List,
  Time,
  Closed,
  Footer,
} from "./LessonsList.styles";

// types
import { LessonsListProps } from "./LessonsList.types";

// icons
import ClosedIcon from "./icons/closed.svg";
import PlayIcon from "./icons/play.svg";

// custom hooks
import useLessonsList from "./useLessonsList.logics";

export const LessonsList: FC<LessonsListProps> = ({
  lessons,
  idCourse,
  setCurrentLessonNumber,
}) => {
  const { handleChangeLesson } = useLessonsList(idCourse, setCurrentLessonNumber);

  return (
    <>
      {lessons ? (
        <List>
          {lessons.map(({ title, duration, id, is_available, preview }, index) => (
            <Item key={index} onClick={() => handleChangeLesson(id, is_available, index)}>
              <Lesson>
                <ImageWrapper>
                  <Image
                    src={preview || "/images/noImg.jpg"}
                    width={300}
                    height={140}
                    objectFit="cover"
                    alt="изображение к уроку"
                  />
                  <Time>{moment.unix(duration).utc().format("HH:mm:ss")}</Time>
                  {!is_available && (
                    <Closed>
                      <ClosedIcon />
                    </Closed>
                  )}
                </ImageWrapper>
                <Footer>
                  <PlayIcon style={{ fill: is_available ? "#2C60F5" : "#ADC1DA" }} />
                  <Label>{title}</Label>
                </Footer>
              </Lesson>
            </Item>
          ))}
        </List>
      ) : null}
    </>
  );
};
