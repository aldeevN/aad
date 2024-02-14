import { Controller } from "react-hook-form";
import { AvatarStyled, Overlaid, Image } from "./AvatarUpload.styles";
import Dropzone from "react-dropzone";

// svg
import CameraIcon from "./icons/camera.svg";
import UserIcon from "./icons/user.svg";

import { AvatarUploadProps } from "./AvatarUpload.types";

export const AvatarUpload: React.FC<AvatarUploadProps> = ({ control, name, defaultSrc, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onBlur, onChange } }) => (
        <Dropzone onDrop={onChange} multiple={false}>
          {({ getRootProps, getInputProps }) => {
            let url = defaultSrc;
            if (value) {
              url = URL.createObjectURL(value[0]);
            }
            return (
              <>
                <AvatarStyled {...getRootProps()} {...props}>
                  <input name={name} onBlur={onBlur} {...getInputProps()} />
                  {url ? <Image src={url} alt="аватар"/> : <UserIcon />}
                  <Overlaid>
                    <CameraIcon />
                  </Overlaid>
                </AvatarStyled>
              </>
            );
          }}
        </Dropzone>
      )}
    />
  );
};
