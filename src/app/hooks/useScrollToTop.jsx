import { getContentElement } from "/src/app/utilities/elements";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    getContentElement().scrollTo(0, 0);
  }, [pathname]);
}