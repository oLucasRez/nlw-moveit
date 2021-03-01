//--------------------------------------------------------------------< hooks >
import { useState, useEffect } from "react";
//--------------------------------------------------------------------< types >
interface useWindowSizeData {
  width: number;
  height: number;
}
//========================================================[ < useWindowSize > ]
export default function useWindowSize(): useWindowSizeData {
  const [windowSize, setWindowSize] = useState<useWindowSizeData>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
