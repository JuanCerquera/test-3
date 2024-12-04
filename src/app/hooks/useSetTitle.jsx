import { useContext, useEffect } from "react";
import { TitleContext } from "/src/app/utilities/contexts";

export default function useSetTitle(title) {
  const setTitle = useContext(TitleContext);

  useEffect(() => {
    setTitle(title);
  }, [setTitle]);
}
