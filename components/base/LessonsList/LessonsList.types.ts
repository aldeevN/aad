export interface Lesson {
  id: string | string[] | undefined;
  title: string;
  duration?: any;
  preview?: any;
  is_available: boolean;
  key: number;
}

export interface LessonsListProps {
  lessons: Lesson[];
  idCourse?: string | string[] | undefined;
  setCurrentLessonNumber: (val: number) => void;
}
