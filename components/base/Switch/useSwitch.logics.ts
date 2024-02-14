// react
import { useCallback } from "react";


const useSwitch = (onChange: (() => (void | undefined)) | undefined) => {

  const handleSwitchToggle = useCallback(() => {
    // setChecked((prev) => !prev)
    onChange && onChange()
  }, [onChange]);

  return {
    handleSwitchToggle,
  };
};

export default useSwitch;
