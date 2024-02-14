import { Control } from "react-hook-form";

export interface IFormDetailsProductValues {
  slug: string;
  review_text: string;
  rate: number;
}

export interface StarsProps {
  label?: string;
  readed?: boolean;
  control?: Control<IFormDetailsProductValues, object>;
  isError?: boolean;
  errorMessage?: string;
  rate?: number | undefined;
}
