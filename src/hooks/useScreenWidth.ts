import { useEffect, useState } from "react";

type ReturnType = {
  widht: number;
};

export const useScreenWidth = (): ReturnType => {
  const [widht, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  return {
    widht,
  };
};
