import { useMemo } from "react";
import {
  GoCommentDiscussion,
  GoDownload,
  GoHome,
  GoPackage,
  GoShareAndroid,
} from "react-icons/go";

import { useLocation } from "react-router-dom";

export const useRoutes = () => {
  const location = useLocation().pathname;

  const routes = useMemo(() => [
    {
      title: "Dashboard",
      icon: GoHome,
      path: "/",
      active: location === "/",
    },
    {
      title: "Documents",
      icon: GoDownload,
      path: "/documents",
      active: location === "/documents",
    },
    {
      title: "Analytics",
      icon: GoShareAndroid,
      path: "/analytics",
      active: location === "/analytics",
    },
    {
      title: "Contact",
      icon: GoCommentDiscussion,
      path: "/contact",
      active: location === "/contact",
    },
    {
      title: "Pages",
      icon: GoPackage,
      path: "/pages",
      active: location === "/pages",
    },
  ]);

  return routes;
};
