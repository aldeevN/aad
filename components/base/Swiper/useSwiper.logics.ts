// react redux
import { useState, useEffect, useRef } from "react";


const usePromotion = () => {

  const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
    const [wrapper, setWrapper] = useState<T | null>(null);
    const ref = useRef<T>(null);

    useEffect(() => {
      if (ref.current) {
        setWrapper(ref.current);
      }
    }, []);

    return [wrapper, ref];
  };

  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return {
    prevEl, nextEl, prevElRef, nextElRef
  };
};

export default usePromotion;