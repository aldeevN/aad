import { Control } from "react-hook-form";
export interface AvatarUploadProps {
  control: Control<any, any>;
  name: string;
  defaultSrc?: string;
}
